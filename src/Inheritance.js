/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
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

document.addEventListener("DOMContentLoaded", function () {
	TableNode.prototype.useScrollBars = true;
	ScrollBar.prototype.background = "#e0e9e9";
	ScrollBar.prototype.foreground = "DarkGray";

	// create a DiagramView component that wraps the "diagram" canvas
	var diagram = DiagramView.create(document.getElementById("diagram")).diagram;

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

function createClassDiagram(diagram, classes) {
	var classConstructors = [];

	// create a table node for each class
	for (var i = 0; i < classes.length; i++) {
		var className = classes[i];
		var node = diagram.factory.createTableNode(20, 20, 42, 42);
		node.redimTable(1, 0);
		node.text = className;
		node.brush = "white";
		node.captionBackBrush = "#c0c0c0";
		node.captionFont = new Font("sans-serif", 3, true /*bold*/, true /*italic*/);
		node.scrollable = true;

		var ctor = eval(className);

		Object.getOwnPropertyNames(ctor.prototype).forEach(function (property) {
			node.addRow();
			var cell = node.getCell(0, node.rows.length - 1);
			cell.text = property.toString();
		});

		classConstructors.push(ctor);
		ctor.classNode = node;
		ctor.className = className;
	}

	// create a diagram link for each prototype inheritance
	classConstructors.forEach(function (ctor) {
		var base = getBaseType(ctor);
		if (base) {
			var link = diagram.factory.createDiagramLink(
				base.classNode,
				ctor.classNode);
			link.headShape = null;
			link.baseShape = "Triangle";
			link.baseShapeSize = 3;

		}
	});

	// arrange as a tree
	var treeLayout = new TreeLayout();
	treeLayout.linkType = MindFusion.Graphs.TreeLayoutLinkType.Cascading;
	diagram.arrange(treeLayout);
}

function getBaseType(ctor) {
	var baseName = Object.getPrototypeOf(ctor).className;
	if (baseName && baseName != ctor.className) {
		return eval(baseName);
	}
	return null;
}