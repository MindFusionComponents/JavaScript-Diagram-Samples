/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace DragDrop
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import Point = MindFusion.Drawing.Point;
	import Rect = MindFusion.Drawing.Rect;
	import GraphicsUnit = MindFusion.Drawing.GraphicsUnit;

	var diagram, container;
	var ghost;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
		diagram.setBehavior(MindFusion.Diagramming.Behavior.LinkContainers);

		var node = diagram.getFactory().createContainerNode(20, 20, 60, 30);
		node.setText("Container #1");

		node = diagram.getFactory().createContainerNode(90, 30, 60, 30);
		node.setText("Container #2");
	});

	function getNodeUnderCursor(e)
	{
		// Get the relative coordinates
		var offset = $('#diagram').offset();
		var x = (e.pageX - offset.left) + $(window).scrollLeft();
		var y = (e.pageY - offset.top) + $(window).scrollTop();

		// Check for node under the cursor
		var localPoint = diagram.clientToDoc(new Point(x, y));
		return diagram.getNodeAt(localPoint, true, true);
	}

	export function onDiagramDragOver(e)
	{
		container = getNodeUnderCursor(e);
		if (container != null)
		{
			if (e.preventDefault)
				e.preventDefault();
			else
				e.returnValue = false;
		}
	}

	export function onTargetDragOver(e)
	{
		if (e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	}

	export function onDiagramDragStart(e)
	{
		var node = getNodeUnderCursor(e);
		if (node != null)
		{
			if (e.dataTransfer.setDragImage)
			{
				ghost = createDragShape(node);
				if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
				{
					var img = new Image();
					img.src = ghost.get_element().toDataURL();
					e.dataTransfer.setDragImage(img, 0, 0);
				}
				else
					e.dataTransfer.setDragImage(ghost.get_element(), 0, 0);
				ghost.dispose();
				ghost = null;
			}
			e.dataTransfer.setData("text", node.getText());

		}
	}

	function createDragShape(node)
	{
		var bounds = new Rect(0, 0, node.getBounds().width, node.getBounds().height);

		var canvasElement = document.createElement('canvas');
		canvasElement.id = 'ghost';
		canvasElement.width = bounds.width;
		canvasElement.height = bounds.height;

		var canvas = MindFusion.AbstractionLayer.createControl(MindFusion.Drawing.Canvas, null, null, null, canvasElement);
		canvas.scale = 1;
		canvas.setBounds(bounds);

		var cnode = node.clone();
		cnode.shadowColor = 'transparent';
		cnode.parent = canvas;
		cnode.setBounds(bounds);
		cnode.addCanvasElements();

		canvas.repaint();

		return canvas;
	}

	export function onSourceDragStart(e)
	{
		e.dataTransfer.setData("text", e.target.innerText);
	}

	export function onDiagramDrop(e)
	{
		if (e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;

		// Create a shape node from the text and add it to the container collection.
		var data = e.dataTransfer.getData("text");
		if (data != null && container != null)
		{
			var node = diagram.getFactory().createShapeNode(0, 0, 30, 20);
			node.setText(data);
			node.setLocked(true);

			container.add(node);
			container.arrange(new MindFusion.Graphs.LayeredLayout());
		}
	}

	export function onTargetDrop(e)
	{
		if (e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;

		var data = e.dataTransfer.getData("text");
		if (data != null)
		{
			var p = $('<p class="p">' + data + '</p>');
			$("#dropTarget").append(p);
		}
	}

	export function onDragModeChanged(sender)
	{
		diagram.setEnabled(!sender.checked);
	}
}