/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;
var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Shapes = MindFusion.Diagramming.Shapes;
var AdjustmentHandles = MindFusion.Diagramming.AdjustmentHandles;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Rect = MindFusion.Drawing.Rect;

var diagram = null;


document.addEventListener("DOMContentLoaded", function ()
{
    diagram = new Diagram();

    diagram.drawAdjustmentHandles.addEventListener(drawHandles);
    diagram.hitTestAdjustmentHandles.addEventListener(hitTestHandles);

    diagram.selectedItemHandlesStyle.handleBrush = "skyblue";
    diagram.selectedItemHandlesStyle.handleStroke = "blue";
    diagram.selectedItemHandlesStyle.hatchBrush = "skyblue";
    diagram.selectedItemHandlesStyle.patternBrush = "skyblue";

    diagram.activeItemHandlesStyle.handleBrush = "lawngreen";
    diagram.activeItemHandlesStyle.handleStroke = "green";
    diagram.activeItemHandlesStyle.hatchBrush = "lawngreen";
    diagram.activeItemHandlesStyle.patternBrush = "lawngreen";

    diagram.disabledHandlesStyle.handleBrush = "red";
    diagram.disabledHandlesStyle.handleStroke = "darkred";

    var style = new Style();
    style.nodeEffects = [new GlassEffect()];
    diagram.style = style;

    var n1 = diagram.factory.createShapeNode(new Rect(5, 15, 25, 15));
    n1.shape = Shapes.Ellipse();
    n1.text = "DashFrame";
    n1.handlesStyle = HandlesStyle.DashFrame;

    var n2 = diagram.factory.createShapeNode(new Rect(35, 15, 25, 15));
    n2.text = "EasyMove";
    n2.handlesStyle = HandlesStyle.EasyMove;

    var n3 = diagram.factory.createShapeNode(new Rect(65, 15, 25, 15));
    n3.text = "HatchFrame";
    n3.handlesStyle = HandlesStyle.HatchFrame;

    var n4 = diagram.factory.createShapeNode(new Rect(95, 15, 25, 15));
    n4.text = "HatchHandles";
    n4.shape = Shapes.Ellipse();
    n4.handlesStyle = HandlesStyle.HatchHandles;

    var n5 = diagram.factory.createShapeNode(new Rect(125, 15, 25, 15));
    n5.text = "HatchHandles2";
    n5.shape = Shapes.Decision();
    n5.handlesStyle = HandlesStyle.HatchHandles2;

    var n6 = diagram.factory.createShapeNode(new Rect(5, 35, 25, 15));
    n6.text = "HatchHandles3";
    n6.shape = Shapes.Decision();
    n6.handlesStyle = HandlesStyle.HatchHandles3;

    var n7 = diagram.factory.createShapeNode(new Rect(35, 35, 25, 15));
    n7.text = "Invisible";
    n7.shape = Shapes.Ellipse();
    n7.handlesStyle = HandlesStyle.Invisible;

    var n8 = diagram.factory.createShapeNode(new Rect(65, 35, 25, 15));
    n8.text = "InvisibleMove";
    n8.handlesStyle = HandlesStyle.InvisibleMove;

    var n9 = diagram.factory.createShapeNode(new Rect(95, 35, 25, 15));
    n9.text = "MoveOnly";
    n9.handlesStyle = HandlesStyle.MoveOnly;

    var n10 = diagram.factory.createShapeNode(new Rect(125, 35, 25, 15));
    n10.text = "RoundAndSquare";
    n10.shape = Shapes.Ellipse();
    n10.handlesStyle = HandlesStyle.RoundAndSquare;

    var n11 = diagram.factory.createShapeNode(new Rect(5, 55, 25, 15));
    n11.text = "RoundAndSquare2";
    n11.shape = Shapes.Decision();
    n11.handlesStyle = HandlesStyle.RoundAndSquare2;

    var n12 = diagram.factory.createShapeNode(new Rect(35, 55, 25, 15));
    n12.text = "SquareHandles";
    n12.shape = Shapes.Decision();
    n12.handlesStyle = HandlesStyle.SquareHandles;

    var n13 = diagram.factory.createShapeNode(new Rect(65, 55, 25, 15));
    n13.text = "SquareHandles2";
    n13.shape = Shapes.Ellipse();
    n13.handlesStyle = HandlesStyle.SquareHandles2;

    var n14 = diagram.factory.createShapeNode(new Rect(95, 55, 25, 15));
    n14.text = "Custom";
    n14.shape = Shapes.Rectangle();
    n14.handlesStyle = HandlesStyle.Custom;

    var n15 = diagram.factory.createShapeNode(new Rect(125, 55, 25, 15));
    n15.text = "Bottom|Move";

    var diagramView = DiagramView.create(document.getElementById("diagram"));
    diagramView.diagram = diagram;

    diagram.nodes.forEach((node) =>
    {
        node.enabledHandles = AdjustmentHandles.All;
        diagramView.diagram.selection.addItem(node);
    });

    n15.enabledHandles = AdjustmentHandles.ResizeBottomLeft | AdjustmentHandles.ResizeBottomCenter | AdjustmentHandles.ResizeBottomRight | AdjustmentHandles.Move;
});

function drawHandles(sender, args)
{
    var bounds = args.node.bounds;
    var context = args.context;
    var size = args.node.parent.adjustmentHandlesSize;

    context.save();
    context.fillStyle = "violet";
    context.fillRect(bounds.x, bounds.y, bounds.width, size);
    context.fillRect(bounds.x, bounds.y + bounds.height - size, bounds.width, size);
    context.restore();
}

function hitTestHandles(sender, args)
{
    var bounds = args.node.bounds;
    var mousePosition = args.mousePosition;
    var size = args.node.parent.adjustmentHandlesSize;

    var topHandle = new Rect(bounds.x, bounds.y, bounds.width, size)
    var bottomHandle = new Rect(bounds.x, bounds.y + bounds.height - size, bounds.width, size);

    if (topHandle.containsPoint(mousePosition)) args.adjustmentHandle = 4;
    else if (bottomHandle.containsPoint(mousePosition)) args.adjustmentHandle = 6;
    else if (bounds.containsPoint(mousePosition)) args.adjustmentHandle = 8;
}

document.getElementById("handlesSize").addEventListener("change", (e) =>
{
    var diagramView = MindFusion.Diagramming.DiagramView.find('diagram');
    diagramView.diagram.adjustmentHandlesSize = +e.target.value;
});
