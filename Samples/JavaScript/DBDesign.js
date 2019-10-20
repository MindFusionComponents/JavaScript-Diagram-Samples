/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var TableNode = MindFusion.Diagramming.TableNode;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var Behavior = MindFusion.Diagramming.Behavior;
var Events = MindFusion.Diagramming.Events;
var Font =  MindFusion.Drawing.Font;
var Theme = MindFusion.Diagramming.Theme;
var Style = MindFusion.Diagramming.Style;
var ColumnStyle = MindFusion.Diagramming.ColumnStyle;
var ConnectionStyle = MindFusion.Diagramming.ConnectionStyle;
var ArrayList = MindFusion.Collections.ArrayList;
var AbstractionLayer = MindFusion.AbstractionLayer;


var diagram;
var tableCount = 0, rowClicked = -1;
var tblClicked = null, currentLink = null;
var addRowDialog = null, addRowForm = null, addRowName = null, addRowType = null;
var editRowDialog = null, editRowForm = null, editRowName = null, editRowType = null;
var renameTableDialog = null, renameTableForm = null, renameTableCaption = null;
var infoDialog = null, infoText = null;
var btnAddRow, btnEditRow, btnDeleteRow, btnRenameTable, btnInfo;

$(document).ready(function () {
	// create a Diagram component that wraps the "diagram" canvas
	diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

	// set some Diagram properties.
	diagram.setBehavior(Behavior.LinkTables);
	diagram.setAllowSelfLoops(false);
	diagram.setBackBrush('#F0F0F0');
	diagram.setLinkHeadShape('Triangle');
	diagram.setLinkHeadShapeSize(4);
	diagram.getSelection().allowMultipleSelection = false;
    diagram.setLinkShape(MindFusion.Diagramming.LinkShape.Cascading);
    diagram.setRouteLinks(true);
	//diagram.setAllowInplaceEdit(true);

	// set the Diagram style.
	var theme = new Theme();

	var tableNodeStyle = new Style();
	tableNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: 'rgb(224, 233, 233)', color2: 'rgb(102, 154, 204)', angle: 30 });
	tableNodeStyle.setTextColor({ type: 'SolidBrush', color: 'rgb(45, 57, 86)' });
	tableNodeStyle.setStroke('rgb(192, 192, 192)');

	var linkStyle = new Style();
	linkStyle.setBrush({ type: 'SolidBrush', color: 'rgb(0, 52, 102)' });
	linkStyle.setStroke('rgb(192, 192, 192)');

	theme.styles['std:TableNode'] = tableNodeStyle;
	theme.styles['std:DiagramLink'] = linkStyle;

	diagram.setTheme(theme);


	// Set diagram event listeners
	diagram.addEventListener(Events.nodeCreated, function (sender, args) {
		var table = args.getNode();

		if (table) {
			table.setText("Table" + tableCount++);
			table.setCaptionFont(new Font("sans-serif", 3, true, false, false));
			table.redimTable(2, 0);
			
			table.setScrollable(true);
			table.setConnectionStyle(ConnectionStyle.Rows);

			// set the first column to resize with the table
			table.getColumn(0).columnStyle = ColumnStyle.AutoWidth;

			generateSQL();
		}
	});

	diagram.addEventListener(Events.clicked, function (sender, args) {
		rowClicked = -1;
		tblClicked = null;

		$('#btnEditRow').button().val("Edit row");
		$('#btnDeleteRow').button().val("Delete row");
	});

	diagram.addEventListener(Events.nodeClicked, function (sender, args) {
		rowClicked = -1;
		tblClicked = args.getNode();
		if (tblClicked) {
			var cellClicked = tblClicked.cellFromPoint(args.getMousePosition());
			if (cellClicked) {
				rowClicked = cellClicked.row;
				$('#btnEditRow').button().val("Edit row " + rowClicked);
				$('#btnDeleteRow').button().val("Delete row " + rowClicked);
			}
		}
	});

	diagram.addEventListener(Events.nodeDoubleClicked, function (sender, args) {
		if (tblClicked != args.getNode()) {
			tblClicked = args.getNode();
		}

		if (tblClicked) {
			var cellClicked = tblClicked.cellFromPoint(args.getMousePosition());
			if (cellClicked) {
				rowClicked = cellClicked.row;
				editRowOpen();
			}
			else if (tblClicked.hitTestManipulators(args.getMousePosition()) == null) {
				if (args.getMousePosition().y <= tblClicked.getBounds().y + tblClicked.getCaptionHeight())
					renameTableOpen();
				else
					addRowOpen();
			}
		}
	});

	diagram.addEventListener(Events.linkDoubleClicked, function (sender, args) {
		infoOpen();
	});

	diagram.addEventListener(Events.nodeSelected, function (sender, args) {
		$('#btnAddRow').button("option", "disabled", false);
		$('#btnEditRow').button("option", "disabled", false);
		$('#btnDeleteRow').button("option", "disabled", false);
		$('#btnRenameTable').button("option", "disabled", false);
		$('#btnDeleteTable').button("option", "disabled", false);
	});

	diagram.addEventListener(Events.nodeDeselected, function (sender, args) {
		$('#btnAddRow').button("option", "disabled", true);
		$('#btnEditRow').button("option", "disabled", true);
		$('#btnDeleteRow').button("option", "disabled", true);
		$('#btnRenameTable').button("option", "disabled", true);
		$('#btnDeleteTable').button("option", "disabled", true);
	});

	diagram.addEventListener(Events.linkSelected, function (sender, args) {
		$('#btnInfo').button("option", "disabled", false);
	});

	diagram.addEventListener(Events.linkDeselected, function (sender, args) {
		$('#btnInfo').button("option", "disabled", true);
	});

	// Prepare popup dialogs
	addRowDialog = $("#addRow-dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 'auto',
		width: 250,
		modal: false,
		buttons: {
			"OK": addRow,
			Cancel: function () {
				addRowDialog.dialog("close");
			}
		},
		close: function () {
			addRowType.val("NUMBER");
			addRowType.selectmenu("refresh");
			addRowForm[0].reset();
		}
	});
	addRowForm = addRowDialog.find("form").on("submit", function (event) {
		event.preventDefault();
		addRow();
	});
	addRowName = $("#addRow-fieldName");
	addRowType = $("#addRow-fieldType");

	editRowDialog = $("#editRow-dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 'auto',
		width: 250,
		modal: false,
		buttons: {
			"OK": editRow,
			Cancel: function () {
				editRowDialog.dialog("close");
			}
		},
		close: function () {
			editRowForm[0].reset();
		}
	});
	editRowForm = editRowDialog.find("form").on("submit", function (event) {
		event.preventDefault();
		editRow();
	});
	editRowName = $("#editRow-fieldName");
	editRowType = $("#editRow-fieldType");

	renameTableDialog = $("#renameTable-dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 'auto',
		width: 250,
		modal: false,
		buttons: {
			"OK": renameTable,
			Cancel: function () {
				renameTableDialog.dialog("close");
			}
		},
		close: function () {
			renameTableForm[0].reset();
		}
	});
	renameTableForm = renameTableDialog.find("form").on("submit", function (event) {
		event.preventDefault();
		renameTable();
	});
	renameTableCaption = $("#renameTableCaption");

	infoDialog = $("#info-dialog").dialog({
		autoOpen: false,
		resizable: false,
		height: 'auto',
		width: 250,
		modal: true,
		buttons: {
			"OK": function () { infoDialog.dialog("close"); }
		}
	});
	infoText = infoDialog.find("p");

	// Prepare buttons
	$('#btnAddRow').button("option", "disabled", true).click(function (event) { addRowOpen(); });
	$('#btnEditRow').button("option", "disabled", true).click(function (event) { editRowOpen(); });
	$('#btnDeleteRow').button("option", "disabled", true).click(function (event) { deleteRow(); });
	$('#btnRenameTable').button("option", "disabled", true).click(function (event) { renameTableOpen(); });
	$('#btnDeleteTable').button("option", "disabled", true).click(function (event) { deleteTable(); });
	$('#btnCreateTable').button().click(function (event) { createTable(); });
	$('#btnInfo').button("option", "disabled", true).click(function (event) { infoOpen(); });
});

