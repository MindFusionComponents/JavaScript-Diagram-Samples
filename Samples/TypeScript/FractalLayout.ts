﻿/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace FractalLayout
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;

	import Rect = MindFusion.Drawing.Rect;
	import FractalLayout = MindFusion.Graphs.FractalLayout;

	var diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.setLinkHeadShapeSize(2);

		// create an Overview component that wraps the "overview" canvas
		var overview = MindFusion.AbstractionLayer.createControl(MindFusion.Diagramming.Overview,
			null, null, null, $("#overview")[0]);
		overview.setDiagram(diagram);
	});

	export function onRandomTree()
	{
		var diagram = Diagram.find("diagram");
		diagram.clearAll();

		// create the root node
		var rect = new Rect(0, 0, 15, 10);
		var node = new ShapeNode(diagram);
		var brush = brushes[0];
		node.setBounds(rect);
		node.setBrush(brush);
		node.setStroke(brushes[1]);
		diagram.addItem(node);

		// add random children
		randomTree(node, 5, 4);

		applyLayout();
		diagram.setZoomFactor(8);
	}

	function randomTree(node, depth, minChildren)
	{
		if (depth <= 0)
			return;

		var diagram = node.getParent();
		var children = randomInt(depth) - 1 + minChildren;
		var brush = brushes[0];
		while (brush == node.getBrush())
			brush = brushes[1];

		if (diagram.nodes.length < 3 && children < 2)
			children = 2;

		for (var i = 0; i < children; ++i)
		{
			// create child node
			var rect = new Rect(0, 0, 15, 10);
			var child = new ShapeNode(diagram);
			child.setBounds(rect);
			child.setBrush(brush);
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
		var diagram = Diagram.find("diagram");
		var layout = new FractalLayout();
		layout.root = diagram.getNodes()[0];
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
			diagram.setBounds(new Rect(0, 0, rect.right() + 10, rect.bottom() + 10));
	}

	export function onZoomIn()
	{
		var diagram = Diagram.find("diagram");
		if (diagram.getZoomFactor() > 200) return;
		diagram.setZoomFactor(diagram.getZoomFactor() + 10);
	}

	export function onZoomOut()
	{
		var diagram = Diagram.find("diagram");
		if (diagram.getZoomFactor() < 19) return;
		diagram.setZoomFactor(diagram.getZoomFactor() - 10);
	}

	var brushes = ["#9caac6", "#ce0000", "#c0c0c0"]; 
}