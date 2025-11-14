/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;

var Rect = MindFusion.Drawing.Rect;
var BorderedTreeLayout = MindFusion.Graphs.BorderedTreeLayout;

var diagram = null;
var bounds = new Rect(0, 0, 30, 6);
var brush = "#e0e9e9";

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;
	diagram.defaultShape = "Rectangle";

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
	xhttp.open("GET", "Tutorial2.txt", true);
	xhttp.send();
});

function buildDiagram(graph)
{
	// load activity data and create 
	var project = graph.project;
	var diagramNode = diagram.factory.createShapeNode(bounds);
	diagramNode.text = project.name;
	diagramNode.brush = brush;
	if (project.activities)
		addActivities(diagramNode, project);
	
	var layout = new BorderedTreeLayout();
	layout.direction = MindFusion.Graphs.LayoutDirection.LeftToRight;
	layout.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;
	layout.nodeDistance = 1;
	layout.levelDistance = -8;	// let horizontal positions overlap
	diagram.arrange(layout);
	diagram.resizeToFitItems(30);
}

function addActivities(parentNode, parent)
{
	for (var activity of parent.activities)
	{
		var diagramNode = diagram.factory.createShapeNode(bounds);
		diagramNode.text = activity.name;
		diagramNode.brush = brush;
		diagram.factory.createDiagramLink(parentNode, diagramNode);

		if (activity.activities)
			addActivities(diagramNode, activity);
	}
}