﻿/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />

namespace Tutorial2
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import Shape = MindFusion.Diagramming.Shape;

	import Rect = MindFusion.Drawing.Rect;
	import BorderedTreeLayout = MindFusion.Graphs.BorderedTreeLayout;

	var diagram: Diagram = null;
	var bounds = new Rect(0, 0, 30, 6);
	var brush = "#e0e9e9";

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.setLinkHeadShapeSize(2);
		diagram.setDefaultShape(Shape.fromId("Rectangle"));

		// pretend we are calling a web service
		$.get("Tutorial2.txt", onResponse);
	});

	function onResponse(json)
	{
		if (json)
		{
			var graph = MindFusion.AbstractionLayer.fromJson(json);
			buildDiagram(graph);
		}
	}

	function buildDiagram(graph)
	{
		// load activity data and create 
		var project = graph.project;
		var diagramNode = diagram.getFactory().createShapeNode(bounds);
		diagramNode.setText(project.name);
		diagramNode.setBrush(brush);
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
		$.each(parent.activities, function (index, activity)
		{
			var diagramNode = diagram.getFactory().createShapeNode(bounds);
			diagramNode.setText(activity.name);
			diagramNode.setBrush(brush);
			diagram.getFactory().createDiagramLink(parentNode, diagramNode);

			if (activity.activities)
				addActivities(diagramNode, activity);
		});
	}
}