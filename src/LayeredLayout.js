/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Style = MindFusion.Diagramming.Style;
var Overview = MindFusion.Diagramming.Overview;
var Rect = MindFusion.Drawing.Rect;
var LayeredLayout = MindFusion.Graphs.LayeredLayout;
var LayoutDirection = MindFusion.Graphs.LayoutDirection;

var diagram = null;

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;
	var linkStyle = new Style();
	linkStyle.stroke = "#c0c0c0";
	linkStyle.textColor = "#585A5C";
	linkStyle.fontName = "Verdana";
	linkStyle.fontSize = 3;
	diagram.style = linkStyle;

	// create an Overview component that wraps the "overview" canvas
	var overview = Overview.create(document.getElementById("overview"));
	overview.diagramView = diagramView;
});

function onRandomGraph() {
	randomGraph(20);
	applyLayeredLayout();
}

function randomGraph(n) {
	diagram.clearAll();

	for (var i = 0; i < n; ++i) {
		var c = diagram.nodes.length;
		var g = 2 + randomInt(15);
		for (var j = 0; j < g; ++j) {
			var rect = new Rect(0, 0, 10, 10);
			var node = new ShapeNode(diagram);
			node.bounds = rect;
			node.brush = { type: "LinearGradientBrush", color1: "#e0e9e9", color2: "#669acc", angle: 60 };
			diagram.addItem(node);
			if (j > 0) {
				var link = new DiagramLink(
					diagram, diagram.nodes[diagram.nodes.length - 2], node);

				diagram.addItem(link);
			}
		}
		if (i > 0) {
			for (var j = 0; j < 1 + randomInt(3); ++j) {
				var link = new DiagramLink(
					diagram, diagram.nodes[randomInt(c)], diagram.nodes[c + randomInt(g)]);
				diagram.addItem(link);
			}
		}
	}
}

function applyLayeredLayout() {
	var layout = new LayeredLayout();
	layout.direction = LayoutDirection.TopToBottom;
	layout.siftingRounds = 0;
	layout.nodeDistance = 8;
	layout.layerDistance = 8;
	diagram.arrange(layout);
	diagram.resizeToFitItems();
}

function randomInt(max) {
	return Math.floor(max * Math.random());
}

function onZoomIn() {
	var diagramView = DiagramView.find("diagram");
	if (diagramView.zoomFactor > 200) return;
	diagramView.zoomFactor = diagramView.zoomFactor + 10;
}

function onZoomOut() {
	var diagramView = DiagramView.find("diagram");
	if (diagramView.zoomFactor < 19) return;
	diagramView.zoomFactor = diagramView.zoomFactor - 10;
}