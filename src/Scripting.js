/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var ControlNode = MindFusion.Diagramming.ControlNode;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;

var Rect = MindFusion.Drawing.Rect;

var diagramView = null;
var diagram = null;
var tracing = false;
var currentNode = null, variableListNode = null;
var currentScope = {};

document.addEventListener('DOMContentLoaded', (event) => {
    Diagram.registerClass(ScriptedNode, "ScriptedNode", "cnScriptedNode", 1, ControlNode);
    Diagram.registerClass(TerminatorNode, "TerminatorNode", "cnTerminator", 1, ScriptedNode);
    Diagram.registerClass(OperationNode, "OperationNode", "cnOperation", 1, ScriptedNode);
    Diagram.registerClass(FunctionNode, "FunctionNode", "cnFunction", 1, ScriptedNode);
    Diagram.registerClass(VariableListNode, "VariableListNode", "cnVarList", 1, ScriptedNode);

    // create a DiagramView component that wraps the "diagram" canvas
    diagramView = DiagramView.create(document.querySelector("#diagram"));
    diagramView.behavior = MindFusion.Diagramming.Behavior.DrawLinks;
    diagramView.modificationStart = MindFusion.Diagramming.ModificationStart.AutoHandles;

    diagram = diagramView.diagram;
    diagram.routeLinks = true;
    diagram.showAnchors = MindFusion.Diagramming.ShowAnchors.Always;
    diagram.roundedLinks = true;
    diagram.linkShape = MindFusion.Diagramming.LinkShape.Cascading;
    diagram.linkHeadShape = "Triangle";
    diagram.linkHeadShapeSize = 3;

    diagram.shadowOffsetX = 0;
    diagram.shadowOffsetY = 0;

    // Create the special variable list node
    variableListNode = new VariableListNode(diagramView);
    variableListNode.bounds = new Rect(0, 0, 60, 80);
    variableListNode.zIndex = 10000;
    variableListNode.visible = false;
    diagram.addItem(variableListNode);
    updateVariableListPosition();

    diagram.addEventListener(Events.nodeSelected, onNodeSelected);
    diagram.addEventListener(Events.nodeDeselected, onNodeDeselected);
    diagram.addEventListener(Events.linkCreating, onLinkCreating);
    diagram.addEventListener(Events.nodeCreated, onNodeCreated);
    diagramView.scrollElementH().addEventListener("scroll", onScroll.bind(this));
    diagramView.scrollElementH().style.zIndex = 4;
    diagramView.scrollElementV().addEventListener("scroll", onScroll.bind(this));
    diagramView.scrollElementV().style.zIndex = 4;
    window.addEventListener("resize", onResize.bind(this));

    document.querySelector("button#stopButton").disabled = true;

    onLoad();
});

function onScroll() {
    this.updateVariableListPosition();
}

function onResize() {
    this.updateVariableListPosition();
}

function onDiagramLoaded() {
    // Obtain a reference to the new variable list node
    for (var i = 0; i < diagram.nodes.length; i++) {
        var variableList = diagram.nodes[i];
        if (variableList instanceof VariableListNode) {
            variableListNode = variableList;
            break;
        }
    }
}

function updateVariableListPosition() {
    var viewport = diagramView.viewport;
    var nodeBounds = variableListNode.bounds;

    variableListNode.bounds = new Rect(
        viewport.right() - nodeBounds.width - 2,
        viewport.bottom() - nodeBounds.height - 2,
        nodeBounds.width, nodeBounds.height);
}

function bringIntoView(node) {
    var viewRect = diagramView.viewport;
    var nodeRect = node.bounds;
    diagramView.scrollX = nodeRect.center().x - viewRect.width / 2;
    diagramView.scrollY = nodeRect.center().y - viewRect.height / 2;
}

