/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;

var DiagramItem = MindFusion.Diagramming.DiagramItem;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var DiagramNode = MindFusion.Diagramming.DiagramNode;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var TableNode = MindFusion.Diagramming.TableNode;
var ContainerNode = MindFusion.Diagramming.ContainerNode;
var FreeFormNode = MindFusion.Diagramming.FreeFormNode;
var SvgNode = MindFusion.Diagramming.SvgNode;

var Alignment = MindFusion.Diagramming.Alignment;
var ColumnStyle = MindFusion.Diagramming.ColumnStyle;
var ScrollBar = MindFusion.Diagramming.ScrollBar;
var Rect = MindFusion.Drawing.Rect;
var Font = MindFusion.Drawing.Font;
var TreeLayout = MindFusion.Graphs.TreeLayout;

$(document).ready(function ()
{
	TableNode.prototype.useScrollBars = true;
	ScrollBar.prototype.background = "#e0e9e9";
	ScrollBar.prototype.foreground = "DarkGray";

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

        var ctor = eval(className);
		for (var property in ctor.prototype)
		{
			node.addRow();
			node.getCell(0, node.rows.length - 1).setText(property);
		}
		classConstructors.push(ctor);
		ctor.classNode = node;
    }
	
	// create a diagram link for each prototype inheritance
	classConstructors.forEach(function(ctor)
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