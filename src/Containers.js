/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var Rect = MindFusion.Drawing.Rect;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;

	var shapeNodeStyle = new Style();
	shapeNodeStyle.brush = { type: 'SolidBrush', color: '#e0e9e9' };
	shapeNodeStyle.stroke = "#7F7F7F";
	shapeNodeStyle.textColor = "#e0e9e9";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 3;
	shapeNodeStyle.backBrush = "#e0e9e9";
	shapeNodeStyle.nodeEffects = [new GlassEffect()];
	
	diagram.style = shapeNodeStyle;

	// create child nodes for containers
	for (var i = 0; i < 5; i++)
		diagram.factory.createShapeNode(0, 0, 10, 10);
	for (var i = 1; i < 5; i++)
		diagram.factory.createDiagramLink(diagram.nodes[Math.floor(i / 2)], diagram.nodes[i]);

	for (var i = 5; i < 10; i++)
		diagram.factory.createShapeNode(0, 0, 10, 10);
	for (var i = 1; i < 5; i++)
		diagram.factory.createDiagramLink(diagram.nodes[Math.floor(5 + i / 2)], diagram.nodes[5 + i]);

	// create containers
	var ctr = [];
	for (var c = 0; c < 2; c++)
	{
		var container = diagram.factory.createContainerNode(0, 0, 10, 10);
		for (var i = c * 5; i < c * 5 + 5; i++)
			container.add(diagram.nodes[i]);

		container.arrange(new MindFusion.Graphs.TreeLayout());
		container.foldable = (true);
		container.zIndex = (0);
		container.text = ("container " + (c + 1));
		container.brush = ("#003466");
		container.handlesStyle = (HandlesStyle.HatchHandles3);

		ctr[c] = container;
	}

	ctr[0].move(20, 20, true, true);
	ctr[1].move(90, 20, true, true);
	diagram.factory.createDiagramLink(ctr[0], ctr[1]);
});