function validateProcess() {
    // Check for connectivity
    var graph = new MindFusion.Graphs.Graph();
    var vertexMap = new Map();
    var edgeMap = new Map();
    for (var i = 0; i < diagram.nodes.length; i++) {
        var node = diagram.nodes[i];
        if (node instanceof VariableListNode)
            continue;

        if (node instanceof FunctionNode)
            continue;

        vertexMap.set(node, graph.createVertex());
    }

    for (var i = 0; i < diagram.links.length; i++) {
        var link = diagram.links[i];
        var origin = vertexMap.get(link.origin);
        var destination = vertexMap.get(link.destination);

        edgeMap.set(link, graph.createEdge(origin, destination));
    }

    if (graph.getConnectedComponents().length > 1) {
        alert("Validation failed! The process contains disconnected components.");
        return false;
    }

    // Check for start/end nodes
    var hasStart = false;
    var hasEnd = false;
    for (var i = 0; i < diagram.nodes.length; i++) {
        var terminator = diagram.nodes[i];
        if (!(terminator instanceof TerminatorNode))
            continue;

        if (terminator.getTerminatorType() == TerminatorNodeType.Start)
            hasStart = true;
        else if (terminator.getTerminatorType() == TerminatorNodeType.End)
            hasEnd = true;
    }

    if (!hasStart) {
        alert("Validation failed! The process does not have a start node.");
        return false;
    }

    if (!hasEnd) {
        alert("Validation failed! The process does not have an end node.");
        return false;
    }

    // Process function nodes and Check for missing links - all out anchors must have links
    for (var i = 0; i < diagram.nodes.length; i++) {
        var functionNode = diagram.nodes[i];
        if (functionNode instanceof FunctionNode) {
            // create the defined function and add it to the window scope
            var functionName = functionNode.getFunctionName();
            var functionParams = functionNode.getParameterNames();
            var functionBody = functionNode.getCode();

            window[functionName] = new Function(functionParams, functionBody);

            continue;
        }

        var operation = diagram.nodes[i];

        if (!(operation instanceof OperationNode))
            continue;

        if (operation.getOperationType() == OperationType.Choice) {
            if (operation.incomingLinks.links == 0) {
                diagram.selection.change(operation);
                alert("Validation failed! A choice has an undefined input.");
                return false;
            }
            if (operation.outgoingLinks.length != 2) {
                diagram.selection.change(operation);
                alert("Validation failed! A choice has an undefined output.");
                return false;
            }
        }
        else if (operation.getOperationType() == OperationType.Operation) {
            if (operation.incomingLinks.length == 0) {
                diagram.selection.change(operation);
                alert("Validation failed! An operation has an undefined input.");
                return false;
            }
            if (operation.outgoingLinks.length != 1) {
                diagram.selection.change(operation);
                alert("Validation failed! An operation has an undefined output.");
                return false;
            }
        }
    }

    return true;
}

function findStartNode() {
    for (var i = 0; i < diagram.nodes.length; i++) {
        var terminator = diagram.nodes[i];
        if (!(terminator instanceof TerminatorNode))
            continue;

        if (terminator.getTerminatorType() == TerminatorNodeType.Start)
            return terminator;
    }
}

function findFunctionNode(functionName) {
    for (var i = 0; i < diagram.nodes.length; i++) {
        var functionNode = diagram.nodes[0];
        if (functionNode instanceof FunctionNode) {
            if (functionNode.getName() == name)
                return functionNode;
        }
    }

    return null;
}

function findTrueLink(node) {
    for (var i = 0; i < node.outgoingLinks.length; i++) {
        var link = node.outgoingLinks[i];
        if (link.originAnchor == 1)
            return link;
    }

    return null;
}

function findFalseLink(node) {
    for (var i = 0; i < node.outgoingLinks.length; i++) {
        var link = node.outgoingLinks[i];
        if (link.originAnchor == 2)
            return link;
    }

    return null;
}

function process(node, scope) {
    var terminator = node;
    if (terminator instanceof TerminatorNode) {
        if (terminator.getTerminatorType() == TerminatorNodeType.End)
            return null;

        if (terminator.getTerminatorType() == TerminatorNodeType.Start)
            return terminator.outgoingLinks[0].destination;

        throw new Error("Invalid terminator.");
    }

    var operation = node;
    if (operation instanceof OperationNode) {
        var code = operation.getCode();
        var result = execute(code, scope);

        variableListNode.updateVariableValues(scope);

        if (operation.getOperationType() == OperationType.Operation)
            return operation.outgoingLinks[0].destination;

        if (operation.getOperationType() == OperationType.Choice) {
            if (result == null)
                throw new Error("Failed to evaluate choice.");

            if (result)
                return findTrueLink(operation).destination;
            else
                return findFalseLink(operation).destination;
        }
    }

    throw new Error("Invalid process.");
}

