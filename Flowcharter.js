var AbstractionLayer = MindFusion.AbstractionLayer;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var DiagramNode = MindFusion.Diagramming.DiagramNode;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;
var FontStyle = MindFusion.Drawing.FontStyle;
var Alignment = MindFusion.Diagramming.Alignment;
var Behavior = MindFusion.Diagramming.Behavior;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var ChangeItemCommand = MindFusion.Diagramming.ChangeItemCommand;
var Events = MindFusion.Diagramming.Events;
var Diagram = MindFusion.Diagramming.Diagram;
var Overview = MindFusion.Diagramming.Overview;
var NodeListView = MindFusion.Diagramming.NodeListView;
var Rect = MindFusion.Drawing.Rect;
var Shape = MindFusion.Diagramming.Shape;

var diagram, overview, nodeList, anchorPattern, listFileNames;

$(document).ready(function ()
{
	if (localStorage)
	{
		// load saved diagram ids from local storage
		if (!localStorage.getItem('fc'))
			localStorage.setItem('fc', JSON.stringify(flowcharter_fc));
		if (!localStorage.getItem('sample'))
			localStorage.setItem('sample', JSON.stringify(flowcharter_sample));
		listFileNames = $('#listFileNames');
		for (var i = 0; i < localStorage.length; i++)
		{
			var id = localStorage.key(i);
			var opt = document.createElement('option');
			opt.value = i;
			opt.innerHTML = id;
			listFileNames[0].appendChild(opt);
		}

		listFileNames.selectmenu("refresh", true);
	}
	else
	{
		$('#tbFileName').prop('disabled', true);
		$('#btnSave').prop('disabled', true);
		$('#listFileNames').prop('disabled', true);
		$('#btnLoad').prop('disabled', true);
		$('#btnLoad').parent().append('<span>&nbsp;&nbsp;localStorage is not available under <b>file://</b> protocol.</span>');
	}

	// create a Diagram component that wraps the "diagram" canvas
	diagram = AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
	diagram.setAllowInplaceEdit(true);
	diagram.setRouteLinks(true);
	diagram.setShowGrid(true);
	diagram.setUndoEnabled(true);
	diagram.setRoundedLinks(true);
	//diagram.setSelectAfterCreate(false);
	//diagram.setShapeHandlesStyle(HandlesStyle.HatchHandles3);

	diagram.addEventListener(Events.nodeCreated, onNodeCreated);
	diagram.addEventListener(Events.linkCreating, onLinkCreated);
	diagram.addEventListener(Events.nodeSelected, onNodeSelected);
	diagram.addEventListener(Events.nodeDeselected, onNodeSelected);

	// create an Overview component that wraps the "overview" canvas
	overview = AbstractionLayer.createControl(Overview,
        null, null, null, $("#overview")[0]);
	overview.setDiagram(diagram);

	// create an NodeListView component that wraps the "nodeList" canvas
	nodeList = AbstractionLayer.createControl(NodeListView, null, null, null, $('#nodeList')[0]);

	for (var shapeId in Shape.shapes)
	{
		// skip some arrowhead shapes that aren't that useful as node shapes
		var shape = Shape.shapes[shapeId];
		if (!shape.params.outline) continue;
		if (shapeId == "RevWithCirc") continue;
		if (shapeId == "DoubleArrow") continue;
		if (shapeId == "CenteredCircle") continue;

		var node = new MindFusion.Diagramming.ShapeNode(diagram);
		node.setShape(shapeId);
		nodeList.addNode(node, shapeId);
	}

	nodeList.addEventListener(Events.nodeSelected, onShapeSelected);

	onLoaded();
});

function onShapeSelected(sender, e)
{
	var selectedNode = e.getNode();
	if (selectedNode)
		diagram.setDefaultShape(selectedNode.getShape());
}

