/// <reference path="JsDiagram-vsdoc.js" />

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

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;

	diagram.selection.allowMultipleSelection = false;

	diagram.linkShape = LinkShape.Bezier;
	diagram.linkHeadShapeSize = 2;
	diagram.nodeEffects.push(new GlassEffect());

	// register event handlers
	diagram.addEventListener(Events.nodeClicked, onNodeClicked);
});

var clickedNode = null;

function onNodeClicked(sender, args) {
	diagram.selection.clear();

	if (clickedNode) {
		var finder = new PathFinder(diagram);

		var from = clickedNode;
		var to = args.node;

		var path;

		if ((document.getElementById("shortest")).checked)
			path = finder.findShortestPath(from, to, true, false);
		else
			path = finder.findLongestPath(from, to);

		if (path)
			runAnimation(0, path);
		else alert("No path found!")

		clickedNode.shadowColor = "gray";
		clickedNode = null;
	}
	else {
		clickedNode = args.node;
		clickedNode.shadowColor = "maroon";
	}
}

function runAnimation(index, path) {
	if (index >= path.items.length) return;

	var item = path.items[index];

	// animate nodes
	if (item instanceof DiagramNode) {
		var callback = function (animation, progress) {
			animation.item.brush = animation.fromValue;
		}

		var options =
		{
			duration: 200,
			fromValue: "maroon",
			toValue: "gray"
		}

		var animation = new Animation(item, options, callback);
		animation.start();

		animation.addEventListener(MindFusion.Animations.Events.animationComplete, function (sender, args) {
			animation.item.brush = animation.toValue;
			runAnimation(++index, path);
		});
	}
	else {
		// animate links
		var link = item;
		var sp = link.startPoint;
		var length = link.getLength();

		var callback = function (animation, animationProgress) {
			var node = animation.item;
			var bounds = node.bounds;

			var p = link.pointAlongLength(animationProgress);
			node.setBounds(new Rect(p.x - bounds.width / 2, p.y - bounds.height / 2, bounds.width, bounds.height));
		}

		var dummy = diagram.factory.createShapeNode(sp.x - 2, sp.y - 2, 4, 4);
		dummy.shape = "Circle";
		dummy.brush = "maroon";

		var animation = new Animation(dummy, { duration: length * 10 }, callback);
		animation.addEventListener(MindFusion.Animations.Events.animationComplete, function (sender, args) {
			diagram.removeItem(dummy);
			runAnimation(++index, path);
		});
		animation.start();
	}
}

function onRandomGraph() {
	randomGraph(3);
	applyLayeredLayout();
}

function randomGraph(n) {
	diagram.clearAll();

	for (var i = 0; i < n; ++i) {
		var c = diagram.nodes.length;
		var g = 2 + randomInt(2);
		for (var j = 0; j < g; ++j) {
			var rect = new Rect(0, 0, 20, 20);
			var node = new ShapeNode(diagram);
			node.setBounds(rect);
			node.brush = "gray";
			diagram.addItem(node);
			if (j > 0) {
				var link = new DiagramLink(
					diagram, diagram.nodes[diagram.nodes.length - 2], node);

				diagram.addItem(link);
			}
		}
		if (i > 0) {
			for (var j = 0; j < 1 + randomInt(2); ++j) {
				var link = new DiagramLink(
					diagram, diagram.nodes[randomInt(c)], diagram.nodes[c + randomInt(g)]);
				diagram.addItem(link);
			}
		}
	}
}

function randomInt(max) {
	return Math.floor(max * Math.random());
}

function applyLayeredLayout() {
	var layout = new LayeredLayout();
	layout.direction = LayoutDirection.LeftToRight;
	layout.siftingRounds = 0;
	layout.nodeDistance = 18;
	layout.layerDistance = 18;
	diagram.arrange(layout);
	diagram.resizeToFitItems();
}