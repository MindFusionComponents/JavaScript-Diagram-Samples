var Diagram = MindFusion.Diagramming.Diagram;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var Rect = MindFusion.Drawing.Rect;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	var diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());
	diagram.setLinkHeadShapeSize(2);

	// create child nodes for containers
	for (var i = 0; i < 5; i++)
		diagram.getFactory().createShapeNode(0, 0, 10, 10);
	for (var i = 1; i < 5; i++)
		diagram.getFactory().createDiagramLink(diagram.nodes[Math.floor(i / 2)], diagram.nodes[i]);

	for (var i = 5; i < 10; i++)
		diagram.getFactory().createShapeNode(0, 0, 10, 10);
	for (var i = 1; i < 5; i++)
		diagram.getFactory().createDiagramLink(diagram.nodes[Math.floor(5 + i / 2)], diagram.nodes[5 + i]);

	// create containers
	var ctr = [];
	for (var c = 0; c < 2; c++)
	{
		var container = diagram.getFactory().createContainerNode(0, 0, 10, 10);
		for (var i = c * 5; i < c * 5 + 5; i++)
			container.add(diagram.nodes[i]);

		container.arrange(new MindFusion.Graphs.TreeLayout());
		container.setFoldable(true);
		container.setZIndex(0);
		container.setText("container " + (c + 1));
		container.setBrush("#A09162");
		container.setHandlesStyle(HandlesStyle.HatchHandles3);

		ctr[c] = container;
	}

	ctr[0].move(20, 20, true, true);
	ctr[1].move(90, 20, true, true);
	diagram.getFactory().createDiagramLink(ctr[0], ctr[1]);
});