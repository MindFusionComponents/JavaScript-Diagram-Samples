/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var FlowchartLayout = MindFusion.Graphs.FlowchartLayout;

var Rect = MindFusion.Drawing.Rect;
var Font = MindFusion.Drawing.Font;
var Shape = MindFusion.Diagramming.Shape;
var Events = MindFusion.Diagramming.Events;

var diagramSyntax, diagramFlowchart = null;

document.addEventListener("DOMContentLoaded", function () {
	diagramSyntax = DiagramView.create(document.getElementById("diagramSyntax"));
	diagramSyntax.diagram.linkHeadShapeSize = 2;
	diagramSyntax.mouseWheelAction = MindFusion.Diagramming.MouseWheelAction.Zoom;

	diagramFlowchart = DiagramView.create(document.getElementById("diagramFlowchart"));
	diagramFlowchart.diagram.linkHeadShapeSize = 2;
	diagramFlowchart.mouseWheelAction = MindFusion.Diagramming.MouseWheelAction.Zoom;
});

function onParse() {
	var codeText = (document.getElementById("codeText")).value;

	var syntaxBuilder = new SyntaxTreeBuilder(codeText, diagramSyntax.diagram);
	var flowchartBuilder = new FlowchartBuilder(codeText, diagramFlowchart.diagram);

	var treeLayout = new MindFusion.Graphs.TreeLayout();
	diagramSyntax.diagram.arrange(treeLayout);
	diagramSyntax.diagram.resizeToFitItems(10);

	var flowchartLayout = new MindFusion.Graphs.FlowchartLayout();
	flowchartLayout.orientation = MindFusion.Graphs.Orientation.Vertical;
	diagramFlowchart.diagram.arrange(flowchartLayout);
	diagramFlowchart.diagram.resizeToFitItems(10);
}

var SyntaxTreeBuilder = function (code, diagram) {
	diagram.clearAll();
	this.code = code;
	this.diagram = diagram;
	this.parentNodes = [];

	function createDelegate(instance, method) {
		return function () { return method.apply(instance, arguments); }
	}

	acorn.walk.recursive(acorn.parse(code), {},
		{
			FunctionDeclaration: createDelegate(this, this.onFunctionDeclaration),
			IfStatement: createDelegate(this, this.onIfStatement),
			SwitchStatement: createDelegate(this, this.onSwitchStatement),
			WhileStatement: createDelegate(this, this.onIterationStatement),
			ForStatement: createDelegate(this, this.onIterationStatement),
			ForInStatement: createDelegate(this, this.onIterationStatement),
			ExpressionStatement: createDelegate(this, this.onExpressionStatement)
		});
};

SyntaxTreeBuilder.prototype.onFunctionDeclaration = function (node, state, visitor) {
	this.onEnterFunctionDeclaration(node);
	visitor(node.body, state);
	this.onLeaveFunctionDeclaration(node);
};
SyntaxTreeBuilder.prototype.onIfStatement = function (node, state, visitor) {
	this.onEnterIfStatement();
	this.onEnterBranch();
	visitor(node.consequent, state);
	this.onLeaveBranch();
	if (node.alternate) {
		this.onEnterBranch();
		visitor(node.alternate, state);
		this.onLeaveBranch();
	}
	this.onLeaveIfStatement();
};
SyntaxTreeBuilder.prototype.onSwitchStatement = function (node, state, visitor) {
	this.onEnterSwitchStatement();
	for (var i = 0; i < node.cases.length; i++)
		visitor(node.cases[i], state);
	this.onLeaveSwitchStatement();
};
SyntaxTreeBuilder.prototype.onIterationStatement = function (node, state, visitor) {
	this.onEnterIterationStatement();
	visitor(node.body, state);
	this.onLeaveIterationStatement();
};

SyntaxTreeBuilder.prototype.onExpressionStatement = function (node, state, visitor) {
	var expression = node.expression;
	this.onLeaveExpressionStatement(this.code.substr(expression.start, expression.end - expression.start));
}

