var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var Rect = MindFusion.Drawing.Rect;
var Size = MindFusion.Drawing.Size;
var TreeLayout = MindFusion.Graphs.TreeLayout;
var TreeLayoutLinkType = MindFusion.Graphs.TreeLayoutLinkType;

var diagram = null;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());
	diagram.addEventListener("nodeCreated", onNodeCreated);
	diagram.setLinkHeadShapeSize(3);
	diagram.setLinkHeadShape("Alternative");

	// create the root of the tree
	var rootNode = new ShapeNode(diagram);
	rootNode.setBounds(new Rect(50, 15, 24, 24));
	rootNode.setText("root");
	diagram.addItem(rootNode);

	// create a NodeListView component that wraps the "nodeList" canvas
	var nodeList = MindFusion.AbstractionLayer.createControl(MindFusion.Diagramming.NodeListView,
        null, null, null, $("#nodeList")[0]);
	nodeList.setIconSize(new Size(96, 96));
	nodeList.setDefaultNodeSize(new Size(24, 24));

	// add some nodes to the NodeListView
	for (var i = 1; i <= 3; ++i)
	{
		var node = new MindFusion.Diagramming.ShapeNode(diagram);
		node.setShape("Rectangle");
		node.setImageLocation("icon" + i + ".png");
		nodeList.addNode(node, "");
	}
});

function onNodeCreated(sender, args)
{
	var node = args.getNode();
	node.setZIndex(diagram.nodes.length);

	var nodesHere = diagram.getNodesAt(node.getBounds().center());
	if (nodesHere.length < 2)
	{
		diagram.removeItem(node);
	}
	else
	{
		var parent = nodesHere[0];
		diagram.getFactory().createDiagramLink(parent, node);
		node.attachTo(parent);
		rearrange();
	}
}

function rearrange()
{
	var treeLayout = new TreeLayout();
	treeLayout.linkType = TreeLayoutLinkType.Straight;
	treeLayout.levelDistance = treeLayout.nodeDistance = 16;
	diagram.arrange(treeLayout);
}
