var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var Events = MindFusion.Diagramming.Events;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var ArrayList = MindFusion.Collections.ArrayList;

var Rect = MindFusion.Drawing.Rect;
var TreeLayout = MindFusion.Graphs.TreeLayout;
var TreeLayoutLinkType = MindFusion.Graphs.TreeLayoutLinkType;


var diagram;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);
	diagram.setLinkHeadShapeSize(2);
	diagram.getNodeEffects().push(new GlassEffect());

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
	root.setBounds(new Rect(0, 0, 20, 12));
	root.setText("document");
	root.setBrush("DeepSkyBlue");
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
	ArrayList.forEach(domElement.childNodes, function (child)
	{
		// create a node for the child element
		var childNode = new ShapeNode(diagram);
		childNode.setBounds(new Rect(0, 0, 20, 12));
		childNode.setText(child.nodeName);
		childNode.setBrush({ type: "LinearGradientBrush", color1: "LightCyan", color2: "DeepSkyBlue", angle: 30 });
		childNode.setTag(child); // associate DOM element with node
		diagram.addItem(childNode);

		// link the subfolder with its parent
		diagram.getFactory().createDiagramLink(treeNode, childNode);

		// build subtrees recursively
		buildBranches(childNode, child, level + 1);
	});

	// allow collapsing the tree branch
	if (treeNode.getOutgoingLinks().length > 0)
		treeNode.setExpandable(true);
}

function rearrangeTree(sender, args)
{
	diagram = Diagram.find("diagram");

	// arrange the tree
	var treeLayout = new TreeLayout();
	treeLayout.linkType = TreeLayoutLinkType.Cascading;
	treeLayout.keepRootPosition = true;
	diagram.arrange(treeLayout);
}