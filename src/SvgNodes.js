/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;
var Diagram = MindFusion.Diagramming.Diagram;
var Behavior = MindFusion.Diagramming.Behavior;
var AutoResize = MindFusion.Diagramming.AutoResize;
var SvgContent = MindFusion.Diagramming.SvgContent;
var Rect = MindFusion.Drawing.Rect;

var diagram = null;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.behavior = Behavior.Modify;

	diagram = diagramView.diagram;
	diagram.autoResize = AutoResize.None;
	diagram.bounds = new Rect(0, 0, 135, 135);
	diagram.backgroundImageUrl = "parking.png";

	addNode(new Rect(55, 5, 25, 25), "sign.svg", true);
	addNode(new Rect(105, 85, 25, 25), "car1.svg");
	addNode(new Rect(10, 85, 25, 25), "car2.svg");
	addNode(new Rect(105, 45, 25, 25), "car3.svg");
	addNode(new Rect(10, 65, 25, 25), "car5.svg");
	addNode(new Rect(10, 20, 25, 25), "car6.svg");
	addNode(new Rect(105, 105, 25, 25), "car7.svg");
});

function addNode(bounds, filename, locked)
{
	var node = diagram.factory.createSvgNode(bounds);
	node.transparent = true;
	node.locked = locked;
	var content = new SvgContent();
	content.parse(filename);
	node.content = content;
}

function addNodeClick()
{
	var index = Math.floor((Math.random() * 7) + 1);
	addNode(new Rect(55, 30, 25, 25), "car" + index + ".svg");
}

function resetClick()
{
	diagram.clearAll();
	addNode(new Rect(55, 5, 25, 25), "sign.svg", true);
}