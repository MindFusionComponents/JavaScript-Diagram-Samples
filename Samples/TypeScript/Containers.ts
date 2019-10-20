/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Containers
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import HandlesStyle = MindFusion.Diagramming.HandlesStyle;
	import Rect = MindFusion.Drawing.Rect;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;
	import Style = MindFusion.Diagramming.Style;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		var diagram: Diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.setLinkHeadShapeSize(2);

		var shapeNodeStyle = new Style();
		shapeNodeStyle.setBrush({ type: 'SolidBrush', color: '#e0e9e9' });
		shapeNodeStyle.setStroke("#7F7F7F");
		shapeNodeStyle.setTextColor("#e0e9e9");
		shapeNodeStyle.setFontName("Verdana");
		shapeNodeStyle.setFontSize(3);
		shapeNodeStyle.setBackBrush("#e0e9e9");
		shapeNodeStyle.setNodeEffects([new GlassEffect()]);

		diagram.setStyle(shapeNodeStyle);

		// create child nodes for containers
		for (var i = 0; i < 5; i++)
			diagram.getFactory().createShapeNode(0, 0, 10, 10);
		for (var i = 1; i < 5; i++)
			diagram.getFactory().createDiagramLink(diagram.getNodes()[Math.floor(i / 2)], diagram.getNodes()[i]);

		for (var i = 5; i < 10; i++)
			diagram.getFactory().createShapeNode(0, 0, 10, 10);
		for (var i = 1; i < 5; i++)
			diagram.getFactory().createDiagramLink(diagram.getNodes()[Math.floor(5 + i / 2)], diagram.getNodes()[5 + i]);

		// create containers
		var ctr = [];
		for (var c = 0; c < 2; c++)
		{
			var container = diagram.getFactory().createContainerNode(0, 0, 10, 10);
			for (var i = c * 5; i < c * 5 + 5; i++)
				container.add(diagram.getNodes()[i]);

			container.arrange(new MindFusion.Graphs.TreeLayout());
			container.setFoldable(true);
			container.setZIndex(0);
			container.setText("container " + (c + 1));
			container.setBrush("#003466");
			container.setHandlesStyle(HandlesStyle.HatchHandles3);

			ctr[c] = container;
		}

		ctr[0].move(20, 20, true, true);
		ctr[1].move(90, 20, true, true);
		diagram.getFactory().createDiagramLink(ctr[0], ctr[1]);
	});
}