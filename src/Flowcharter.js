/// <reference path="JsDiagram-vsdoc.js" />

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

document.addEventListener("DOMContentLoaded", function () {
	if (localStorage) {
		// load saved diagram ids from local storage
		if (!localStorage.getItem('fc'))
			localStorage.setItem('fc', JSON.stringify(flowcharter_fc));
		if (!localStorage.getItem('sample'))
			localStorage.setItem('sample', JSON.stringify(flowcharter_sample));
		listFileNames = document.getElementById('listFileNames');
		for (var i = 0; i < localStorage.length; i++) {
			var id = localStorage.key(i);
			var opt = document.createElement('option');
			opt.value = i;
			opt.innerHTML = id;
			listFileNames.appendChild(opt);
		}
	}
	else {
		document.getElementById('tbFileName').disabled = true;
		document.getElementById('btnSave').disabled = true;
		document.getElementById('listFileNames').disabled = true;
		document.getElementById('btnLoad').disabled = true;
		var span = document.createElement("span");
		span.innerHTML = '&nbsp;&nbsp;localStorage is not available under <b>file://</b> protocol.';
		document.getElementById('btnLoad').parentNode.appendChild(span);
	}

	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.allowInplaceEdit = true;

	diagram = diagramView.diagram;
	diagram.routeLinks = true;
	diagram.showGrid = true;
	diagram.undoEnabled = true;
	diagram.roundedLinks = true;

	diagram.addEventListener(Events.nodeCreated, onNodeCreated);
	diagram.addEventListener(Events.linkCreating, onLinkCreated);
	diagram.addEventListener(Events.nodeSelected, onNodeSelected);
	diagram.addEventListener(Events.nodeDeselected, onNodeSelected);

	// create an Overview component that wraps the "overview" canvas
	overview = Overview.create(document.getElementById("overview"));
	overview.diagramView = diagramView;

	// create an NodeListView component that wraps the "nodeList" canvas
	nodeList = NodeListView.create(document.getElementById('nodeList'));

	for (var shapeId in Shape.shapes) {
		// skip some arrowhead shapes that aren't that useful as node shapes
		var shape = Shape.shapes[shapeId];
		if (!shape.params.outline) continue;
		if (shapeId == "RevWithCirc") continue;
		if (shapeId == "DoubleArrow") continue;
		if (shapeId == "CenteredCircle") continue;

		var node = new MindFusion.Diagramming.ShapeNode(diagram);
		node.shape = shapeId;
		nodeList.addNode(node, shapeId);
	}

	nodeList.addEventListener(Events.nodeSelected, onShapeSelected);

	onLoaded();
});

function onShapeSelected(sender, e) {
	var selectedNode = e.node;
	if (selectedNode)
		diagram.defaultShape = selectedNode.shape;
}

