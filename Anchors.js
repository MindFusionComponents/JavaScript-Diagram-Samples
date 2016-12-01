var Events = MindFusion.Diagramming.Events;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var Rect = MindFusion.Drawing.Rect;

var diagram = null;
var bounds = new Rect(0, 0, 30, 6);
var brush = "LightBlue";

var decision1In3Out, apat2;

$(document).ready(function (sender, args)
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

	// register event handlers
	diagram.addEventListener(Events.nodeCreated, onNodeCreated);

	// 
	diagram.setLinkHeadShapeSize(2);
	diagram.setDefaultShape("Rectangle");
	diagram.setBackBrush("#E0E0E0");
	diagram.setRouteLinks(true);
	diagram.setRoundedLinks(true);
	diagram.setShowGrid(false);
	diagram.setShapeBrush("#ADFF32");
	diagram.getNodeEffects().push(new GlassEffect());

	var blue = "#0000FF";
	var green = "#00FF00";
	var red = "#FF0000";

	diagram.setDefaultShape("Rectangle");

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
	var pb1 = diagram.getFactory().createShapeNode(new Rect(10, 7, 25, 18));
	pb1.setShape("Ellipse");
	pb1.setText("Start");
	pb1.setAnchorPattern(apat1);

	pb2 = diagram.getFactory().createShapeNode(new Rect(20, 78, 25, 18));
	pb2.setText("node 1");
	pb2.setAnchorPattern(apat2);

	pb3 = diagram.getFactory().createShapeNode(new Rect(70, 73, 25, 18));
	pb3.setText("node 2");
	pb3.setAnchorPattern(apat2);

	pb4 = diagram.getFactory().createShapeNode(new Rect(80, 110, 25, 18));
	pb4.setShape("Ellipse");
	pb4.setText("End");
	pb4.setAnchorPattern(apat1);

	decision1In3Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision1In3Out");

	decb1 = diagram.getFactory().createShapeNode(new Rect(20, 35, 30, 20));
	decb1.setShape("Decision");
	decb1.setText("check 1");
	decb1.setAnchorPattern(decision1In3Out);

	var decision2In2Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision2In2Out");

	decb2 = diagram.getFactory().createShapeNode(new Rect(70, 30, 30, 20));
	decb2.setShape("Decision");
	decb2.setText("check 2");
	decb2.setAnchorPattern(decision2In2Out);

	var link = diagram.getFactory().createDiagramLink(decb1, decb2);
	link.route();
});

function onNodeCreated(sender, args)
{
	var node = args.getNode();
	if (diagram.getDefaultShape().id == "Rectangle")
		node.setAnchorPattern(apat2);
	else
		node.setAnchorPattern(decision1In3Out);
}

function rBtnSelectNode()
{
	diagram.setDefaultShape("Rectangle");
}

function rBtnSelectDecision()
{
	diagram.setDefaultShape("Decision");
}