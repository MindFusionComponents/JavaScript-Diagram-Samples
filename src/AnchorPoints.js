/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;
var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;

var Rect = MindFusion.Drawing.Rect;

var diagram = null;

var decision1In3Out, apat1, apat2;

document.addEventListener("DOMContentLoaded", function ()
{
    diagram = new Diagram();

    // register event handlers
    diagram.addEventListener(Events.nodeCreated, onNodeCreated);
    diagram.linkHeadShapeSize = 2;
    diagram.defaultShape = "Rectangle";
    diagram.routeLinks = true;
    diagram.roundedLinks = true;
    diagram.showGrid = false;
    diagram.backBrush = "#e0e9e9";

    var theme = new Theme();
    var shapeNodeStyle = new Style();
    shapeNodeStyle.brush = { type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 };
    shapeNodeStyle.stroke = "#7F7F7F";
    shapeNodeStyle.textColor = "#585A5C";
    shapeNodeStyle.fontName = "Verdana";
    shapeNodeStyle.fontSize = 3;
    shapeNodeStyle.backBrush = "#e0e9e9";
    shapeNodeStyle.nodeEffects = [new GlassEffect()];
    theme.styles.set("std:ShapeNode", shapeNodeStyle);
    diagram.theme = theme;

    var blue = "#2d3956";
    var green = "#5a7444";
    var red = "#ce0000";

    apat1 = new AnchorPattern([
        new AnchorPoint(50, 0, true, true),
        new AnchorPoint(100, 50, true, true),
        new AnchorPoint(50, 100, true, true),
        new AnchorPoint(0, 50, true, true)
    ]);
    apat1.points[0].toolTip = "Point 0 tooltip";
    apat1.points[1].toolTip = "Point 1 tooltip";
    apat1.points[2].toolTip = "Point 2 tooltip";
    apat1.points[3].toolTip = "Point 3 tooltip";

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
    var pb1 = diagram.factory.createShapeNode(new Rect(10, 7, 25, 18));
    pb1.shape = ("Ellipse");
    pb1.text = ("Start");
    pb1.anchorPattern = (apat1);

    var pb2 = diagram.factory.createShapeNode(new Rect(20, 78, 25, 18));
    pb2.text = ("node 1");
    pb2.anchorPattern = (apat2);

    var pb3 = diagram.factory.createShapeNode(new Rect(70, 73, 25, 18));
    pb3.text = ("node 2");
    pb3.anchorPattern = (apat2);

    var pb4 = diagram.factory.createShapeNode(new Rect(80, 110, 25, 18));
    pb4.shape = ("Ellipse");
    pb4.text = ("End");
    pb4.anchorPattern = (apat1);

    decision1In3Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision1In3Out");

    var decb1 = diagram.factory.createShapeNode(new Rect(20, 35, 30, 20));
    decb1.shape = ("Decision");
    decb1.text = ("check 1");
    decb1.anchorPattern = (decision1In3Out);

    var decision2In2Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision2In2Out");

    var decb2 = diagram.factory.createShapeNode(new Rect(70, 30, 30, 20));
    decb2.shape = ("Decision");
    decb2.text = ("check 2");
    decb2.anchorPattern = (decision2In2Out);

    var link = diagram.factory.createDiagramLink(decb1, decb2);
    link.route();

    var diagramView = DiagramView.create(document.getElementById("diagram"));
    diagramView.diagram = diagram;
    diagramView.mouseWheelAction = MindFusion.Diagramming.MouseWheelAction.Zoom;

});

function onNodeCreated(sender, args)
{
    var node = args.node;
    if (diagram.defaultShape.id == "Rectangle")
        node.anchorPattern = (apat2);
    else
        node.anchorPattern = (decision1In3Out);
}

function rBtnSelectNode()
{
    diagram.defaultShape = "Rectangle";
}

function rBtnSelectDecision()
{
    diagram.defaultShape = "Decision";
}