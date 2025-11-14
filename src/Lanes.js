/// <reference path="JsDiagram-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;
var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;
var LinkShape = MindFusion.Diagramming.LinkShape;
var Shape = MindFusion.Diagramming.Shape;
var LaneHeader = MindFusion.Diagramming.Lanes.Header;
var Rect = MindFusion.Drawing.Rect;
var Point = MindFusion.Drawing.Point;
var GlassEffect = MindFusion.Diagramming.GlassEffect;


document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.nodeEffects.push(new GlassEffect());

	// register event handlers
	diagram.addEventListener(Events.nodeCreated, onNodeCreated);
	diagram.addEventListener(Events.nodeModified, onNodeModified);
	diagram.addEventListener(Events.linkCreated, onLinkCreated);

	var header;
	var subheader;
	var grid = diagram.laneGrid;

	grid.minHeaderSize = (8);
	grid.hookHeaders = (false);
	grid.headersOnTop = (false);
	grid.columnHeadersHeights = ([8, 8]);

	for (var i = 1; i <= 8; i++) {
		header = new LaneHeader();
		header.title = ("Week " + i.toString() + ", 2017");
		grid.addColumnHeader(header);

		subheader = new LaneHeader();
		subheader.title = ("S");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("M");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("T");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("W");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("T");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("F");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.title = ("S");
		grid.addColumnHeader(subheader, header);
	}

	for (var i = 1; i <= 6; i++) {
		header = new LaneHeader();
		header.title = ("Task " + i.toString());
		grid.addRowHeader(header);
	}

	var count = 8 * 7;
	for (var i = 0; i < count; i++) {
		var column = grid.getColumn(i);

		if (i % 7 !== 0)
			grid.get(column, null).style.leftBorderPen = 'transparent';
		else
			grid.get(column, null).style.leftBorderPen = 'gray';

		if (i !== count - 1)
			grid.get(column, null).style.rightBorderPen = 'transparent';

		if (i % 7 === 0 || i % 7 === 6)
			grid.get(column, null).style.backgroundBrush = '#9caac6';
	}

	count = 6;
	for (var i = 0; i < count; i++) {
		var row = grid.getRow(i);

		if (i === 0)
			grid.get(null, row).style.topBorderPen = 'transparent';
		else
			grid.get(null, row).style.topBorderPen = 'gray';

		if (i !== count - 1)
			grid.get(null, row).style.bottomBorderPen = 'transparent';
	}

	diagram.showLaneGrid = (true);

	// Ensure the document is big enough to contain the grid
	var margin = 5;
	var width = grid.columnHeaderBounds.right() + 2 * margin;
	var height = grid.rowHeaderBounds.bottom() + 2 * margin;

	diagram.bounds = (new Rect(0, 0, width, height));
	diagram.alignToGrid = (false);

	grid.leftMargin = (margin);
	grid.topMargin = (margin);

	pattern = new AnchorPattern(
		[
			new AnchorPoint(100, 50, false, true, MarkStyle.None),
			new AnchorPoint(0, 0, true, false, MarkStyle.None)
		]);

	var style = new Style();
	style.brush = 'black';
	var theme = new Theme();
	theme.styles["std:DiagramLink"] = style;
	diagram.theme = theme;

	diagram.linkShape = LinkShape.Cascading;
	diagram.linkHeadShape = Shape.fromId('Triangle');
	diagram.linkHeadShapeSize = 2;
	diagram.roundedLinks = true;
	diagram.roundedLinksRadius = 1;

	var defaultStyle = grid.style;
	defaultStyle.fontName = "Lucida Sans Unicode";
	defaultStyle.fontSize = 3.5;
});

function onNodeCreated(sender, e) {
	e.node.anchorPattern = (pattern);

	// Place the box within the grid
	var bounds = e.node.bounds;
	var topLeft = new Point(bounds.x, bounds.y);

	var diagram = DiagramView.find("diagram").diagram;
	var grid = diagram.laneGrid;

	var cellBoundsReciever = {};
	if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
		return;
	var cellBounds = cellBoundsReciever.cellBounds;

	var pixel = 1;

	bounds.y = cellBounds.y + pixel;
	bounds.height = cellBounds.height - 2 * pixel;
	e.node.bounds = (bounds);

	e.node.constraints.minHeight = bounds.height;
	e.node.constraints.maxHeight = bounds.height;
	e.node.constraints.moveDirection = MindFusion.Diagramming.DirectionConstraint.Horizontal;
}

function onNodeModified(sender, e) {
	// Place the box within the grid
	var bounds = e.node.bounds;
	var topLeft = new Point(bounds.x, bounds.y + bounds.height / 2);

	var diagram = DiagramView.find("diagram").diagram;
	var grid = diagram.laneGrid;

	var cellBounds = Rect.empty;
	var cellBoundsReciever = {};
	if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
		return;
	var cellBounds = cellBoundsReciever.cellBounds;

	var pixel = 1;

	bounds.y = cellBounds.y + pixel;
	bounds.height = cellBounds.height - 2 * pixel;
	e.node.bounds = (bounds);

	// Fix links
	for (var i = 0; i < e.node.incomingLinks.length; i++)
		fixArrow(e.node.incomingLinks[i]);
	for (var i = 0; i < e.node.outgoingLinks.length; i++)
		fixArrow(e.node.outgoingLinks[i]);
}

function onLinkCreated(sender, e) {
	fixArrow(e.link);
}

function fixArrow(a) {
	var originBounds = a.origin.bounds;
	var destBounds = a.destination.bounds;

	if (originBounds.right() < destBounds.left()) {
		a.setPoints([
			new Point(originBounds.right(), originBounds.y + originBounds.height / 2),
			new Point(destBounds.x, originBounds.y + originBounds.height / 2),
			new Point(destBounds.x, destBounds.y)
		]);
	}
	else {
		a.setPoints([
			new Point(originBounds.right(), originBounds.y + originBounds.height / 2),
			new Point(originBounds.right() + 2, originBounds.y + originBounds.height / 2),
			new Point(originBounds.right() + 2, originBounds.y + originBounds.height / 2 + 4),
			new Point(destBounds.x, originBounds.y + originBounds.height / 2 + 4),
			new Point(destBounds.x, destBounds.y)
		]);
	}
}

var pattern;
