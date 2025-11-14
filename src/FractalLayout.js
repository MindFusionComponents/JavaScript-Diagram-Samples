/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Overview = MindFusion.Diagramming.Overview;
var Rect = MindFusion.Drawing.Rect;
var FractalLayout = MindFusion.Graphs.FractalLayout;

var diagram = null;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.behavior = MindFusion.Diagramming.Behavior.Pan;
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;

	// create an Overview component that wraps the "overview" canvas
	var overview = Overview.create(document.getElementById("overview"));
	overview.diagramView = diagramView;
});

function onRandomTree()
{
	var diagramView = MindFusion.Diagramming.DiagramView.find("diagram");
	diagramView.diagram.clearAll();

	// create the root node
	var rect = new Rect(0, 0, 15, 10);
	var node = new ShapeNode(diagram);
	var brush = brushes[0];
	node.bounds = rect;
	node.brush = brush;
	node.stroke = brushes[1];
	diagramView.diagram.addItem(node);

	// add random children
	randomTree(node, 5, 4);
	applyLayout();
	diagramView.zoomFactor = 8;
}

function randomTree(node, depth, minChildren)
{
	if (depth <= 0)
		return;

	var diagram = node.parent;
	var children = randomInt(depth) - 1 + minChildren;
	var brush = brushes[0];
	while (brush == node.brush)
		brush = brushes[1];

	if (diagram.nodes.length < 3 && children < 2)
		children = 2;

	for (var i = 0; i < children; ++i)
	{
		// create child node
		var rect = new Rect(0, 0, 15, 10);
		var child = new ShapeNode(diagram);
		child.bounds = rect;
		child.brush = brush;
		diagram.addItem(child);

		// create a link
		var link = new DiagramLink(diagram, node, child);
		diagram.addItem(link);

		// build child branch
		randomTree(child, depth - 1, minChildren);
	}
}

function applyLayout()
{
	var diagram = MindFusion.Diagramming.DiagramView.find("diagram").diagram;
	var layout = new FractalLayout();
	layout.root = diagram.nodes[0];
	diagram.arrange(layout);
	fitItems(diagram);
}

function randomInt(max)
{
	return Math.floor(max * Math.random());
}

function fitItems(diagram)
{
	var rect = Rect.empty;
	diagram.nodes.forEach(function (node)
	{
		if (rect == Rect.empty)
			rect = node.bounds;
		else
			rect = rect.union(node.bounds);
	});

	if (rect)
		diagram.bounds = new Rect(0, 0, rect.right() + 10, rect.bottom() + 10);
}

function onZoomIn()
{
	var diagramView = MindFusion.Diagramming.DiagramView.find("diagram");
	if (diagramView.zoomFactor > 200) return;
	diagramView.zoomFactor = diagramView.zoomFactor + 10;
}

function onZoomOut()
{
	var diagramView = MindFusion.Diagramming.DiagramView.find("diagram");
	if (diagramView.zoomFactor < 9) return;
	diagramView.zoomFactor = diagramView.zoomFactor - 10;
}

var brushes = ["#9caac6", "#ce0000", "#c0c0c0"];