function addRowOpen() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table))
		return;

	addRowDialog.dialog("open");
}

function addRow() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table))
		return;

	table.addRow();

	var lastRow = table.cells.rows - 1;

	// use the cell indexer to access cells by their column and row
	table.getCell(0, lastRow).setText(addRowName[0].value);
	table.getCell(1, lastRow).setText(addRowType[0].value);

	// close the dialog
	addRowDialog.dialog("close");

	// refresh SQL definition
	generateSQL();
}

function editRowOpen() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table) || rowClicked < 0)
		return;

	editRowName.val(table.getCell(0, rowClicked).getText());
	editRowType.val(table.getCell(1, rowClicked).getText());
	editRowType.selectmenu("refresh");

	editRowDialog.dialog("open");
}

function editRow() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table) || rowClicked < 0)
		return;

	// use the cell indexer to access cells by their column and row
	table.getCell(0, rowClicked).setText(editRowName[0].value);
	table.getCell(1, rowClicked).setText(editRowType[0].value);

	// close the dialog
	editRowDialog.dialog("close");

	// refresh SQL definition
	generateSQL();
}

function deleteRow() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table) || rowClicked < 0)
		return;

	table.deleteRow(rowClicked);

	rowClicked = -1;
	$('#btnEditRow').button().val("Edit row");
	$('#btnDeleteRow').button().val("Delete row");

	// refresh SQL definition
	generateSQL();
}