function onLoaded()
{

	// Create a sample diagram
	var start = diagram.getFactory().createShapeNode(new Rect(60, 8, 32, 16));
	start.setShape('Terminator');
	start.setText("Start");

	var choice = diagram.getFactory().createShapeNode(new Rect(60, 36, 32, 16));
	choice.setShape('Decision');
	choice.setText("Choice");

	var input = diagram.getFactory().createShapeNode(new Rect(108, 36, 32, 16));
	input.setShape('Save');
	input.setText("Data input");

	var user = diagram.getFactory().createShapeNode(new Rect(136, 36, 16, 16));
	user.setShape('Actor');

	var process = diagram.getFactory().createShapeNode(new Rect(60, 64, 32, 16));
	process.setShape('Procedure');
	process.setText("Predefined process/routing");

	var document1 = diagram.getFactory().createShapeNode(new Rect(8, 64, 16, 16));
	document1.setShape('Document');
	document1.setText("Document");

	var document2 = diagram.getFactory().createShapeNode(new Rect(32, 64, 16, 16));
	document2.setShape('Document');
	document2.setText("Document");

	var multiDocument = diagram.getFactory().createShapeNode(new Rect(8, 92, 16, 16));
	multiDocument.setShape('MultiDocument');
	multiDocument.setText("Multiple documents");

	var database = diagram.getFactory().createShapeNode(new Rect(32, 92, 16, 16));
	database.setShape('Database');
	database.setText("Database");

	var procedure = diagram.getFactory().createShapeNode(new Rect(60, 92, 32, 16));
	procedure.setText("Alternative procedure");

	var delay = diagram.getFactory().createShapeNode(new Rect(108, 92, 32, 16));
	delay.setShape('Delay');
	delay.setText("Delay");

	var end = diagram.getFactory().createShapeNode(new Rect(60, 120, 32, 16));
	end.setShape('Terminator');
	end.setText("End");

	anchorPattern = new AnchorPattern([
      new AnchorPoint(50, 0, true, false, MarkStyle.Rectangle, "#ff0000", 1.5),
      new AnchorPoint(0, 50, false, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(100, 50, false, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle, "#008000", 1.5)
    ]);

	for (var i = 0; i < diagram.nodes.length; i++)
		diagram.nodes[i].setAnchorPattern(anchorPattern);

	diagram.getFactory().createDiagramLink(start, choice);
	diagram.getFactory().createDiagramLink(choice, process);
	diagram.getFactory().createDiagramLink(choice, input);
	diagram.getFactory().createDiagramLink(choice, document1);
	diagram.getFactory().createDiagramLink(choice, document2);
	var link = diagram.getFactory().createDiagramLink(document1, multiDocument);
	link.setOriginAnchor(3);
	link.setDestinationAnchor(0);
	link = diagram.getFactory().createDiagramLink(document2, database);
	link.setOriginAnchor(3);
	link.setDestinationAnchor(0);
	diagram.getFactory().createDiagramLink(process, procedure);
	diagram.getFactory().createDiagramLink(procedure, delay);
	diagram.getFactory().createDiagramLink(procedure, end);

	for (var i = 0; i < diagram.links.length; i++)
	{
		var link = diagram.links[i];
		link.setHeadShape("Triangle");
		link.setHeadShapeSize(3);
	}

	var theme = new Theme();
	var shapeNodeStyle = new Style();
	shapeNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: '#FCFCFC', color2: '#9DABB4', angle: 90 });
	shapeNodeStyle.setStroke("#7F7F7F");
	shapeNodeStyle.setTextColor("#585A5C");
	shapeNodeStyle.setFontName("Verdana");
	shapeNodeStyle.setFontSize(3);
	theme.styles["std:ShapeNode"] = shapeNodeStyle;
	var linkStyle = new Style();
	linkStyle.setStroke("#7F7F7F");
	linkStyle.setTextColor("#585A5C");
	linkStyle.setFontName("Verdana");
	linkStyle.setFontSize(3);
	theme.styles["std:DiagramLink"] = linkStyle;
	var tableStyle = new Style();
	tableStyle.setBrush({ type: 'LinearGradientBrush', color1: '#FCFCFC', color2: '#9DABB4', angle: 90 });
	tableStyle.setStroke("#7F7F7F");
	tableStyle.setTextColor("#585A5C");
	tableStyle.setFontName("Verdana");
	tableStyle.setFontSize(3);
	theme.styles["std:TableNode"] = tableStyle;
	diagram.setTheme(theme);

	var original = DiagramNode.prototype.createAnchorPointVisual;
	ShapeNode.prototype.createAnchorPointVisual = function (point)
	{
		var result = original.apply(this, [point]);
		result.brush = point.getColor();
		result.pen = '#7F7F7F';
		return result;
	};

	diagram.routeAllLinks();

	for (var i = 0; i < nodeList.items.length; i++)
	{
		nodeList.items[i].setStyle(shapeNodeStyle);
	}
}

function onNodeCreated(sender, args)
{
	var node = args.getNode();
	node.setBrush(); // Reset brush
	node.setAnchorPattern(anchorPattern);
	node.setHandlesStyle(HandlesStyle.HatchHandles3);
}

function onLinkCreated(sender, args)
{
	var link = args.getLink();
	link.setHeadShape("Triangle");
	link.setHeadShapeSize(3);
}