function execute(expression, scope) {
    return new Function(expression).bind(scope)();
}


function stopRun() {
    variableListNode.visible = false;

    clearHighlight();

    var createButtons = document.querySelectorAll("button.createbutton");
    for (var i = 0; i < createButtons.length; i++)
        createButtons[i].disabled = false;

    document.querySelector("button#validateButton").disabled = false;
    document.querySelector("button#runButton").disabled = false;
    document.querySelector("select#preset").disabled = false;
    document.querySelector("button#loadButton").disabled = false;

    document.querySelector("button#stepRunButton").value = "Step by step";
    document.querySelector("button#stopButton").disabled = true;

    tracing = false;
}

function clearHighlight() {
    for (var i = 0; i < diagram.nodes.length; i++) {
        var scriptedNode = diagram.nodes[i];
        if (scriptedNode.hideHighlight)
            scriptedNode.hideHighlight();
    }
}

function onNodeSelected(sender, args) {
    var node = args.node;
    if (node.onSelected)
        node.onSelected();
}

function onNodeDeselected(sender, args) {
    var node = args.node;
    if (node.onDeselected)
        node.onDeselected();
}

function onLinkCreating(sender, args) {
    // Prevent two links going out of the same anchor point
    for (var i = 0; i < args.link.origin.outgoingLinks.length; i++) {
        var link = args.link.origin.outgoingLinks[i];
        if (link.originAnchor == args.link.originAnchor) {
            args.cancel = true;
            return;
        }
    }

    // Prevent self loops
	if (!args.link.targetConnection)
		return;

	if (args.link.origin == args.link.targetConnection.node) {
        args.cancel = true;
    }
}

function onNodeCreated(sender, args) {

}

function onStartNode() {
    diagram.selection.clear();

    for (var i = 0; i < diagram.nodes.length; i++) {
        var terminator = diagram.nodes[i];
        if (!(terminator instanceof TerminatorNode))
            continue;
        if (terminator.getTerminatorType() != TerminatorNodeType.Start)
            continue;

        terminator.selected = true;
        bringIntoView(terminator);

        return;
    }

    var node = new TerminatorNode(diagramView);
    node.bounds = new Rect(20 + diagramView.scrollX, 20 + diagramView.scrollY, 36, 12);
    node.setTerminatorType(TerminatorNodeType.Start);
    node.selected = true;
    diagram.addItem(node);
}

function onEndNode() {
    diagram.selection.clear();

    for (var i = 0; i < diagram.nodes.length; i++) {
        var terminator = diagram.nodes[i];
        if (!(terminator instanceof TerminatorNode))
            continue;
        if (terminator.getTerminatorType() != TerminatorNodeType.End)
            continue;

        terminator.selected = true;
        bringIntoView(terminator);

        return;
    }

    var node = new TerminatorNode(diagramView);
    node.bounds = new Rect(20 + diagramView.scrollX, 20 + diagramView.scrollY, 36, 12);
    node.setTerminatorType(TerminatorNodeType.End);
    node.selected = true;
    diagram.addItem(node);
}

function onOperation() {
    diagram.selection.clear();

    var node = new OperationNode(diagramView);
    node.setOperationType(OperationType.Operation);
    node.bounds = new Rect(20 + diagramView.scrollX, 20 + diagramView.scrollY, 60, 40);
    node.selected = true;
    diagram.addItem(node);
}

function onChoice() {
    diagram.selection.clear();

    var node = new OperationNode(diagramView);
    node.setOperationType(OperationType.Choice);
    node.bounds = new Rect(20 + diagramView.scrollX, 20 + diagramView.scrollY, 60, 40);
    node.selected = true;
    diagram.addItem(node);
}

function onFunction() {
    diagram.selection.clear();

    var node = new FunctionNode(diagramView);
    node.bounds = new Rect(20 + diagramView.scrollX, 20 + diagramView.scrollY, 60, 40);
    node.selected = true;
    diagram.addItem(node);
}