SyntaxTreeBuilder.prototype.onEnterFunctionDeclaration = function (node) {
	var functionNode = Notation.createStartTerminatorNode(this.diagram, "function " + node.id.name);

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], functionNode);

	this.parentNodes.push(functionNode);
};

SyntaxTreeBuilder.prototype.onLeaveFunctionDeclaration = function () {
	this.parentNodes.pop();
};

SyntaxTreeBuilder.prototype.onLeaveExpressionStatement = function (text) {
	var functionNode = Notation.createProcessNode(this.diagram, text);

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], functionNode);
};

SyntaxTreeBuilder.prototype.onEnterIfStatement = function () {
	var ifNode = Notation.createDecisionNode(this.diagram, "if / else");

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], ifNode);

	this.parentNodes.push(ifNode);
};

SyntaxTreeBuilder.prototype.onLeaveIfStatement = function () {
	this.parentNodes.pop();
};

SyntaxTreeBuilder.prototype.onEnterIterationStatement = function () {
	var iterationNode = Notation.createLoopNode(this.diagram, "iteration");

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], iterationNode);

	this.parentNodes.push(iterationNode);
};

SyntaxTreeBuilder.prototype.onLeaveIterationStatement = function () {
	this.parentNodes.pop();
};

SyntaxTreeBuilder.prototype.onEnterSwitchStatement = function () {
	var switchNode = Notation.createDecisionNode(this.diagram, "switch");

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], switchNode);

	this.parentNodes.push(switchNode);
};

SyntaxTreeBuilder.prototype.onLeaveSwitchStatement = function () {
	this.parentNodes.pop();
};

SyntaxTreeBuilder.prototype.onEnterBranch = function () {
	var branchNode = Notation.createDecisionNode(this.diagram, "branch");

	if (this.parentNodes.length > 0)
		this.diagram.factory.createDiagramLink(this.parentNodes[this.parentNodes.length - 1], branchNode);

	this.parentNodes.push(branchNode);
};

SyntaxTreeBuilder.prototype.onLeaveBranch = function () {
	this.parentNodes.pop();
};

var FlowchartBuilder = function (code, diagram) {
	diagram.clearAll();
	this.diagram = diagram;
	this.current = new Flowchart(this.diagram);
	this.code = code;

	function createDelegate(instance, method) {
		return function () { return method.apply(instance, arguments); }
	}

	acorn.walk.recursive(acorn.parse(this.code), {},
		{
			FunctionDeclaration: createDelegate(this, this.onFunctionDeclaration),
			IfStatement: createDelegate(this, this.onIfStatement),
			SwitchStatement: createDelegate(this, this.onSwitchStatement),
			WhileStatement: createDelegate(this, this.onIterationStatement),
			ForStatement: createDelegate(this, this.onIterationStatement),
			ForInStatement: createDelegate(this, this.onIterationStatement),
			ExpressionStatement: createDelegate(this, this.onExpressionStatement),
			ReturnStatement: createDelegate(this, this.onReturnStatement)
		});
};

FlowchartBuilder.prototype.onFunctionDeclaration = function (node, state, visitor) {
	this.onEnterFunctionDeclaration(node);
	visitor(node.body, state);
	this.onLeaveFunctionDeclaration(node);
};
FlowchartBuilder.prototype.onIfStatement = function (node, state, visitor) {
	this.onEnterIfStatement();
	this.onEnterBranch();
	visitor(node.consequent, state);
	this.onLeaveBranch();
	if (node.alternate) {
		this.onEnterBranch();
		visitor(node.alternate, state);
		this.onLeaveBranch();
	}
	this.onLeaveIfStatement();
};
FlowchartBuilder.prototype.onSwitchStatement = function (node, state, visitor) {
	this.onEnterSwitchStatement();
	for (var i = 0; i < node.cases.length; i++)
		visitor(node.cases[i], state);
	this.onLeaveSwitchStatement();
};
FlowchartBuilder.prototype.onIterationStatement = function (node, state, visitor) {
	this.onEnterIterationStatement();
	visitor(node.body, state);
	this.onLeaveIterationStatement();
};
FlowchartBuilder.prototype.onExpressionStatement = function (node, state, visitor) {
	var expression = node.expression;
	this.onLeaveExpressionStatement(this.code.substr(expression.start, expression.end - expression.start));
}
FlowchartBuilder.prototype.onReturnStatement = function (node, state, visitor) {
	this.onLeaveReturnStatement(this.code.substr(node.start, node.end - node.start));
};

