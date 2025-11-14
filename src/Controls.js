/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;

var shapeNodeStyle = new Style();
document.addEventListener("DOMContentLoaded", function () {

	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;

	//styling
	shapeNodeStyle.brush = { type: 'SolidBrush', color: '#e0e9e9' };
	shapeNodeStyle.stroke = "#7F7F7F";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 4;
	shapeNodeStyle.nodeEffects = [new GlassEffect()];
	diagram.style = shapeNodeStyle;

	// create a Palette component
	var palette = MindFusion.Diagramming.Controls.Palette.create(document.getElementById("palette"));
	palette.padding = 2;
	palette.captionFont = new MindFusion.Drawing.Font("sans-serif", 3);
	palette.setTop("200px");
	palette.setWidth("200px");
	palette.setHeight("");
	palette.theme = "business";
	initPalette(palette);

	// create an Overview component that wraps the "overview" canvas
	var overview = MindFusion.Diagramming.Overview.create(document.getElementById("overview"));
	overview.diagramView = diagramView;
	overview.backColor = "#eee";

	// create a ZoomControl component that wraps the "zoomer" canvas
	var zoomer = MindFusion.Controls.ZoomControl.create(document.getElementById("zoomer"));
	zoomer.target = diagramView;
	zoomer.borderColor = "#5a79a5";

	// create a Ruler component that wraps the "ruler" div
	var ruler = MindFusion.Diagramming.Ruler.create(document.getElementById("ruler"));
	ruler.diagramView = diagramView;
	ruler.backColor = "#fff";
	ruler.foreColor = "#5a79a5";
	ruler.textColor = "#5a79a5";
});

function initPalette(palette) {

	palette.addCategory("Flowchart Shapes");
	var shapes = ["Start", "Input", "Process", "Decision"]
	for (var i = 0; i < shapes.length; ++i) {
		var node = new MindFusion.Diagramming.ShapeNode();
		node.shape = shapes[i];
		node.style = shapeNodeStyle;
		palette.addItem(node, "Flowchart Shapes", shapes[i]);
	}

	palette.addCategory("Data Shapes");
	var shapes = ["Database", "Input", "Delay", "Document", "ManualOperation"];
	for (var i = 0; i < shapes.length; ++i) {
		var node = new MindFusion.Diagramming.ShapeNode();
		node.shape = shapes[i];
		node.style = shapeNodeStyle;
		palette.addItem(node, "Data Shapes", shapes[i]);
	}

	palette.addCategory("BPMN Shapes");
	var shapes = ["BpmnStartLink", "BpmnIntermediateLink", "BpmnEndLink",
		"BpmnStartMessage", "BpmnIntermediateMessage", "BpmnEndMessage"];
	for (var i = 0; i < shapes.length; ++i) {
		var node = new MindFusion.Diagramming.ShapeNode();
		node.shape = shapes[i];
		node.style = shapeNodeStyle;
		palette.addItem(node, "BPMN Shapes", shapes[i]);
	}

}