function onClear() {
    for (var i = 0; i < diagram.nodes.length;) {
        var node = diagram.nodes[i];
        if (node instanceof VariableListNode) {
            i++;
            continue;
        }

        diagram.removeItem(node);
    }
}

function onValidate() {
    if (validateProcess()) {
        alert("Validation successful!");
    }
}

function onRun() {
    variableListNode.clear();

    if (!validateProcess())
        return;

    var node = findStartNode();
    currentScope = {};

    while (true) {
        try {
            node = process(node, currentScope);
            variableListNode.updateVariableValues(currentScope);
        }
        catch (err) {
            alert(err);
            return;
        }

        if (node == null)
            break;
    }
}

function onNext() {
    if (!tracing) {
        if (!validateProcess())
            return;

        variableListNode.visible = true;
        updateVariableListPosition();

        tracing = true;
        currentScope = {};

        variableListNode.clear();

        // Update UI
        var createButtons = document.querySelectorAll("button.createbutton");
        for (var i = 0; i < createButtons.length; i++)
            createButtons[i].disabled = true;

        document.querySelector("button#validateButton").disabled = true;
        document.querySelector("button#runButton").disabled = true;
        document.querySelector("select#preset").disabled = true;
        document.querySelector("button#loadButton").disabled = true;


        document.querySelector("button#stepRunButton").value = "Next";
        document.querySelector("button#stopButton").disabled = false;

        currentNode = findStartNode();
        currentNode.showHighlight();
        bringIntoView(currentNode);
    }
    else {
        try {
            var previousNode = currentNode;
            currentNode = process(previousNode, currentScope);
            variableListNode.updateVariableValues(currentScope);

            previousNode.hideHighlight();
            if (currentNode != null) {
                currentNode.showHighlight();
                bringIntoView(currentNode);
            }
            else {
                stopRun();
            }
        }
        catch (err) {
            alert(err);
            stopRun();
        }
    }
}

function onStop() {
    stopRun();
}

function onLoad() {
    diagramView.loadFromXml(document.querySelector("#preset").value, onDiagramLoaded);
}


var VariableListNode = function (parent) {

    var _this = ScriptedNode.call(this, parent);

    _this.allowIncomingLinks = false;
    _this.allowOutgoingLinks = false;

    _this.locked = true;
    _this.template = `<div class="root variableList" style="background-color: rgba(240, 240, 240, 0.5);">
                        <span style="font-weight: bold; margin: 10px; cursor: move;">Variables List</span>
                        <div class="variablesDisplay"><span id="varValues"></span></div>
                    </div>`;
    return _this;
};

VariableListNode.prototype =
{
    attachHandlers: function () {
        ScriptedNode.prototype.attachHandlers.call(this);
    },

    updateVariableValues: function (scope) {
        if (!this.content)
            return;
        var span = document.querySelector("span#varValues");
        span.innerHTML = " ";
        for (var i in scope) {
            span.innerHTML += `${i}: ${scope[i]}` + '<br />';
        }
    },

    clear: function () {
        if (this.content)
            document.querySelector("span#varValues").innerHTML = " ";
    }
};

var FunctionNode = function (parent) {
    var _this = ScriptedNode.call(this, parent);
    _this.allowIncomingLinks = false;
    _this.allowOutgoingLinks = false;

    _this.title = " ";
    _this.code = " ";

    _this.template = `<div class="root function" style="background-color: Orange;">
                        <span style="font-weight: bold; margin: 10px; cursor: move;">Function</span>
                        <input class="functionname" data-interactive="true"></input>
                        <textarea class="functioncode" data-interactive="true"></textarea>
                    </div>`;
    return _this;
};

