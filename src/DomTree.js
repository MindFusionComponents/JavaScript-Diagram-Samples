/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var Events = MindFusion.Diagramming.Events;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var Rect = MindFusion.Drawing.Rect;
var TreeLayout = MindFusion.Graphs.TreeLayout;
var TreeLayoutLinkType = MindFusion.Graphs.TreeLayoutLinkType;

var diagram;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;
	diagram.nodeEffects.push(new GlassEffect());

	// build a tree whose nodes correspond to the page DOM elements
	buildTree();

	// rearrange the tree when a branch is expanded ot collapsed
	diagram.addEventListener(Events.treeCollapsed, rearrangeTree);
	diagram.addEventListener(Events.treeExpanded, rearrangeTree);
});

function buildTree()
{
	// create a box that will be a root in our hierarchy
	var root = new ShapeNode(diagram);
	root.bounds = new Rect(0, 0, 20, 12);
	root.text = "document";
	root.brush = "#9caac6";
	diagram.addItem(root);

	// traverse the page DOM recursively and create corresponding diagram items
	buildBranches(root, document, 1);

	// arrange the tree
	var treeLayout = new TreeLayout();
	treeLayout.linkType = TreeLayoutLinkType.Cascading;
	diagram.arrange(treeLayout);

	diagram.resizeToFitItems(5);
}

function buildBranches(treeNode, domElement, level)
{
	[...domElement.childNodes].forEach(function (child)
	{
		// create a node for the child element
		var childNode = new ShapeNode(diagram);
		childNode.bounds = new Rect(0, 0, 20, 12);
		childNode.text = child.nodeName;
		childNode.brush = { type: "LinearGradientBrush", color1: "#e0e9e9", color2: "#9caac6", angle: 30 };
		childNode.tag = child; // associate DOM element with node
		diagram.addItem(childNode);

		// link the subfolder with its parent
		diagram.factory.createDiagramLink(treeNode, childNode);

		// build subtrees recursively
		buildBranches(childNode, child, level + 1);
	});

	// allow collapsing the tree branch
	if (treeNode.outgoingLinks.length > 0)
		treeNode.expandable = true;
}

function rearrangeTree(sender, args)
{
	diagram = MindFusion.Diagramming.DiagramView.find("diagram").diagram;

	// arrange the tree
	var treeLayout = new TreeLayout();
	treeLayout.linkType = TreeLayoutLinkType.Cascading;
	treeLayout.keepRootPosition = true;
	diagram.arrange(treeLayout);
}