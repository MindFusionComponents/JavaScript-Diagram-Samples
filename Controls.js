var Diagram = MindFusion.Diagramming.Diagram;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());

	// create a NodeListView component that wraps the "nodeList" canvas
	var nodeList = MindFusion.Diagramming.NodeListView.create($("#nodeList")[0]);
	nodeList.setTargetView($("diagram")[0]);
	initNodeList(nodeList, diagram);

	// create an Overview component that wraps the "overview" canvas
	var overview = MindFusion.Diagramming.Overview.create($("#overview")[0]);
	overview.setDiagram(diagram);

	// create an ZoomControl component that wraps the "zoomer" canvas
	var zoomer = MindFusion.Controls.ZoomControl.create($("#zoomer")[0]);
	zoomer.setTarget(diagram);
});

function initNodeList(nodeList, diagram)
{
	// add some nodes to the NodeListView
	var shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
	for (var i = 0; i < shapes.length; ++i)
	{
		var node = new MindFusion.Diagramming.ShapeNode(diagram);
		node.setText(shapes[i]);
		node.setShape(shapes[i]);
		nodeList.addNode(node, shapes[i]);
	}
}