FlowchartBuilder.prototype.onEnterFunctionDeclaration = function (node) {
	this.current.enterFunction("function " + node.id.name);
}

FlowchartBuilder.prototype.onLeaveFunctionDeclaration = function (node) {
	if (this.current.leaveFunction("endfunction " + node.id.name))
		this.current = new Flowchart(this.diagram);
}

FlowchartBuilder.prototype.onLeaveExpressionStatement = function (text) {
	this.current.addExpression(text);
}

FlowchartBuilder.prototype.onLeaveReturnStatement = function (text) {
	this.current.addReturnStatement(text);
}

FlowchartBuilder.prototype.onEnterIfStatement = function () {
	this.current.enterChoice("if");
}

FlowchartBuilder.prototype.onLeaveIfStatement = function () {
	this.current.leaveChoice("endif");
}

FlowchartBuilder.prototype.onEnterIterationStatement = function () {
	this.current.enterLoop("iteration");
}

FlowchartBuilder.prototype.onLeaveIterationStatement = function () {
	this.current.leaveLoop("enditeration");
}

FlowchartBuilder.prototype.onEnterSwitchStatement = function () {
	this.current.enterChoice("switch");
}

FlowchartBuilder.prototype.onLeaveSwitchStatement = function () {
	this.current.leaveChoice("endswitch");
}

FlowchartBuilder.prototype.onEnterBranch = function () {
	this.current.enterBranch();
}

FlowchartBuilder.prototype.onLeaveBranch = function () {
	this.current.leaveBranch();
}

var Flowchart = function (diagram) {
	this.diagram = diagram;
	this.sequences = [];
};

Flowchart.prototype.enterFunction = function (text) {
	var functionStartNode = Notation.createStartTerminatorNode(this.diagram, text);
	this.sequences.push([functionStartNode]);
};

Flowchart.prototype.leaveFunction = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var ends = this.sequences.pop();
	if (ends.length == 0)
		throw new Error("Invalid operation");

	// Sequences end with 'null' if they are terminated by a return statement
	if (ends[0] == null)
		return this.sequences.length == 0;

	var functionEndNode = Notation.createEndTerminatorNode(this.diagram, text);

	for (var i = 0; i < ends.length; i++)
		this.diagram.factory.createDiagramLink(ends[i], functionEndNode);

	return this.sequences.length == 0;
};

Flowchart.prototype.addExpression = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	// Sequences end with 'null' if they are terminated by a return statement
	if (top[0] == null)
		return;

	var expressionNode = Notation.createProcessNode(this.diagram, text);

	this.diagram.factory.createDiagramLink(top[0], expressionNode);
	top[0] = expressionNode;
};

Flowchart.prototype.addReturnStatement = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	// Sequences end with 'null' if they are terminated by a return statement
	if (top[0] == null)
		return;

	var returnNode = Notation.createEndTerminatorNode(this.diagram, text);

	this.diagram.factory.createDiagramLink(top[0], returnNode);
	top[0] = null;
};

Flowchart.prototype.enterChoice = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	var choiceStartNode = Notation.createDecisionNode(this.diagram, text);

	this.diagram.factory.createDiagramLink(top[0], choiceStartNode);
	top[0] = choiceStartNode;

	this.sequences.push([choiceStartNode]);
};

