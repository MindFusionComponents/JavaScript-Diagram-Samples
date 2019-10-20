/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Events = MindFusion.Diagramming.Events;
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
var LaneGrid = MindFusion.Diagramming.Lanes.Grid;
var LaneHeader = MindFusion.Diagramming.Lanes.Header;
var Rect = MindFusion.Drawing.Rect;
var Point = MindFusion.Drawing.Point;
var GlassEffect = MindFusion.Diagramming.GlassEffect;


$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = Diagram.create($("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());

	// register event handlers
	diagram.addEventListener(Events.nodeCreated, onNodeCreated);
	diagram.addEventListener(Events.nodeModified, onNodeModified);
	diagram.addEventListener(Events.linkCreated, onLinkCreated);

	var header;
	var subheader;
	var grid = diagram.getLaneGrid();

	grid.setMinHeaderSize(8);
	grid.setHookHeaders(false);
	grid.setHeadersOnTop(false);
	grid.setColumnHeadersHeights([8, 8]);

	for (var i = 1; i <= 8; i++)
	{
		header = new LaneHeader();
		header.setTitle("Week " + i.toString() + ", 2017");
		grid.addColumnHeader(header);

		subheader = new LaneHeader();
		subheader.setTitle("S");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("M");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("T");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("W");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("T");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("F");
		grid.addColumnHeader(subheader, header);
		subheader = new LaneHeader();
		subheader.setTitle("S");
		grid.addColumnHeader(subheader, header);
	}

	for (var i = 1; i <= 6; i++)
	{
		header = new LaneHeader();
		header.setTitle("Task " + i.toString());
		grid.addRowHeader(header);
	}

	var count = 8 * 7;
	for (var i = 0; i < count; i++)
	{
		var column = grid.getColumn(i);

		if (i % 7 !== 0)
			grid.get(column, null).getStyle().setLeftBorderPen('transparent');
		else
			grid.get(column, null).getStyle().setLeftBorderPen('gray');

		if (i !== count - 1)
			grid.get(column, null).getStyle().setRightBorderPen('transparent');

		if (i % 7 === 0 || i % 7 === 6)
		    grid.get(column, null).getStyle().setBackgroundBrush('#9caac6');
	}

	count = 6;
	for (var i = 0; i < count; i++)
	{
		var row = grid.getRow(i);

		if (i === 0)
			grid.get(null, row).getStyle().setTopBorderPen('transparent');
		else
			grid.get(null, row).getStyle().setTopBorderPen('gray');

		if (i !== count - 1)
			grid.get(null, row).getStyle().setBottomBorderPen('transparent');
	}

	diagram.setShowLaneGrid(true);

	// Ensure the document is big enough to contain the grid
	var margin = 5;
	var width = grid.getColumnHeaderBounds().right() + 2 * margin;
	var height = grid.getRowHeaderBounds().bottom() + 2 * margin;

	diagram.setBounds(new Rect(0, 0, width, height));
	diagram.setAlignToGrid(false);

	grid.setLeftMargin(margin);
	grid.setTopMargin(margin);

	pattern = new AnchorPattern(
		[
			new AnchorPoint(100, 50, false, true, MarkStyle.None),
			new AnchorPoint(0, 0, true, false, MarkStyle.None)
		]);

	var style = new Style();
	style.setBrush('black');
	var theme = new Theme();
	theme.styles["std:DiagramLink"] = style;
	diagram.setTheme(theme);

	diagram.setLinkShape(LinkShape.Cascading);
	diagram.setLinkHeadShape(Shape.fromId('Triangle'));
	diagram.setLinkHeadShapeSize(2);
	diagram.setRoundedLinks(true);
	diagram.setRoundedLinksRadius(1);

	var defaultStyle = grid.getStyle();
	defaultStyle.setFontName("Lucida Sans Unicode");
	defaultStyle.setFontSize(3.5);
});

function onNodeCreated(sender, e)
{
	e.getNode().setAnchorPattern(pattern);

	// Place the box within the grid
	var bounds = e.getNode().getBounds();
	var topLeft = new Point(bounds.x, bounds.y);

	var diagram = Diagram.find("diagram");
	var grid = diagram.getLaneGrid();

	var cellBoundsReciever = {};
	if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
		return;
	var cellBounds = cellBoundsReciever.cellBounds;

	var pixel = 1;

	bounds.y = cellBounds.y + pixel;
	bounds.height = cellBounds.height - 2 * pixel;
	e.getNode().setBounds(bounds);
}

function onNodeModified(sender, e)
{
	// Place the box within the grid
	var bounds = e.getNode().getBounds();
	var topLeft = new Point(bounds.x, bounds.y + bounds.height / 2);

	var diagram = Diagram.find("diagram");
	var grid = diagram.getLaneGrid();

	var cellBounds = Rect.empty;
	var cellBoundsReciever = {};
	if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
		return;
	var cellBounds = cellBoundsReciever.cellBounds;

	var pixel = 1;

	bounds.y = cellBounds.y + pixel;
	bounds.height = cellBounds.height - 2 * pixel;
	e.getNode().setBounds(bounds);

	// Fix links
	for (var i = 0; i < e.getNode().getIncomingLinks().length; i++)
		fixArrow(e.getNode().getIncomingLinks()[i]);
	for (var i = 0; i < e.getNode().getOutgoingLinks().length; i++)
		fixArrow(e.getNode().getOutgoingLinks()[i]);
}

function onLinkCreated(sender, e)
{
	fixArrow(e.getLink());
}

function fixArrow (a)
{
	var originBounds = a.getOrigin().getBounds();
	var destBounds = a.getDestination().getBounds();

	if (originBounds.right() < destBounds.left())
	{
		a.setPoints([
			new Point(originBounds.right(), originBounds.y + originBounds.height / 2),
			new Point(destBounds.x, originBounds.y + originBounds.height / 2),
			new Point(destBounds.x, destBounds.y)
		]);
	}
	else
	{
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
