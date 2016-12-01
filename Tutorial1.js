var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;

var Rect = MindFusion.Drawing.Rect;
var LayeredLayout = MindFusion.Graphs.LayeredLayout;
var ArrayList = MindFusion.Collections.ArrayList;

var diagram;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
	diagram.setLinkHeadShapeSize(2);

	// pretend we are calling a web service
	$.get("Tutorial1.txt", onResponse);

	var mdiag = MindFusion.Diagramming;
	mdiag.DiagramLink.prototype.setTextBounds = function ()
	{
		var pos = this.points.length % 2 == 1 ?
			this.points[Math.floor(this.points.length / 2)] :
			mdiag.Utils.mid(this.points[this.points.length / 2 - 1], this.points[this.points.length / 2]);
		var bounds = new MindFusion.Drawing.Rect(pos.x, pos.y, 0, 0);
		this.text.setBounds(bounds, 0);
	};
});

function onResponse(json)
{
	if (json)
	{
		var graph = MindFusion.AbstractionLayer.fromJson(json);
		buildDiagram(graph);
	}
}

function buildDiagram(graph)
{
	var nodeMap = [];
	var bounds = new Rect(0, 0, 18, 8);

	// load node data
	var nodes = graph.nodes;
	ArrayList.forEach(nodes, function (node)
	{
		var diagramNode = diagram.getFactory().createShapeNode(bounds);
		nodeMap[node.id] = diagramNode;
		diagramNode.setText(node.name);
		diagramNode.setBrush("LightCyan");
	});

	// load link data
	var links = graph.links;
	ArrayList.forEach(links, function (link)
	{
		var link = diagram.getFactory().createDiagramLink(
			nodeMap[link.origin],
			nodeMap[link.target]);
	});

	// arrange the graph
	var layout = new LayeredLayout();
	layout.nodeDistance = 10;
	layout.layerDistance = 10;
	diagram.arrange(layout);
}