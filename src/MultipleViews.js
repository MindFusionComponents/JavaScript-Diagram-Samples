/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var Theme = MindFusion.Diagramming.Theme;
var Style = MindFusion.Diagramming.Style;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var diagram = null;
document.addEventListener("DOMContentLoaded", function () {
    // create the shared Diagram instance
    diagram = new Diagram();
    diagram.backBrush = "#e0e9e9";
    diagram.theme = Theme.getEarth();
    var shapeNodeStyle = new Style();
    shapeNodeStyle.nodeEffects = [new GlassEffect()];
    diagram.style = shapeNodeStyle;

    diagram.factory.createShapeNode(10, 10, 30, 30);
    diagram.factory.createShapeNode(70, 10, 30, 30);
    diagram.factory.createDiagramLink(diagram.nodes[0], diagram.nodes[1]);

    // create two DiagramView controls, both displaying the same diagram
    var diagramView = DiagramView.create(document.getElementById("diagram"), diagram);
    diagramView.allowInplaceEdit = true;

    var diagramView2 = DiagramView.create(document.getElementById("diagram2"), diagram);
    diagramView2.allowInplaceEdit = true;
    // create a ZoomControl component, attached to the second DiagramView
    var zoomer = MindFusion.Controls.ZoomControl.create(document.getElementById("zoomer"));
    zoomer.target = diagramView2;
    zoomer.zoomFactor = 25;

});

