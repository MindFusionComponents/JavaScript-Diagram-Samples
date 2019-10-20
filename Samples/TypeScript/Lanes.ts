/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace Lanes
{
	import Events = MindFusion.Diagramming.Events;
	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramLink = MindFusion.Diagramming.DiagramLink;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import AnchorPattern = MindFusion.Diagramming.AnchorPattern;
	import AnchorPoint = MindFusion.Diagramming.AnchorPoint;
	import MarkStyle = MindFusion.Diagramming.MarkStyle;
	import Style = MindFusion.Diagramming.Style;
	import Theme = MindFusion.Diagramming.Theme;
	import LinkShape = MindFusion.Diagramming.LinkShape;
	import Shape = MindFusion.Diagramming.Shape;
	import LaneGrid = MindFusion.Diagramming.Lanes.Grid;
	import LaneHeader = MindFusion.Diagramming.Lanes.Header;
	import Rect = MindFusion.Drawing.Rect;
	import Point = MindFusion.Drawing.Point;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;

	var diagram: Diagram;
	var pattern: AnchorPattern;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);
		diagram.getNodeEffects().push(new GlassEffect());

		// register event handlers
		diagram.addEventListener(Events.nodeCreated, onNodeCreated);
		diagram.addEventListener(Events.nodeModified, onNodeModified);
		diagram.addEventListener(Events.linkCreated, onLinkCreated);

		let header : LaneHeader;
		let subheader : LaneHeader;
		let grid = diagram.getLaneGrid();

		grid.setMinHeaderSize(8);
		grid.setHookHeaders(false);
		grid.setHeadersOnTop(false);
		grid.setColumnHeadersHeights([8, 8]);

		for (let i = 1; i <= 8; i++)
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

		for (let i = 1; i <= 6; i++)
		{
			header = new LaneHeader();
			header.setTitle("Task " + i.toString());
			grid.addRowHeader(header);
		}

		let count = 8 * 7;
		for (let i = 0; i < count; i++)
		{
			let column = grid.getColumn(i);

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
		for (let i = 0; i < count; i++)
		{
			let row = grid.getRow(i);

			if (i === 0)
				grid.get(null, row).getStyle().setTopBorderPen('transparent');
			else
				grid.get(null, row).getStyle().setTopBorderPen('gray');

			if (i !== count - 1)
				grid.get(null, row).getStyle().setBottomBorderPen('transparent');
		}

		diagram.setShowLaneGrid(true);

		// Ensure the document is big enough to contain the grid
		let margin = 5;
		let width = grid.getColumnHeaderBounds().right() + 2 * margin;
		let height = grid.getRowHeaderBounds().bottom() + 2 * margin;

		diagram.setBounds(new Rect(0, 0, width, height));
		diagram.setAlignToGrid(false);

		grid.setLeftMargin(margin);
		grid.setTopMargin(margin);

		pattern = new AnchorPattern(
			[
				new AnchorPoint(100, 50, false, true, MarkStyle.None),
				new AnchorPoint(0, 0, true, false, MarkStyle.None)
			]);

		let style = new Style();
		style.setBrush('black');
		let theme = new Theme();
		theme.styles["std:DiagramLink"] = style;
		diagram.setTheme(theme);

		diagram.setLinkShape(LinkShape.Cascading);
		diagram.setLinkHeadShape(Shape.fromId('Triangle'));
		diagram.setLinkHeadShapeSize(2);
		diagram.setRoundedLinks(true);
		diagram.setRoundedLinksRadius(1);

		let defaultStyle = grid.getStyle();
		defaultStyle.setFontName("Lucida Sans Unicode");
		defaultStyle.setFontSize(3.5);
	});

	function onNodeCreated(sender: Diagram, e: MindFusion.Diagramming.NodeEventArgs)
	{
		e.getNode().setAnchorPattern(pattern);

		// Place the box within the grid
		let bounds = e.getNode().getBounds();
		let topLeft = new Point(bounds.x, bounds.y);

		let grid = diagram.getLaneGrid();

		let cellBoundsReciever: any = { cellBounds: Rect.empty };
		if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
			return;
		let cellBounds = cellBoundsReciever.cellBounds;

		let pixel = 1;

		bounds.y = cellBounds.y + pixel;
		bounds.height = cellBounds.height - 2 * pixel;
		e.getNode().setBounds(bounds);
	}

	function onNodeModified(sender: Diagram, e: MindFusion.Diagramming.NodeEventArgs)
	{
		// Place the box within the grid
		let bounds = e.getNode().getBounds();
		let topLeft = new Point(bounds.x, bounds.y + bounds.height / 2);

		let grid = diagram.getLaneGrid();

		let cellBoundsReciever: any = { cellBounds: Rect.empty };
		if (!grid.getCellFromPoint(topLeft, cellBoundsReciever))
			return;
		let cellBounds = cellBoundsReciever.cellBounds;

		let pixel = 1;

		bounds.y = cellBounds.y + pixel;
		bounds.height = cellBounds.height - 2 * pixel;
		e.getNode().setBounds(bounds);

		// Fix links
		for (let i = 0; i < e.getNode().getIncomingLinks().length; i++)
			fixArrow(e.getNode().getIncomingLinks()[i]);
		for (let i = 0; i < e.getNode().getOutgoingLinks().length; i++)
			fixArrow(e.getNode().getOutgoingLinks()[i]);
	}

	function onLinkCreated(sender: Diagram, e: MindFusion.Diagramming.LinkEventArgs)
	{
		fixArrow(e.getLink());
	}

	function fixArrow(a)
	{
		let originBounds = a.getOrigin().getBounds();
		let destBounds = a.getDestination().getBounds();

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
}