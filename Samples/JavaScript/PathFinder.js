/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var Events = MindFusion.Diagramming.Events;

var DiagramNode = MindFusion.Diagramming.DiagramNode;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var LinkShape = MindFusion.Diagramming.LinkShape;

var Style = MindFusion.Diagramming.Style;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var Rect = MindFusion.Drawing.Rect;
var Point = MindFusion.Drawing.Point;

var LayeredLayout = MindFusion.Graphs.LayeredLayout;
var LayoutDirection = MindFusion.Graphs.LayoutDirection;

var PathFinder = MindFusion.Diagramming.PathFinder;
var Animation = MindFusion.Animations.Animation;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);

	diagram.selection.allowMultipleSelection = false;

	diagram.setLinkShape(LinkShape.Bezier);
	diagram.setLinkHeadShapeSize(2);
	diagram.getNodeEffects().push(new GlassEffect());

	// register event handlers
	diagram.addEventListener(Events.nodeClicked, onNodeClicked);
});

var clickedNode = null;

function onNodeClicked(sender, args)
{
	diagram.selection.clear();

	if (clickedNode)
	{
		var finder = new PathFinder(diagram);

		var from = clickedNode;
		var to = args.getNode();

		var path;

		if ($("#shortest")[0].checked)
			path = finder.findShortestPath(from, to, true, false);
		else
			path = finder.findLongestPath(from, to);

		if (path)
			runAnimation(0, path);
		else alert("No path found!")

		clickedNode.setShadowColor("gray");
		clickedNode = null;
	}
	else
	{
		clickedNode = args.getNode();
		clickedNode.setShadowColor("maroon");
	}
}

function runAnimation(index, path)
{
	if (index >= path.items.length) return;

	var item = path.items[index];

	// animate nodes
	if (mflayer.isInstanceOfType(DiagramNode, item))
	{
		var callback = function (animation, progress)
		{
			animation.item.setBrush(animation.getFromValue());
		}

		var options =
		{
			duration: 200,
			fromValue: "maroon",
			toValue: "gray"
		}

		var animation = new Animation(item, options, callback);
		animation.start();

		animation.addEventListener(MindFusion.Animations.Events.animationComplete, function (sender, args)
		{
			animation.item.setBrush(animation.getToValue());
			runAnimation(++index, path);
		});
	}
	else
	{
		// animate links
		var link = item;
		var sp = link.getStartPoint();
		var length = link.getLength();

		var callback = function (animation, animationProgress)
		{
			var node = animation.item;
			var bounds = node.getBounds();

			var p = link.pointAlongLength(animationProgress);
			node.setBounds(new Rect(p.x - bounds.width / 2, p.y - bounds.height / 2, bounds.width, bounds.height));
		}

		var dummy = diagram.getFactory().createShapeNode(sp.x - 2, sp.y - 2, 4, 4);
		dummy.setShape("Circle");
		dummy.setBrush("maroon");

		var animation = new Animation(dummy, { duration: length * 10 }, callback);
		animation.addEventListener(MindFusion.Animations.Events.animationComplete, function (sender, args)
		{
			diagram.removeItem(dummy);
			runAnimation(++index, path);
		});
		animation.start();
	}
}

function onRandomGraph()
{
	randomGraph(3);
	applyLayeredLayout();
}

function randomGraph(n)
{
	diagram.clearAll();

	for (var i = 0; i < n; ++i)
	{
		var c = diagram.nodes.length;
		var g = 2 + randomInt(2);
		for (var j = 0; j < g; ++j)
		{
			var rect = new Rect(0, 0, 20, 20);
			var node = new ShapeNode(diagram);
			node.setBounds(rect);
			node.setBrush("gray");
			diagram.addItem(node);
			if (j > 0)
			{
				var link = new DiagramLink(
					diagram, diagram.nodes[diagram.nodes.length - 2], node);

				diagram.addItem(link);
			}
		}
		if (i > 0)
		{
			for (var j = 0; j < 1 + randomInt(2); ++j)
			{
				var link = new DiagramLink(
					diagram, diagram.nodes[randomInt(c)], diagram.nodes[c + randomInt(g)]);
				diagram.addItem(link);
			}
		}
	}
}

function randomInt(max)
{
	return Math.floor(max * Math.random());
}

function applyLayeredLayout()
{
	var layout = new LayeredLayout();
	layout.direction = LayoutDirection.LeftToRight;
	layout.siftingRounds = 0;
	layout.nodeDistance = 18;
	layout.layerDistance = 18;
	diagram.arrange(layout);
	diagram.resizeToFitItems();
}