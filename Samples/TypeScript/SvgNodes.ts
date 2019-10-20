/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace SvgNodes
{
	import Events = MindFusion.Diagramming.Events;
	import Diagram = MindFusion.Diagramming.Diagram;
	import Behavior = MindFusion.Diagramming.Behavior;
	import AutoResize = MindFusion.Diagramming.AutoResize;
	import SvgContent = MindFusion.Diagramming.SvgContent;
	import Rect = MindFusion.Drawing.Rect;

	var diagram : Diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);

		diagram.setBehavior(Behavior.Modify);
		diagram.setAutoResize(AutoResize.None);
		diagram.setBounds(new Rect(0, 0, 135, 135));
		diagram.setBackgroundImageUrl("parking.png");

		addNode(new Rect(55, 5, 25, 25), "sign.svg", true);
		addNode(new Rect(105, 85, 25, 25), "car1.svg");
		addNode(new Rect(10, 85, 25, 25), "car2.svg");
		addNode(new Rect(105, 45, 25, 25), "car3.svg");
		addNode(new Rect(10, 65, 25, 25), "car5.svg");
		addNode(new Rect(10, 20, 25, 25), "car6.svg");
		addNode(new Rect(105, 105, 25, 25), "car7.svg");
	});

	function addNode(bounds, filename, locked = false)
	{
		var node = diagram.getFactory().createSvgNode(bounds.x, bounds.y, bounds.width, bounds.height);
		node.setTransparent(true);
		node.setLocked(locked);
		var content = new SvgContent();
		content.parse(filename);
		node.setContent(content);
	}

	export function addNodeClick()
	{
		var index = Math.floor((Math.random() * 7) + 1);
		addNode(new Rect(55, 30, 25, 25), "car" + index + ".svg");
	}

	export function resetClick()
	{
		diagram.clearAll();
		addNode(new Rect(55, 5, 25, 25), "sign.svg", true);
	}
}