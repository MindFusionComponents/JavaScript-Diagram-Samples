/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Anchors
{
	import Events = MindFusion.Diagramming.Events;
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import AnchorPattern = MindFusion.Diagramming.AnchorPattern;
	import AnchorPoint = MindFusion.Diagramming.AnchorPoint;
	import MarkStyle = MindFusion.Diagramming.MarkStyle;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;
	import Style = MindFusion.Diagramming.Style;
	import Theme = MindFusion.Diagramming.Theme;
	import Shape = MindFusion.Diagramming.Shape;
	import DiagramNode = MindFusion.Diagramming.DiagramNode;

	import Rect = MindFusion.Drawing.Rect;

	export var diagram: Diagram = null;
	var bounds = new Rect(0, 0, 30, 6);
	//var brush = "#2d3956";

	var decision1In3Out, apat2;

	$(document).ready(function()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

		// register event handlers
		diagram.addEventListener(Events.nodeCreated, onNodeCreated);

		// 
		diagram.setLinkHeadShapeSize(2);
		diagram.setDefaultShape(Shape.fromId("Rectangle"));
		diagram.setRouteLinks(true);
		diagram.setRoundedLinks(true);
		diagram.setShowGrid(false);
		diagram.setBackBrush("#e0e9e9");


		var theme = new Theme();
		var shapeNodeStyle = new Style();
		shapeNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 });
		shapeNodeStyle.setStroke("#7F7F7F");
		shapeNodeStyle.setTextColor("#585A5C");
		shapeNodeStyle.setFontName("Verdana");
		shapeNodeStyle.setFontSize(3);
		shapeNodeStyle.setBackBrush("#e0e9e9");
		shapeNodeStyle.setNodeEffects([new GlassEffect()]);
		theme.styles["std:ShapeNode"] = shapeNodeStyle;
		diagram.setStyle(shapeNodeStyle);

		var blue = "#2d3956";
		var green = "#5a7444";
		var red = "#ce0000";

		var apat1 = new AnchorPattern([
			new AnchorPoint(50, 0, true, true),
			new AnchorPoint(100, 50, true, true),
			new AnchorPoint(50, 100, true, true),
			new AnchorPoint(0, 50, true, true)
		]);
		var apat2 = new AnchorPattern(
			[
				new AnchorPoint(10, 0, true, false, MarkStyle.Circle, green),
				new AnchorPoint(50, 0, true, false, MarkStyle.Circle, blue),
				new AnchorPoint(90, 0, true, false, MarkStyle.Circle, red),
				new AnchorPoint(10, 100, false, true, MarkStyle.Rectangle),
				new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle),
				new AnchorPoint(90, 100, false, true, MarkStyle.Rectangle),
				new AnchorPoint(0, 50, true, true, MarkStyle.X)
			]);
		var pb1 = diagram.getFactory().createShapeNode(new Rect(10, 7, 25, 18));
		pb1.setShape(Shape.fromId("Ellipse"));
		pb1.setText("Start");
		pb1.setAnchorPattern(apat1);

		var pb2 = diagram.getFactory().createShapeNode(new Rect(20, 78, 25, 18));
		pb2.setText("node 1");
		pb2.setAnchorPattern(apat2);

		var pb3 = diagram.getFactory().createShapeNode(new Rect(70, 73, 25, 18));
		pb3.setText("node 2");
		pb3.setAnchorPattern(apat2);

		var pb4 = diagram.getFactory().createShapeNode(new Rect(80, 110, 25, 18));
		pb4.setShape(Shape.fromId("Ellipse"));
		pb4.setText("End");
		pb4.setAnchorPattern(apat1);

		decision1In3Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision1In3Out");

		var decb1 = diagram.getFactory().createShapeNode(new Rect(20, 35, 30, 20));
		decb1.setShape(Shape.fromId("Decision"));
		decb1.setText("check 1");
		decb1.setAnchorPattern(decision1In3Out);

		var decision2In2Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision2In2Out");

		var decb2 = diagram.getFactory().createShapeNode(new Rect(70, 30, 30, 20));
		decb2.setShape(Shape.fromId("Decision"));
		decb2.setText("check 2");
		decb2.setAnchorPattern(decision2In2Out);

		var link = diagram.getFactory().createDiagramLink(decb1, decb2);
		link.route();
	});

	function onNodeCreated(sender, args)
	{
		var node: DiagramNode = args.getNode();
		if (diagram.getDefaultShape().getId() == "Rectangle")
			node.setAnchorPattern(apat2);
		else
			node.setAnchorPattern(decision1In3Out);
	}

	export function rBtnSelectNode()
	{
		diagram.setDefaultShape(Shape.fromId("Rectangle"));
	}

	export function rBtnSelectDecision()
	{
		diagram.setDefaultShape(Shape.fromId("Decision"));
	}
}