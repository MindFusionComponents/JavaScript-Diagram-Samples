/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace LayeredLayout
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import Style = MindFusion.Diagramming.Style;

	import Rect = MindFusion.Drawing.Rect;
	import LayeredLayout = MindFusion.Graphs.LayeredLayout;
	import LayoutDirection = MindFusion.Graphs.LayoutDirection;

	var diagram : Diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.setLinkHeadShapeSize(2);
		var linkStyle = new Style();
		linkStyle.setStroke("#c0c0c0");
		linkStyle.setTextColor("#585A5C");
		linkStyle.setFontName("Verdana");
		linkStyle.setFontSize(3);
		diagram.setStyle(linkStyle);


		// create an Overview component that wraps the "overview" canvas
		var overview = MindFusion.AbstractionLayer.createControl(MindFusion.Diagramming.Overview,
			null, null, null, $("#overview")[0]);
		overview.setDiagram(diagram);
	});

	export function onRandomGraph()
	{
		randomGraph(20);
		applyLayeredLayout();
	}

	function randomGraph(n)
	{
		diagram.clearAll();

		for (var i = 0; i < n; ++i)
		{
			var c = diagram.getNodes().length;
			var g = 2 + randomInt(15);
			for (var j = 0; j < g; ++j)
			{
				var rect = new Rect(0, 0, 10, 10);
				var node = new ShapeNode(diagram);
				node.setBounds(rect);
				node.setBrush({ type: "LinearGradientBrush", color1: "#e0e9e9", color2: "#669acc", angle: 60 });
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
				for (var j = 0; j < 1 + randomInt(3); ++j)
				{
					var link = new DiagramLink(
						diagram, diagram.getNodes()[randomInt(c)], diagram.getNodes()[c + randomInt(g)]);
					diagram.addItem(link);
				}
			}
		}
	}

	function applyLayeredLayout()
	{
		var layout = new LayeredLayout();
		layout.direction = LayoutDirection.TopToBottom;
		layout.siftingRounds = 0;
		layout.nodeDistance = 8;
		layout.layerDistance = 8;
		diagram.arrange(layout);
		diagram.resizeToFitItems(5);
	}

	function randomInt(max)
	{
		return Math.floor(max * Math.random());
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
}