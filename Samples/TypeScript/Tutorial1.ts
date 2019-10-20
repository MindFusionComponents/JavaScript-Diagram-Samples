/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Tutorial1
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;

	import Rect = MindFusion.Drawing.Rect;
	import LayeredLayout = MindFusion.Graphs.LayeredLayout;

	var diagram: MindFusion.Diagramming.Diagram;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);
		diagram.setLinkHeadShapeSize(2);

		// pretend we are calling a web service
		$.get("Tutorial1.txt", onResponse);
	});

	function onResponse(json)
	{
		if (json)
		{
			var graph = $.parseJSON(json);
			buildDiagram(graph);
		}
	}

	function buildDiagram(graph)
	{
		var nodeMap = [];

		// load node data
		var nodes = graph.nodes;
		nodes.forEach(function (node)
		{
			var diagramNode = diagram.getFactory().createShapeNode(0, 0, 18, 8);
			nodeMap[node.id] = diagramNode;
			diagramNode.setText(node.name);
			diagramNode.setBrush("#e0e9e9");
		});

		// load link data
		var links = graph.links;
		links.forEach(function (link)
		{
			diagram.getFactory().createDiagramLink(
				nodeMap[link.origin],
				nodeMap[link.target]);
		});

		// arrange the graph
		var layout = new LayeredLayout();
		layout.nodeDistance = 10;
		layout.layerDistance = 10;
		diagram.arrange(layout);
	}
}