function createTable() {
	// create a new table with the specified extent
	var table = diagram.getFactory().createTableNode(
				15 + tableCount * 3, 15 + tableCount * 4, 50, 60);
	table.setText("Table" + tableCount++);
	table.redimTable(2, 0);
	table.setScrollable(true);
	table.setConnectionStyle(ConnectionStyle.Rows);

	// set the first column to resize with the table
	table.getColumn(0).columnStyle = ColumnStyle.AutoWidth;

	generateSQL();
}

function deleteTable() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table))
		return;

	diagram.removeItem(table);

	rowClicked = -1;
	$('#btnEditRow').button().val("Edit row");
	$('#btnDeleteRow').button().val("Delete row");

	// refresh SQL definition
	generateSQL();
}

function renameTableOpen() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table))
		return;

	renameTableCaption.val(table.getText());

	renameTableDialog.dialog("open");
}

function renameTable() {
	var table = tblClicked || diagram.getActiveItem();

	if (!table || !AbstractionLayer.isInstanceOfType(TableNode, table))
		return;

	table.setText(renameTableCaption[0].value);

	// close the dialog
	renameTableDialog.dialog("close");

	// refresh SQL definition
	generateSQL();
}

function infoOpen() {
	var link = diagram.getActiveItem();

	if (!link || !AbstractionLayer.isInstanceOfType(DiagramLink, link))
		return;

	var dest = link.getDestination();
	var orgn = link.getOrigin();
	infoText[0].innerHTML = "Linking \ntable " + orgn.getText() + ", row " +
		link.getOriginIndex() + " to\n table " + dest.getText() +
		", row " + link.getDestinationIndex();

	infoDialog.dialog("open");
}

function generateSQL() {
	var text = '';

	// enumerate all tables in the current diagram
	ArrayList.forEach(diagram.nodes, function (table) {
		text += "CREATE TABLE " + table.getText() + "\r\n(";

		// enumerate all rows of a table
		for (var r = 0; r < table.cells.rows; ++r) {
			// get text of cells in current row
			text += "\t" + table.getCell(0, r).getText() + " " + table.getCell(1, r).getText();
			if (r < table.cells.rows - 1)
				text += ",\r\n";
		}
		text += "\r\n);\r\n\r\n";
	});
	$('#generatedSql')[0].innerHTML = text;
}