function onNodeSelected(sender, args)
{
	var node;
	if (diagram.getSelection().nodes.length > 0)
		node = diagram.getSelection().nodes[0];
	if (node && node.getStyle() !== undefined)
	{
		var style = node.getStyle();
		if (style.getFontName())
			$('#fontName').val(style.getFontName());
		else
			$('#fontName').val('Verdana');
		if (style.getFontSize())
			$('#fontSize').val(style.getFontSize());
		else
			$('#fontSize').val('3');
		$("#fontName").selectmenu("refresh");
		$("#fontSize").selectmenu("refresh");
	}
	else
	{
		$('#fontName').val('Verdana');
		$('#fontSize').val('3');
		$("#fontName").selectmenu("refresh");
		$("#fontSize").selectmenu("refresh");
	}
}

function onUndo()
{
	diagram.undo();
}

function onRedo()
{
	diagram.redo();
}

function onDelete()
{
	diagram.startCompositeOperation();
	for (var i = diagram.getSelection().items.length - 1; i >= 0; i--)
	{
		diagram.removeItem(diagram.getSelection().items[i]);
	}
	diagram.commitCompositeOperation();
}

function onZoomIn()
{
	diagram.setZoomFactor(Math.min(800, diagram.getZoomFactor() + 10));
}

function onZoomOut()
{
	diagram.setZoomFactor(Math.max(10, diagram.getZoomFactor() - 10));
}

function onResetZoom()
{
	diagram.setZoomFactor(100);
}

$('#fontName').on("selectmenuchange", function ()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.getStyle();
		if (!style)
		{
			style = new Style();
			item.setStyle(style);
		}

		style.setFontName(this.value);
		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
});

$('#fontSize').on("selectmenuchange", function ()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.getStyle();
		if (!style)
		{
			style = new Style();
			item.setStyle(style);
		}

		style.setFontSize(this.value);
		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
});

function onBold()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.getStyle();
		if (!style)
		{
			style = new Style();
			item.setStyle(style);
		}

		if (style.getFontStyle() === undefined)
		{
			style.setFontStyle(FontStyle.Bold);
		}
		else if ((style.getFontStyle() & FontStyle.Bold) != FontStyle.Bold)
		{
			style.setFontStyle(style.getFontStyle() | FontStyle.Bold);
		}
		else
		{
			style.setFontStyle(style.getFontStyle() & ~FontStyle.Bold);
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onItalic()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.getStyle();
		if (!style)
		{
			style = new Style();
			item.setStyle(style);
		}

		if (style.getFontStyle() === undefined)
		{
			style.setFontStyle(FontStyle.Italic);
		}
		else if ((style.getFontStyle() & FontStyle.Italic) != FontStyle.Italic)
		{
			style.setFontStyle(style.getFontStyle() | FontStyle.Italic);
		}
		else
		{
			style.setFontStyle(style.getFontStyle() & ~FontStyle.Italic);
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onUnderlined()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.getStyle();
		if (!style)
		{
			style = new Style();
			item.setStyle(style);
		}

		if (style.getFontStyle() === undefined)
		{
			style.setFontStyle(FontStyle.Underline);
		}
		else if ((style.getFontStyle() & FontStyle.Underline) != FontStyle.Underline)
		{
			style.setFontStyle(style.getFontStyle() | FontStyle.Underline);
		}
		else
		{
			style.setFontStyle(style.getFontStyle() & ~FontStyle.Underline);
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onLeft()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setTextAlignment(Alignment.Near);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onCenter()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setTextAlignment(Alignment.Center);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onRight()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setTextAlignment(Alignment.Far);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onTop()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setLineAlignment(Alignment.Near);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onMiddle()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setLineAlignment(Alignment.Center);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onBottom()
{
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.getSelection().items.length; i++)
	{
		var item = diagram.getSelection().items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.setLineAlignment(Alignment.Far);
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onLinkShapes()
{
	diagram.setBehavior(Behavior.LinkShapes);
}

function onLinkTables()
{
	diagram.setBehavior(Behavior.LinkTables);
}

function onModify()
{
	diagram.setBehavior(Behavior.Modify);
}

function onSaveClick()
{
	if (!localStorage)
		return;
	var name = $('#tbFileName')[0].value;
	if (localStorage.getItem(name))
		localStorage.removeItem(name);

	localStorage.setItem(name, diagram.toJson());

	if (listFileNames.find("option:contains('" + name + "')").length == 0)
	{
		var opt = document.createElement('option');
		opt.value = listFileNames[0].options.length;
		opt.innerHTML = name;
		listFileNames[0].appendChild(opt);
		listFileNames.selectmenu("refresh", true);
	}
}

function onLoadClick()
{
	if (!localStorage)
		return;
	var name = $('#listFileNames').find(":selected").text()
	var json = localStorage.getItem(name);
	if (json)
	{
		diagram.fromJson(json);
	}
}