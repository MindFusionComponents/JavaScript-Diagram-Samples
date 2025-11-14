/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var DiagramView = MindFusion.Diagramming.DiagramView;
var Shapes = MindFusion.Diagramming.Shapes;
var AutoResize = MindFusion.Diagramming.AutoResize;
var Rect = MindFusion.Drawing.Rect;

var diagramView;

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	diagramView = DiagramView.create(document.getElementById("diagram"));
});


function generateDiagram() {
	var total = 10000;
	var rowSize = Math.sqrt(total);
	var size = 20;
	var dist = 30;

	var diagram = new Diagram();

	diagram.defaultShape = Shapes.Rectangle();
	diagram.linkHeadShapeSize = 2;
	diagram.validityChecks = false;
	diagram.autoResize = AutoResize.None;

	var diagSize = rowSize * dist;
	diagram.bounds = new Rect(
		0, 0, diagSize, diagSize);

	var x = diagram.bounds.x;
	var y = diagram.bounds.y;
	for (var i = 0; i < total; i++) {
		var node = diagram.factory.createShapeNode(x, y, size, size);
		node.text = i;
		if (x > diagram.bounds.x) {
			diagram.factory.createDiagramLink(
				diagram.nodes[i - 1], diagram.nodes[i]);
		}

		x += dist;
		if (x >= diagram.bounds.right()) {
			x = diagram.bounds.x;
			y += dist;
		}
	}

	diagram.enableSpatialIndex = true;
	diagramView.diagram = diagram;
}