Flowchart.prototype.enterBranch = function () {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	top.splice(0, 0, top[top.length - 1]);
};

Flowchart.prototype.leaveBranch = function () {
}

Flowchart.prototype.leaveChoice = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences.pop();
	if (top.length == 0)
		throw new Error("Invalid operation");

	var choiceEndNode = Notation.createConnectorNode(this.diagram, text);

	for (var i = 0; i < top.length - 1; i++) {
		// Sequences end with 'null' if they are terminated by a return statement
		if (top[i] != null)
			this.diagram.factory.createDiagramLink(top[i], choiceEndNode);
	}

	// If it's an 'if' choice and there was only one branch, add
	// a direct link from the choice start node to the choice end node
	if (choiceEndNode.text == "endif") {
		if (top.length == 2)
			this.diagram.factory.createDiagramLink(top[top.length - 1], choiceEndNode);
	}

	// It it's a 'switch' choice and there are no branches at all,
	// add a link from the choice start node to the choice end node
	if (choiceEndNode.text == "endswitch") {
		if (top.length == 1)
			this.diagram.factory.createDiagramLink(top[top.length - 1], choiceEndNode);
	}

	// Replace the choice start node with the choice end node
	// in the current sequence
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	top[0] = choiceEndNode;
};

Flowchart.prototype.enterLoop = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	var loopStartNode = Notation.createLoopNode(this.diagram, text);

	this.diagram.factory.createDiagramLink(top[0], loopStartNode);
	top[0] = loopStartNode;

	this.sequences.push([loopStartNode]);
};

Flowchart.prototype.leaveLoop = function (text) {
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	var top = this.sequences.pop();
	if (top.length == 0)
		throw new Error("Invalid operation");

	var loopEndNode = Notation.createEndLoopNode(this.diagram, text);

	this.diagram.factory.createDiagramLink(top[0], loopEndNode);

	// Replace the choice start node with the choice end node
	// in the current sequence
	if (this.sequences.length == 0)
		throw new Error("Invalid operation");

	top = this.sequences[this.sequences.length - 1];
	if (top.length == 0)
		throw new Error("Invalid operation");

	this.diagram.factory.createDiagramLink(loopEndNode, top[0]);

	top[0] = loopEndNode;
};

var Notation =
{
	createStartTerminatorNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "RoundRect";
		node.brush = this.createGradientBrush("rgb(0, 0, 99)");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3, true);
		node.tooltip = text;

		return node;
	},

	createEndTerminatorNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "RoundRect";
		node.brush = this.createGradientBrush("rgb(206, 0, 0)");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3, true);
		node.tooltip = text;

		return node;
	},

	createConnectorNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 5, 5));
		node.shape = "Ellipse";
		node.brush = this.createGradientBrush("white");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3);
		node.tooltip = text;

		return node;
	},

	createProcessNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "Rectangle";
		node.brush = this.createGradientBrush("rgb(97, 106, 127)");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3);
		node.tooltip = text;

		return node;
	},

	createDecisionNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "Decision";
		node.brush = this.createGradientBrush("rgb(192, 192, 192)");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3);
		node.tooltip = text;

		return node;
	},

	createLoopNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "BeginLoop";
		node.brush = this.createGradientBrush("goldenrod");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3);
		node.tooltip = text;

		return node;
	},

	createEndLoopNode: function (diagram, text) {
		var node = diagram.factory.createShapeNode(new Rect(0, 0, 30, 10));
		node.shape = "EndLoop";
		node.brush = this.createGradientBrush("goldenrod");
		node.text = text;
		node.enableStyledText = true;
		node.font = new Font("sans-serif", 3);
		node.tooltip = text;

		return node;
	},


	createGradientBrush: function (color) {
		return { type: "LinearGradientBrush", color1: color, color2: "white", angle: 90 };
	}
};