FunctionNode.prototype =
{
    attachHandlers: function () {
        ScriptedNode.prototype.attachHandlers.call(this);

        if (this.title != " ")
            this.content.querySelector("input.functionname").value = this.title;

        if (this.code != " ")
            this.content.querySelector("textarea.functioncode").value = this.code;
    },

    getCode: function () {
        if (this.content)
            this.code = this.content.querySelector("textarea.functioncode").value;
        return this.code;
    },

    setCode: function (value) {
        if (this.code == value)
            return;
        this.code = value;
        if (this.content)
            this.content.querySelector("textarea.functioncode").value = this.code;
    },

    getTitleText: function () {
        if (this.content)
            this.title = this.content.querySelector("input.functionname").value;
        return this.title;
    },

    setTitleText: function (value) {
        if (this.title == value)
            return;
        this.title = value;
        if (this.content)
            this.content.querySelector("input.functionname").value = this.title;
    },

    getFunctionName: function () {
        var title = this.getTitleText().trim();
        var bracket = title.indexOf('(');
        if (bracket == -1)
            return title;

        return title.substring(0, bracket).trim();
    },

    getParameterNames: function () {
        // Add the function arguments
        var title = this.getTitleText();
        var regex = /\(.*\)/;
        var matches = title.match(regex);
        if (matches && matches.length > 0) {
            var parameters = matches[0];
            parameters = parameters.substring(1, parameters.length - 1).trim();
            return parameters.split(',');
        }

        return null;
    },

    loadFromXml: function (xmlElement, context) {
        ScriptedNode.prototype.loadFromXml.call(this, xmlElement, context);
        this.setTitleText(context.readString("Title", xmlElement));
        this.setCode(context.readString("Code", xmlElement));
    },

    saveToXml: function (xmlElement, context) {
        ScriptedNode.prototype.saveToXml.call(this, xmlElement, context);
        context.writeString(this.getTitleText(), "Title", xmlElement);
        context.writeString(this.getCode(), "Code", xmlElement);
    }
};


var OperationNode = function (parent) {
    var _this = ScriptedNode.call(this, parent);

    _this.operationType = OperationType.Unspecified;
    _this.title = " ";
    _this.code = " ";

    _this.template = `<div class="root operation">
                        <span class="operationtitle"></span>
                        <textarea class="operationcode" data-interactive="true"></textarea>
                    </div>`;
    return _this;
};

OperationNode.prototype =
{
    attachHandlers: function () {
        ScriptedNode.prototype.attachHandlers.call(this);

        if (this.operationType != OperationType.Unspecified)
            this.setOperationType(this.operationType);

        if (this.title != " ")
            this.content.querySelector("span.operationtitle").innerHTML = this.title;

        if (this.code != " ")
            this.content.querySelector("textarea.operationcode").value = this.code;
    },

    getOperationType: function () {
        return this.operationType;
    },

    setOperationType: function (value) {
        this.operationType = value;

        if (this.content == undefined)
            return;

        if (this.operationType == OperationType.Operation) {
            this.setTitleText("Operation");
            this.anchorPattern = new AnchorPattern([
                new AnchorPoint(50, 0, true, false, MarkStyle.Rectangle, "black", 6),
                new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle, "black", 6),
            ]);
            this.anchorPattern.points[0].tag = 0;
            this.anchorPattern.points[1].tag = 3;
        }
        else if (this.operationType == OperationType.Choice) {
            this.setTitleText("Choice");
            this.anchorPattern = new AnchorPattern([
                new AnchorPoint(50, 0, true, false, MarkStyle.Circle, "black", 6),
                new AnchorPoint(50, 100, false, true, MarkStyle.Circle, "green", 6),
                new AnchorPoint(100, 50, false, true, MarkStyle.Circle, "red", 6),
            ]);
            this.anchorPattern.points[0].tag = 0;
            this.anchorPattern.points[1].tag = 1;
            this.anchorPattern.points[2].tag = 2;
        }
        else {
            this.anchorPattern = null;
            this.setTitleText(" ");
        }
    },

    getCode: function () {
        if (this.content)
            this.code = this.content.querySelector("textarea.operationcode").value;
        if (this.operationType == OperationType.Choice && this.code.indexOf("return ") < 0)
            return "return " + this.code;

        return this.code;
    },

    setCode: function (value) {
        if (this.code == value)
            return;
        this.code = value;
        if (this.content)
            this.content.querySelector("textarea.operationcode").value = this.code;
    },

    getTitleText: function () {
        return this.title;
    },

    setTitleText: function (value) {
        if (this.title == value)
            return;
        this.title = value;
        if (this.content)
            this.content.querySelector("span.operationtitle").innerHTML = this.title;
    },

    loadFromXml: function (xmlElement, context) {
        ScriptedNode.prototype.loadFromXml.call(this, xmlElement, context);
        this.setOperationType(context.readInt("Type", xmlElement));
        this.setCode(context.readString("Code", xmlElement));
    },

    saveToXml: function (xmlElement, context) {
        ScriptedNode.prototype.saveToXml.call(this, xmlElement, context);
        context.writeInt(this.operationType, "Type", xmlElement);
        context.writeString(this.getCode(), "Code", xmlElement);
    }
};

