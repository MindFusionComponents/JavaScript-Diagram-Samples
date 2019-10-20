/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Controls
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import NodeListView = MindFusion.Diagramming.NodeListView;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;
	import Style = MindFusion.Diagramming.Style;
	import Shape = MindFusion.Diagramming.Shape;

	var diagram: Diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);

		//styling
		var shapeNodeStyle = new Style();
		shapeNodeStyle.setBrush({ type: 'SolidBrush', color: '#e0e9e9' });
		shapeNodeStyle.setStroke("#7F7F7F");
		shapeNodeStyle.setFontName("Verdana");
		shapeNodeStyle.setFontSize(4);
		shapeNodeStyle.setNodeEffects([new GlassEffect()]);
		diagram.setStyle(shapeNodeStyle);

		// create a NodeListView component that wraps the "nodeList" canvas
		var nodeList = MindFusion.Diagramming.NodeListView.create($("#nodeList")[0]);
		//nodeList.setTargetView($("diagram")[0]);
		initNodeList(nodeList, diagram);

		// create an Overview component that wraps the "overview" canvas
		var overview = MindFusion.Diagramming.Overview.create($("#overview")[0]);
		overview.setDiagram(diagram);

		// create an ZoomControl component that wraps the "zoomer" canvas
		var zoomer = MindFusion.AbstractionLayer.createControl(MindFusion.Controls.ZoomControl, null, null, null, $("#zoomer")[0]);
		zoomer.setTarget(diagram);

		// create an Ruler component that wraps the "ruler" div
		var ruler = MindFusion.AbstractionLayer.createControl(MindFusion.Diagramming.Ruler, null, null, null, $("#ruler")[0]);
		ruler.setDiagram(diagram);

	});

	function initNodeList(nodeList: NodeListView, diagram: Diagram)
	{
		// add some nodes to the NodeListView
		var shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
		for (var i = 0; i < shapes.length; ++i)
		{
			var node = new MindFusion.Diagramming.ShapeNode(diagram);
			node.setText(shapes[i]);
			node.setShape(Shape.fromId(shapes[i]));

			nodeList.addNode(node, shapes[i]);
		}
	}
}