/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Inheritance
{
	import Diagram = MindFusion.Diagramming.Diagram;

	import DiagramItem = MindFusion.Diagramming.DiagramItem;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import DiagramNode = MindFusion.Diagramming.DiagramNode;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import TableNode = MindFusion.Diagramming.TableNode;
	import ContainerNode = MindFusion.Diagramming.ContainerNode;
	import FreeFormNode = MindFusion.Diagramming.FreeFormNode;
	import SvgNode = MindFusion.Diagramming.SvgNode;

	import Alignment = MindFusion.Diagramming.Alignment;
	import ColumnStyle = MindFusion.Diagramming.ColumnStyle;
	//import ScrollBar = MindFusion.Diagramming.ScrollBar;
	import Rect = MindFusion.Drawing.Rect;
	import Font = MindFusion.Drawing.Font;
	import TreeLayout = MindFusion.Graphs.TreeLayout;

	$(document).ready(function ()
	{
		//TableNode.prototype.useScrollBars = true;
		//ScrollBar.prototype.background = "#e0e9e9";
		//ScrollBar.prototype.foreground = "DarkGray";

		// create a Diagram component that wraps the "diagram" canvas
		var diagram = Diagram.create($("#diagram")[0]);

		createClassDiagram(diagram,
			[
				"DiagramItem",
				"DiagramLink",
				"DiagramNode",
				"ShapeNode",
				"TableNode",
				"ContainerNode",
				"FreeFormNode",
				"SvgNode"
			]);
	});

	function createClassDiagram(diagram, classes)
	{
		var classConstructors = [];

		// create a table node for each class
		for (var i = 0; i < classes.length; i++)
		{
			var className = classes[i];
			var node = diagram.getFactory().createTableNode(20, 20, 42, 42);
			node.redimTable(1, 0);
			node.setText(className);
			node.setBrush("white");
			node.setCaptionBackBrush("#c0c0c0");
			node.setCaptionFont(
				new Font("sans-serif", 3, true /*bold*/, true /*italic*/));
			node.setScrollable(true);

			var ctor = eval(`MindFusion.Diagramming.${className}`);
			for (var property in ctor.prototype)
			{
				node.addRow();
				node.getCell(0, node.rows.length - 1).setText(property);
			}
			classConstructors.push(ctor);
			ctor.classNode = node;
		}

		// create a diagram link for each prototype inheritance
		classConstructors.forEach(function (ctor)
		{
			var base = getBaseType(ctor);
			if (base && base.classNode)
			{
				var link = diagram.factory.createDiagramLink(
					base.classNode,
					ctor.classNode);
				link.setHeadShape(null);
				link.setBaseShape("Triangle");
				link.setBaseShapeSize(3);

			}
		});

		// arrange as a tree
		var treeLayout = new TreeLayout();
		treeLayout.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;
		diagram.arrange(treeLayout);
	}

	function getBaseType(ctor)
	{
		// if class registered using MindFusion.registerClass
		if (ctor.__baseType)
			return ctor.__baseType;

		// if  prototypical inheritance with Child.prototype = new Parent()
		if (ctor.prototype && ctor.prototype.constructor != ctor)
			return ctor.prototype.constructor;

		return null;
	}
}