var TerminatorNode = function (parent) {
    var _this = ScriptedNode.call(this, parent);

    _this.allowIncomingLinks = false;
    _this.allowOutgoingLinks = false;

    _this.terminatorType = TerminatorNodeType.Unspecified;
    _this.textContent = ' ';

    _this.template = `<div class="root terminator"><span class="terminatortext"></span></div>`;

    return _this;
};

TerminatorNode.prototype =
{
    attachHandlers: function () {
        ScriptedNode.prototype.attachHandlers.call(this);

        if (this.terminatorType != TerminatorNodeType.Unspecified)
            this.setTerminatorType(this.terminatorType);

        if (this.textContent != ' ')
            this.content.querySelector("span.terminatortext").innerHTML = this.textContent;
    },

    getTerminatorType: function () {
        return this.terminatorType;
    },

    setTerminatorType: function (value) {
        this.terminatorType = value;

        if (this.content == undefined)
            return;

        if (this.terminatorType == TerminatorNodeType.Start) {
            this.setBackground("rgb(102, 154, 204)");
            this.textColor = "White";
            this.setTextContent("Start");
            this.allowIncomingLinks = false;
            this.allowOutgoingLinks = true;
        }
        else if (this.terminatorType == TerminatorNodeType.End) {
            this.setBackground("rgb(206, 0, 0)");
            this.textColor = "White";
            this.setTextContent("End");
            this.allowIncomingLinks = true;
            this.allowOutgoingLinks = false;
        }
        else {
            this.setBackground("rgb(240, 240, 240)");
            this.setTextContent(" ");
            this.allowIncomingLinks = false;
            this.allowOutgoingLinks = false;
        }
    },

    getTextContent: function () {
        return this.textContent;
    },

    setTextContent: function (value) {
        if (this.textContent == value)
            return;
        this.textContent = value;
        if (this.content)
            this.content.querySelector("span.terminatortext").innerHTML = value;
    },

    loadFromXml: function (xmlElement, context) {
        ScriptedNode.prototype.loadFromXml.call(this, xmlElement, context);
        this.setTerminatorType(context.readInt("Type", xmlElement));
    },

    saveToXml: function (xmlElement, context) {

        ScriptedNode.prototype.saveToXml.call(this, xmlElement, context);
        context.writeInt(this.terminatorType, "Type", xmlElement);
    }
};

var ScriptedNode = function (parent) {
    var _this = ControlNode.call(this, parent);

    _this.template = `<div class="root"></div>`;

    _this.selected = false;
    _this.highlight = false;
    _this.background = "#F0F0F0";

    return _this;
};

ScriptedNode.prototype =
{
    attachHandlers: function () {
        ControlNode.prototype.attachHandlers.call(this);

        if (this.selected)
            this.onSelected();

        if (this.highlight)
            this.showHighlight();

        if (this.background != "#F0F0F0")
            this.content.querySelector("div.root").style.backgroundColor = this.background;
    },

    onSelected: function () {
        this.selected = true;
        if (this.content)
            this.content.classList.add("selected");
    },

    onDeselected: function () {
        this.selected = false;
        if (this.content)
            this.content.classList.remove("selected");
    },

    showHighlight: function () {
        this.highlight = true;
        if (this.content)
            this.content.classList.add("highlight");
    },

    hideHighlight: function () {
        this.highlight = false;
        if (this.content)
            this.content.classList.remove("highlight");
    },

    getBackground: function () {
        return this.background;
    },

    setBackground: function (value) {
        if (this.background == value)
            return;
        this.background = value;

        if (this.content)
            this.content.querySelector("div.root").style.backgroundColor = this.background;
    }
};

var TerminatorNodeType =
{
    Unspecified: 0,
    Start: 1,
    End: 2
};

var OperationType =
{
    Unspecified: 0,
    Operation: 1,
    Choice: 2
}