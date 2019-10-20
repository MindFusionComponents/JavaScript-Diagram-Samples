/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var Shape = MindFusion.Diagramming.Shape;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

var Rect = MindFusion.Drawing.Rect;
var TreeLayout = MindFusion.Graphs.TreeLayout;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	var diagram = Diagram.create($("#diagram")[0]);
	diagram.setLinkHeadShapeSize(2);

	diagram.setShapeBrush("#c0c0c0");
	diagram.getNodeEffects().push(new GlassEffect());

	var i = 0;
	var size = 20;
	var perLine = 8;

	// enum all predefined shapes
	var shapes = Shape.shapes;
	for (var shapeId in shapes)
	{
		// skip some arrowhead shapes that aren't that useful as node shapes
		var shape = shapes[shapeId];
		if (!shape.params.outline) continue;
		if (shapeId == "RevWithCirc") continue;
		if (shapeId == "DoubleArrow") continue;
		if (shapeId == "CenteredCircle") continue;

		// create a node with this shape
		var node = new ShapeNode(diagram);
		node.setText(shapeId);
		node.setShape(Shape.fromId(shapeId));
		node.setPen("Black");
		node.setBounds(new Rect(
			(i % perLine) * (size + 10) + 8,
			Math.floor(i / perLine) * (size + 20) + 8,
			size, size));
		node.onUpdateVisuals = textBelowNode;
		node.getRepaintBounds = textBelowNodeBounds;
		node.setLineAlignment(MindFusion.Diagramming.Alignment.Near);

		var text = node.getText();
		if (text.match("^Bpmn") ||
			text.match("^External") ||
			text.match("^Message") ||
			text.match("^Microform") ||
			text.match("^Offpage"))
		{
			text = text.replace(/([A-Z])/g, "\n$1");
			text = text.substring(1);
			node.setText(text);
		}

		diagram.addItem(node);

		i = i + 1;
	}

	diagram.resizeToFitItems(10);
});

function textBelowNode(node)
{
	var bounds = node.getBounds().clone();
	bounds.y = bounds.bottom();
	node.text.setBounds(bounds);
}

function textBelowNodeBounds()
{
	var bounds = ShapeNode.prototype.getRepaintBounds.apply(this, []);
	bounds.height += 10;
	return bounds;
}