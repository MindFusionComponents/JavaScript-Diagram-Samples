/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var Alignment = MindFusion.Diagramming.Alignment;

var Rect = MindFusion.Drawing.Rect;
var Size = MindFusion.Drawing.Size;
var TreeLayout = MindFusion.Graphs.TreeLayout;
var TreeLayoutLinkType = MindFusion.Graphs.TreeLayoutLinkType;

var diagram = null;

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagramView.horizontalDropAlignment = Alignment.Center;
	diagramView.verticalDropAlignment = Alignment.Center;

	diagram = diagramView.diagram;
	diagram.nodeEffects.push(new GlassEffect());
	diagram.addEventListener("nodeCreated", onNodeCreated);
	diagram.linkHeadShapeSize = 3;
	diagram.linkHeadShape = "Alternative";

	// create the root of the tree
	var rootNode = new ShapeNode(diagram);
	rootNode.bounds = new Rect(50, 15, 24, 24);
	rootNode.text = "root";
	rootNode.anchorPattern = AnchorPattern.fromId("TopInBottomOut");
	diagram.addItem(rootNode);
	diagram.backBrush = { type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 };

	// create a NodeListView component that wraps the "nodeList" canvas
	var nodeList = MindFusion.Diagramming.NodeListView.create(document.getElementById("nodeList"));
	nodeList.iconSize = new Size(24, 24);
	nodeList.defaultNodeSize = new Size(24, 24);

	// add some nodes to the NodeListView
	for (var i = 1; i <= 15; ++i) {
		var node = new MindFusion.Diagramming.ShapeNode();
		// hide node's geometry, show bitmap image
		node.transparent = true;
		node.shape = "Rectangle";
		node.imageLocation = "icon" + i + ".png";
		nodeList.addNode(node, "");
	}
});

function onNodeCreated(sender, args) {
	var node = args.node;
	node.setZIndex(diagram.nodes.length);
	node.anchorPattern = AnchorPattern.fromId("TopInBottomOut");

	var nodesHere = diagram.getNodesAt(node.bounds.center());
	if (nodesHere.length < 2) {
		diagram.removeItem(node);
	}
	else {
		var parent = nodesHere[0];
		diagram.factory.createDiagramLink(parent, node);
		node.attachTo(parent);
		rearrange();
	}
}

function rearrange() {
	var treeLayout = new TreeLayout();
	treeLayout.linkType = TreeLayoutLinkType.Straight;
	treeLayout.levelDistance = treeLayout.nodeDistance = 16;
	diagram.arrangeAnimated(treeLayout);
}
