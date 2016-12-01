/// <reference path="jquery.d.ts" />
/// <reference path="jsdiag.d.ts" />

import Events = MindFusion.Diagramming.Events;
import Diagram = MindFusion.Diagramming.Diagram;
import DiagramLink = MindFusion.Diagramming.DiagramLink;
import ShapeNode = MindFusion.Diagramming.ShapeNode;
import AnchorPattern = MindFusion.Diagramming.AnchorPattern;
import AnchorPoint = MindFusion.Diagramming.AnchorPoint;
import MarkStyle = MindFusion.Diagramming.MarkStyle;
import GlassEffect = MindFusion.Diagramming.GlassEffect;
import Shape = MindFusion.Diagramming.Shape;
import NodeEventArgs = MindFusion.Diagramming.NodeEventArgs;

import Rect = MindFusion.Drawing.Rect;

var diagram: Diagram = null;
var decision1In3Out: AnchorPattern;
var apat1: AnchorPattern;
var apat2: AnchorPattern;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);

	// register event handlers
	diagram.addEventListener(Events.nodeCreated, onNodeCreated);

	// set up appearance
	diagram.setLinkHeadShapeSize(2);
	diagram.setBackBrush("#E0E0E0");
	diagram.setRouteLinks(true);
	diagram.setRoundedLinks(true);
	diagram.setShowGrid(false);
	diagram.setShapeBrush("#ADFF32");
	diagram.getNodeEffects().push(new GlassEffect());

	var blue = "#0000FF";
	var green = "#00FF00";
	var red = "#FF0000";

	diagram.setDefaultShape(
		Shape.fromId("Rectangle"));

	apat1 = new AnchorPattern([
					new AnchorPoint(50, 0, true, true),
					new AnchorPoint(100, 50, true, true),
					new AnchorPoint(50, 100, true, true),
					new AnchorPoint(0, 50, true, true)
					]);
	apat2 = new AnchorPattern(
				[
					new AnchorPoint(10, 0, true, false, MarkStyle.Circle, green),
					new AnchorPoint(50, 0, true, false, MarkStyle.Circle, blue),
					new AnchorPoint(90, 0, true, false, MarkStyle.Circle, red),
					new AnchorPoint(10, 100, false, true, MarkStyle.Rectangle),
					new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle),
					new AnchorPoint(90, 100, false, true, MarkStyle.Rectangle),
					new AnchorPoint(0, 50, true, true, MarkStyle.X)
				]);

	var pb1 = diagram.getFactory().createShapeNode(10, 7, 25, 18);
	pb1.setShape(
		Shape.fromId("Ellipse"));
	pb1.setText("Start");
	pb1.setAnchorPattern(apat1);

	var pb2 = diagram.getFactory().createShapeNode(20, 78, 25, 18);
	pb2.setText("node 1");
	pb2.setAnchorPattern(apat2);

	var pb3 = diagram.getFactory().createShapeNode(70, 73, 25, 18);
	pb3.setText("node 2");
	pb3.setAnchorPattern(apat2);

	var pb4 = diagram.getFactory().createShapeNode(80, 110, 25, 18);
	pb4.setShape(
		Shape.fromId("Ellipse"));
	pb4.setText("End");
	pb4.setAnchorPattern(apat1);

	decision1In3Out = AnchorPattern.fromId("Decision1In3Out");

	var decb1 = diagram.getFactory().createShapeNode(20, 35, 30, 20);
	decb1.setShape(
		Shape.fromId("Decision"));
	decb1.setText("check 1");
	decb1.setAnchorPattern(decision1In3Out);

	var decision2In2Out = AnchorPattern.fromId("Decision2In2Out");

	var decb2 = diagram.getFactory().createShapeNode(70, 30, 30, 20);
	decb2.setShape(
		Shape.fromId("Decision"));
	decb2.setText("check 2");
	decb2.setAnchorPattern(decision2In2Out);

	var link = diagram.getFactory().createDiagramLink(decb1, decb2);
	link.route();
});

function onNodeCreated(sender: Diagram, args: NodeEventArgs)
{
	var node = args.getNode();
	if (diagram.getDefaultShape().getId() == "Rectangle")
		node.setAnchorPattern(apat2);
	else
		node.setAnchorPattern(decision1In3Out);
}

function rBtnSelectNode()
{
	diagram.setDefaultShape(
		Shape.fromId("Rectangle"));
}

function rBtnSelectDecision()
{
	diagram.setDefaultShape(
		Shape.fromId("Decision"));
}