function onLoaded() {

	// Create a sample diagram
	var start = diagram.factory.createShapeNode(new Rect(60, 8, 32, 16));
	start.shape = 'Terminator';
	start.text = "Start";

	var choice = diagram.factory.createShapeNode(new Rect(60, 36, 32, 16));
	choice.shape = 'Decision';
	choice.text = "Choice";

	var input = diagram.factory.createShapeNode(new Rect(108, 36, 32, 16));
	input.shape = 'Save';
	input.text = "Data input";

	var user = diagram.factory.createShapeNode(new Rect(136, 36, 16, 16));
	user.shape = 'Actor';

	var process = diagram.factory.createShapeNode(new Rect(60, 64, 32, 16));
	process.shape = 'Procedure';
	process.text = "Predefined process/routing";

	var document1 = diagram.factory.createShapeNode(new Rect(8, 64, 16, 16));
	document1.shape = 'Document';
	document1.text = "Document";

	var document2 = diagram.factory.createShapeNode(new Rect(32, 64, 16, 16));
	document2.shape = 'Document';
	document2.text = "Document";

	var multiDocument = diagram.factory.createShapeNode(new Rect(8, 92, 16, 16));
	multiDocument.shape = 'MultiDocument';
	multiDocument.text = "Multiple documents";

	var database = diagram.factory.createShapeNode(new Rect(32, 92, 16, 16));
	database.shape = 'Database';
	database.text = "Database";

	var procedure = diagram.factory.createShapeNode(new Rect(60, 92, 32, 16));
	procedure.text = "Alternative procedure";

	var delay = diagram.factory.createShapeNode(new Rect(108, 92, 32, 16));
	delay.shape = 'Delay';
	delay.text = "Delay";

	var end = diagram.factory.createShapeNode(new Rect(60, 120, 32, 16));
	end.shape = 'Terminator';
	end.text = "End";

	anchorPattern = new AnchorPattern([
		new AnchorPoint(50, 0, true, false, MarkStyle.Custom, "#ff0000", 1.5),
		new AnchorPoint(0, 50, false, true, MarkStyle.Custom, "#008000", 1.5),
		new AnchorPoint(100, 50, false, true, MarkStyle.Custom, "#008000", 1.5),
		new AnchorPoint(50, 100, false, true, MarkStyle.Custom, "#008000", 1.5)
	]);

	for (var i = 0; i < diagram.nodes.length; i++)
		diagram.nodes[i].anchorPattern = anchorPattern;

	diagram.factory.createDiagramLink(start, choice);
	diagram.factory.createDiagramLink(choice, process);
	diagram.factory.createDiagramLink(choice, input);
	diagram.factory.createDiagramLink(choice, document1);
	diagram.factory.createDiagramLink(choice, document2);
	var link = diagram.factory.createDiagramLink(document1, multiDocument);
	link.originAnchor = 3;
	link.destinationAnchor = 0;
	link = diagram.factory.createDiagramLink(document2, database);
	link.originAnchor = 3;
	link.destinationAnchor = 0;
	diagram.factory.createDiagramLink(process, procedure);
	diagram.factory.createDiagramLink(procedure, delay);
	diagram.factory.createDiagramLink(procedure, end);

	for (var i = 0; i < diagram.links.length; i++) {
		var link = diagram.links[i];
		link.headShape = "Triangle";
		link.headShapeSize = 3;
	}

	var theme = new Theme();
	var shapeNodeStyle = new Style();
	shapeNodeStyle.brush = { type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#9caac6', angle: 90 };
	shapeNodeStyle.stroke = "#7F7F7F";
	shapeNodeStyle.textColor = "#585A5C";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 3;
	theme.styles.set("std:ShapeNode", shapeNodeStyle);
	var linkStyle = new Style();
	linkStyle.stroke = "#7F7F7F";
	linkStyle.textColor = "#585A5C";
	linkStyle.fontName = "Verdana";
	linkStyle.fontSize = 3;
	theme.styles.set("std:DiagramLink", linkStyle);
	var tableStyle = new Style();
	tableStyle.brush = { type: 'LinearGradientBrush', color1: '#FCFCFC', color2: '#9DABB4', angle: 90 };
	tableStyle.stroke = "#7F7F7F";
	tableStyle.textColor = "#585A5C";
	tableStyle.fontName = "Verdana";
	tableStyle.fontSize = 3;
	theme.styles.set("std:TableNode", tableStyle);
	diagram.theme = nodeList.theme = theme;

	diagram.addEventListener(Events.drawAnchorPoint, (sender, args) => {
		var context = args.context;
		var p = args.location;
		context.fillStyle = args.anchorPattern.points[args.anchorIndex].color;
		context.strokeStyle = '#7F7F7F';
		context.fillRect(p.x - 1, p.y - 1, 2, 2);
	});
	
	diagram.routeAllLinks();
}

function onNodeCreated(sender, args) {
	var node = args.node;
	node.brush = null; // Reset brush
	node.anchorPattern = anchorPattern;
	node.handlesStyle = HandlesStyle.HatchHandles3;
}

function onLinkCreated(sender, args) {
	var link = args.link;
	link.headShape = "Triangle";
	link.headShapeSize = 3;
}

function onNodeSelected(sender, args) {
	var node;
	if (diagram.selection.nodes.length > 0)
		node = diagram.selection.nodes[0];
	if (node) {
		var style = node.style;
		if (style.fontName)
			document.getElementById('fontName').value = style.fontName;
		else
			document.getElementById('fontName').value = 'Verdana';
		if (style.fontSize)
			document.getElementById('fontSize').value = style.fontSize;
		else
			document.getElementById('fontSize').value = '3';
	}
	else {
		document.getElementById('fontName').value = 'Verdana';
		document.getElementById('fontSize').value = '3';
	}
}

function onUndo() {
	diagram.undo();
}

function onRedo() {
	diagram.redo();
}

function onDelete() {
	diagram.startCompositeOperation();
	for (var i = diagram.selection.items.length - 1; i >= 0; i--) {
		diagram.removeItem(diagram.selection.items[i]);
	}
	diagram.commitCompositeOperation();
}

function onZoomIn() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.zoomFactor = Math.min(800, view.zoomFactor + 10);
}

