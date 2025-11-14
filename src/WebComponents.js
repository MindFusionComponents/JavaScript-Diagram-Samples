/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;

document.addEventListener("DOMContentLoaded", function () {

	MindFusion.Diagramming.WebComponents.register();
	
	var diagramView = DiagramView.find("diagramView");
	diagram = diagramView.diagram;

	//styling
	var shapeNodeStyle = new Style();
	shapeNodeStyle.brush = { type: 'SolidBrush', color: '#e0e9e9' };
	shapeNodeStyle.stroke = "#7F7F7F";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 4;
	shapeNodeStyle.nodeEffects = [new GlassEffect()];
	diagram.style = shapeNodeStyle;

	var nodeList = MindFusion.Diagramming.NodeListView.find("nodeList");
	initNodeList(nodeList, diagram);

	var overview = MindFusion.Diagramming.Overview.find("overview");
	overview.diagramView = diagramView;

	var zoomer = MindFusion.Controls.ZoomControl.find("zoomer");
	zoomer.target = diagramView;

	var ruler = MindFusion.Diagramming.Ruler.find("ruler");
	ruler.diagramView = diagramView;

});

function initNodeList(nodeList, diagram) {
	// add some nodes to the NodeListView
	var shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
	for (var i = 0; i < shapes.length; ++i) {
		var node = new MindFusion.Diagramming.ShapeNode(diagram);
		node.text = shapes[i];
		node.shape = shapes[i];

		nodeList.addNode(node, shapes[i]);
	}
}
