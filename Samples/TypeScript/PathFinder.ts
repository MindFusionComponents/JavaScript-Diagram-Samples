/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Tracing
{
	import AbstractionLayer = MindFusion.AbstractionLayer;
	import Diagram = MindFusion.Diagramming.Diagram;
	import Events = MindFusion.Diagramming.Events;

	import DiagramNode = MindFusion.Diagramming.DiagramNode;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import LinkShape = MindFusion.Diagramming.LinkShape;

	import Shape = MindFusion.Diagramming.Shape;
	import Style = MindFusion.Diagramming.Style;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;

	import Rect = MindFusion.Drawing.Rect;
	import Point = MindFusion.Drawing.Point;

	import LayeredLayout = MindFusion.Graphs.LayeredLayout;
	import LayoutDirection = MindFusion.Graphs.LayoutDirection;

	import PathFinder = MindFusion.Diagramming.PathFinder;
	import Animation = MindFusion.Animations.Animation;

	var diagram: Diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);

		diagram.getSelection().allowMultipleSelection = false;

		diagram.setLinkShape(LinkShape.Bezier);
		diagram.setLinkHeadShapeSize(2);
		diagram.getNodeEffects().push(new GlassEffect());

		// register event handlers
		diagram.addEventListener(Events.nodeClicked, onNodeClicked);
	});

	var clickedNode = null;

	function onNodeClicked(sender, args)
	{
		diagram.getSelection().clear();

		if (clickedNode)
		{
			var finder = new PathFinder(diagram);

			var from = clickedNode;
			var to = args.getNode();

			var path;

			if (($("#shortest")[0] as HTMLInputElement).checked)
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
		if (AbstractionLayer.isInstanceOfType(DiagramNode, item))
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
			dummy.setShape(Shape.fromId("Circle"));
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

	export function onRandomGraph()
	{
		randomGraph(3);
		applyLayeredLayout();
	}

	function randomGraph(n)
	{
		diagram.clearAll();

		for (var i = 0; i < n; ++i)
		{
			var c = diagram.getNodes().length;
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
						diagram, diagram.getNodes()[diagram.getNodes().length - 2], node);

					diagram.addItem(link);
				}
			}
			if (i > 0)
			{
				for (var j = 0; j < 1 + randomInt(2); ++j)
				{
					var link = new DiagramLink(
						diagram, diagram.getNodes()[randomInt(c)], diagram.getNodes()[c + randomInt(g)]);
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
	}
}