function onZoomOut() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.zoomFactor = Math.max(10, view.zoomFactor - 10);
}

function onResetZoom() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.zoomFactor = 100;
}


document.getElementById('fontName').addEventListener("change", function () {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.style;
		style.fontName = this.value;
		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
});

document.getElementById('fontSize').addEventListener("change", function () {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.style;
		style.fontSize = this.value;
		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
});

function onBold() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.style;
		if (style.fontStyle === undefined) {
			style.fontStyle = FontStyle.Bold;
		}
		else if ((style.fontStyle & FontStyle.Bold) != FontStyle.Bold) {
			style.fontStyle = style.fontStyle | FontStyle.Bold;
		}
		else {
			style.fontStyle = style.fontStyle & ~FontStyle.Bold;
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onItalic() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.style;
		if (style.fontStyle === undefined) {
			style.fontStyle = FontStyle.Italic;
		}
		else if ((style.fontStyle & FontStyle.Italic) != FontStyle.Italic) {
			style.fontStyle = style.fontStyle | FontStyle.Italic;
		}
		else {
			style.fontStyle = style.fontStyle & ~FontStyle.Italic;
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onUnderlined() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);

		var style = item.style;
		if (style.fontStyle === undefined) {
			style.fontStyle = FontStyle.Underline;
		}
		else if ((style.fontStyle & FontStyle.Underline) != FontStyle.Underline) {
			style.fontStyle = style.fontStyle | FontStyle.Underline;
		}
		else {
			style.fontStyle = style.fontStyle & ~FontStyle.Underline;
		}

		item.invalidate();

		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onLeft() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.textAlignment = Alignment.Near;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onCenter() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.textAlignment = Alignment.Center;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onRight() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.textAlignment = Alignment.Far;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onTop() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.lineAlignment = Alignment.Near;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onMiddle() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.lineAlignment = Alignment.Center;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onBottom() {
	diagram.startCompositeOperation();
	for (var i = 0; i < diagram.selection.items.length; i++) {
		var item = diagram.selection.items[i];
		var change = new ChangeItemCommand(diagram, item);
		item.lineAlignment = Alignment.Far;
		diagram.executeCommand(change);
	}
	diagram.commitCompositeOperation();
}

function onLinkShapes() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.behavior = Behavior.LinkShapes;
}

function onLinkTables() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.behavior = Behavior.LinkTables;
}

function onModify() {
	var view = MindFusion.Diagramming.DiagramView.find("diagram");
	view.behavior = Behavior.Modify;
}

function onSaveClick() {
	if (!localStorage)
		return;
	var name = (document.getElementById('tbFileName')).value;
	if (localStorage.getItem(name))
		localStorage.removeItem(name);

	localStorage.setItem(name, diagram.toJson());

	var nameExists = false;
	for (i = 0; i < listFileNames.length; ++i) {
		if (listFileNames.options[i].innerText == name) {
			nameExists = true; break;
		}
	}

	if (!nameExists) {
		var opt = document.createElement('option');
		opt.value = listFileNames.options.length;
		opt.innerHTML = name;
		listFileNames.appendChild(opt);
	}
}

function onLoadClick() {
	if (!localStorage)
		return;
	var s = document.getElementById('listFileNames')
	var name = s.options[s.selectedIndex].text;
	var json = localStorage.getItem(name);
	if (json) {
		diagram.fromJson(json);
	}
}