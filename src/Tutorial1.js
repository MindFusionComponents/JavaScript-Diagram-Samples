/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;

var Rect = MindFusion.Drawing.Rect;
var LayeredLayout = MindFusion.Graphs.LayeredLayout;

var diagram;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;

	// pretend we are calling a web service
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var graph = JSON.parse(xhttp.responseText);
			buildDiagram(graph);
		}
	};
	xhttp.open("GET", "Tutorial1.txt", true);
	xhttp.send();

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

function buildDiagram(graph)
{
	var nodeMap = [];

	// load node data
	var nodes = graph.nodes;
	for (var node of nodes)
	{
		var diagramNode = diagram.factory.createShapeNode(0, 0, 18, 8);
		nodeMap[node.id] = diagramNode;
		diagramNode.text = node.name;
		diagramNode.brush = "#e0e9e9";
	}

	// load link data
	var links = graph.links;
	for (var link of links)
	{
		diagram.factory.createDiagramLink(
			nodeMap[link.origin],
			nodeMap[link.target]);
	}

	// arrange the graph
	var layout = new LayeredLayout();
	layout.nodeDistance = 10;
	layout.layerDistance = 10;
	diagram.arrange(layout);
}
