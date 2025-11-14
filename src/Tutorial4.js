/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var CompositeNode = MindFusion.Diagramming.CompositeNode;
var NodeListView = MindFusion.Diagramming.NodeListView;
var Behavior = MindFusion.Diagramming.Behavior;
var Alignment = MindFusion.Diagramming.Alignment;
var Utils = MindFusion.Diagramming.Utils;
var Size = MindFusion.Drawing.Size;

var TemplatedBase = CompositeNode.classFromTemplate("TemplatedBase",
    {
        component: "GridPanel",
        rowDefinitions: ["*"],
        columnDefinitions: ["22", "*"],
        children:
            [
                {
                    component: "Rect",
                    name: "Background",
                    pen: "black",
                    brush: "white",
                    columnSpan: 2
                },
                {
                    component: "Image",
                    name: "Image",
                    autoProperty: true,
                    location: "snowman.png",
                    margin: "1",
                    imageAlign: "Fit"
                },
                {
                    component: "StackPanel",
                    orientation: "Vertical",
                    gridColumn: 1,
                    margin: "1",
                    verticalAlignment: "Near",
                    children:
                        [
                            {
                                component: "Text",
                                name: "Title",
                                autoProperty: true,
                                text: "title",
                                font: "Calibri 5",
                                pen: "#343434"
                            },
                            {
                                component: "Text",
                                name: "FullName",
                                autoProperty: true,
                                text: "full name",
                                font: "Calibri 4 bold",
                                pen: "#003466",
                                padding: "1,0,1,0"
                            },
                            {
                                component: "Text",
                                name: "Details",
                                autoProperty: true,
                                text: "details",
                                font: "Calibri 3",
                                pen: "#003466"
                            }
                        ]
                }
            ]
    });

function OrgChartNode(parent) {
    var _this = TemplatedBase.call(this, parent);
    _this.cost = "low";
    return _this;
};

Diagram.registerClass(OrgChartNode, "OrgChartNode", "OrgChartNode", 1, TemplatedBase);

OrgChartNode.prototype.getCost = function () {
    return this.cost;
};

OrgChartNode.prototype.setCost = function (value) {
    this.cost = value;
};

// support for the NodeListView drag and drop
OrgChartNode.prototype.clone = function () {
    var copy = TemplatedBase.prototype.clone.call(this);
    copy.cost = this.cost;
    return copy;
};

// clipboard and serialization support
OrgChartNode.prototype.toJson = function () {
    var json = TemplatedBase.prototype.toJson.call(this);
    json.cost = this.cost;
    return json;
};

OrgChartNode.prototype.fromJson = function (json) {
    TemplatedBase.prototype.fromJson.call(this, json);
    this.cost = json.cost;
};

// undo/redo
OrgChartNode.prototype.saveState = function () {
    var state = TemplatedBase.prototype.saveState.call(this);
    state.cost = this.cost;
    return state;
};

OrgChartNode.prototype.restoreState = function (state) {
    TemplatedBase.prototype.restoreState.call(this, state);
    this.cost = state.cost;
};

var diagramView = null;
var diagram = null;
var nodeListView = null;

document.addEventListener("DOMContentLoaded", function () {

    // create a DiagramView component that wraps the "diagram" canvas
    diagramView = DiagramView.create(document.getElementById("diagram"));
    diagram = diagramView.diagram;

    // enable undo/redo support
    diagram.undoEnabled = true;

    // enable drawing of custom nodes interactively
    diagramView.behavior = Behavior.Custom;
    diagram.customNodeType = OrgChartNode;

    // create a NodeListView component that wraps the "nodeListView" canvas
    nodeListView = NodeListView.create(document.getElementById("nodeListView"));
    nodeListView.measureUnit = 6;
    nodeListView.padding = 1;
    nodeListView.iconSize = new Size(65, 25);
    nodeListView.defaultNodeSize = new Size(65, 25);

    // create and add some nodes to the node list
    var node1 = new OrgChartNode(nodeListView);
    node1.title = "Skiing";
    node1.fullName = "Winter";
    node1.details =
        "Vacation in the snow. \r\n" +
        "Ski lessons, ski equipment and winter sports.";
    node1.image = "snowman.png";
    node1.cost = "high";
    nodeListView.addNode(node1, "");

    var node2 = new OrgChartNode(nodeListView);
    node2.title = "Seaside";
    node2.fullName = "Summer";
    node2.details = "Sun bathing, swimming, catching tan.";
    node2.image = "seaside.png";
    node2.cost = "high";
    nodeListView.addNode(node2, "");

    var node3 = new OrgChartNode(nodeListView);
    node3.title = "Hiking";
    node3.fullName = "Spring";
    node3.details = "Mountain walking, guided tours.";
    node3.image = "mountain.png";
    node3.cost = "low";
    nodeListView.addNode(node3, "");

    var node4 = new OrgChartNode(nodeListView);
    node4.title = "Fishing";
    node4.fullName = "All Year";
    node4.details = "fishing equipment, instructors \nand camping.";
    node4.image = "fishing.png";
    node4.cost = "medium";
    nodeListView.addNode(node4, "");

    var node5 = new OrgChartNode(nodeListView);
    node5.title = "Camping";
    node5.fullName = "Summer";
    node5.details = "tent sleeping, open fire cooking.";
    node5.image = "camping.png";
    node5.cost = "low";
    nodeListView.addNode(node5, "");
});