/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var Events = MindFusion.Diagramming.Events;
var Point = MindFusion.Drawing.Point;
var Rect = MindFusion.Drawing.Rect;
var GraphicsUnit = MindFusion.Drawing.GraphicsUnit;

var diagramView, diagram, container;
var ghost;
var count = 2;

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.behavior = MindFusion.Diagramming.Behavior.LinkContainers;
	diagram = diagramView.diagram;

	var node = diagram.factory.createContainerNode(20, 20, 60, 30);
	node.text = "Container #1";

	node = diagram.factory.createContainerNode(90, 30, 60, 30);
	node.text = "Container #2";

	diagramView.enableMultiTouch = false;

	diagram.addEventListener(Events.nodeCreated, (sender, args) => { args.node.text = "Container #" + ++count; })
});

function getNodeUnderCursor(e) {
	// Get the relative coordinates
	var rect = document.getElementById('diagram').getBoundingClientRect();
	var offset =
	{
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	}

	var x = (e.pageX - offset.left) + document.body.scrollLeft;
	var y = (e.pageY - offset.top) + document.body.scrollTop;


	// Check for node under the cursor
	var localPoint = diagramView.clientToDoc(new Point(x, y));
	return diagram.getNodeAt(localPoint, true, true);
}

function onDiagramDragOver(e) {
	container = getNodeUnderCursor(e);
	if (container != null) {
		if (e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	}
}

function onTargetDragOver(e) {
	if (e.preventDefault)
		e.preventDefault();
	else
		e.returnValue = false;
}

function onDiagramDragStart(e) {
	var node = getNodeUnderCursor(e);
	if (node != null) {
		if (e.dataTransfer.setDragImage) {
			ghost = createDragShape(node);
			if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
				var img = new Image();
				img.src = ghost.element.toDataURL();
				e.dataTransfer.setDragImage(img, 0, 0);
			}
			else
				e.dataTransfer.setDragImage(ghost.element, 0, 0);
			ghost.dispose();
			ghost = null;
		}
		e.dataTransfer.setData("text", node.text);

	}
}

function createDragShape(node) {
	var bounds = new Rect(0, 0, node.bounds.width, node.bounds.height);

	var canvasElement = document.createElement('canvas');
	canvasElement.id = 'ghost';
	canvasElement.width = bounds.width;
	canvasElement.height = bounds.height;

	var canvasControl = new MindFusion.Controls.CanvasControl(canvasElement);
	canvasControl.canvas.bounds = bounds;

	var cnode = node.clone();
	cnode.shadowColor = 'transparent';
	cnode.parent = canvasControl.canvas;
	cnode.bounds = bounds;
	cnode.addCanvasElements();

	canvasControl.canvas.repaint();

	return canvasControl;
}

function onSourceDragStart(e) {
	e.dataTransfer.setData("text", e.target.innerText);
}

function onDiagramDrop(e) {
	if (e.preventDefault)
		e.preventDefault();
	else
		e.returnValue = false;

	// Create a shape node from the text and add it to the container collection.
	var data = e.dataTransfer.getData("text");
	if (data != null && container != null) {
		var node = diagram.factory.createShapeNode(0, 0, 30, 20);
		node.text = data;
		node.locked = true;

		container.add(node);
		container.arrange(new MindFusion.Graphs.LayeredLayout());
	}
}

function onTargetDrop(e) {
	if (e.preventDefault)
		e.preventDefault();
	else
		e.returnValue = false;

	var data = e.dataTransfer.getData("text");
	if (data != null) {
		var p = document.createElement("p");
		p.className = "p";
		p.innerHTML = data;
		document.getElementById("dropTarget").appendChild(p);
	}
}

function onDragModeChanged(sender) {
	diagramView.enabled = !sender.checked;
}