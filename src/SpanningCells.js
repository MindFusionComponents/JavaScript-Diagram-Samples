/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var ColumnStyle = MindFusion.Diagramming.ColumnStyle;
var Alignment = MindFusion.Diagramming.Alignment;
var Rect = MindFusion.Drawing.Rect;
var Font = MindFusion.Drawing.Font;
var GlassEffect = MindFusion.Diagramming.GlassEffect;
var Style = MindFusion.Diagramming.Style;

document.addEventListener("DOMContentLoaded", function () {
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;
	diagram.linkHeadShapeSize = 2;

	var shapeNodeStyle = new Style();
	shapeNodeStyle.brush = { type: 'SolidBrush', color: '#e0e9e9' };
	shapeNodeStyle.stroke = "#7F7F7F";
	shapeNodeStyle.fontName = "Verdana";
	shapeNodeStyle.fontSize = 3;
	shapeNodeStyle.backBrush = "#e0e9e9";
	shapeNodeStyle.nodeEffects = [new GlassEffect()];

	diagram.style = shapeNodeStyle;

	// create first table
	var table1 = diagram.factory.createTableNode(20, 20, 62, 42);
	table1.redimTable(2, 6);
	table1.getColumn(1).columnStyle = ColumnStyle.AutoWidth;
	table1.text = "Preparation";
	table1.captionBackBrush = "#9caac6";
	table1.captionFont = new Font("sans-serif", 3, true /*bold*/, true /*italic*/);

	var cell = table1.getCell(0, 0);
	cell.columnSpan = 2;
	cell.text = "Calculate Price";
	cell.textAlignment = Alignment.Center;
	cell.textColor = "#2d3956";
	cell.brush = "#9caac6";

	var cell = table1.getCell(0, 3);
	cell.columnSpan = 2;
	cell.text = "Print Papers";
	cell.textAlignment = Alignment.Center;
	cell.textColor = "#2d3956";
	cell.brush = "#9caac6";

	var cell = table1.getCell(0, 1);
	cell.rowSpan = 2;
	cell.imageLocation = "icon_calculator.png";

	var cell = table1.getCell(0, 4);
	cell.rowSpan = 2;
	cell.imageLocation = "icon_print.png";

	var preparation_tasks = ["Distance", "Cargo Weight", "Invoice", "Track Number"];

	for (var i = 1; i <= 4; i++) {
		var row = i <= 2 ? i : i + 1;
		var cell = table1.getCell(1, row);
		cell.text = preparation_tasks[i - 1];
		cell.textAlignment = Alignment.Far;
	}


	// create second table
	var table2 = diagram.factory.createTableNode(120, 36, 55, 30);
	table2.redimTable(3, 4);
	table2.getColumn(2).columnStyle = ColumnStyle.AutoWidth;
	table2.text = "Spedition";
	table2.captionBackBrush = "black";
	table2.captionFont = new Font("Verdana", 4, true, false);
	table2.textColor = "white";

	var cell = table2.getCell(1, 0);
	cell.rowSpan = 3;
	cell.columnSpan = 2;
	cell.imageLocation = "icon_delivery.png";

	var delivery_tasks = ["route", "fuel", "driver_id", ""];
	for (var i = 0; i < 4; i++) {
		var cell = table2.getCell(0, i);
		cell.text = delivery_tasks[i];
		cell.textColor = "#003466";
	}
	var colors = ["#000063", "#ce0000", "#5a79a5"];
	for (var i = 1; i < 4; i++) {
		var cell = table2.getCell(i - 1, 3);
		cell.text = "District " + i;
		cell.textColor = "#e0e9e9";
		cell.brush = colors[i - 1];
	}


	// create third table
	var table3 = diagram.factory.createTableNode(25, 80, 75, 30);
	table3.redimTable(4, 4);
	table3.getColumn(4).columnStyle = ColumnStyle.AutoWidth;
	table3.text = "Delivery";
	table3.captionBackBrush = "#ce0000";
	table3.captionFont = new Font("Verdana", 4, false, true);
	table3.textColor = "#e0e9e9";

	var cell = table3.getCell(0, 0);
	cell.columnSpan = 2;
	cell.text = "Destination";
	cell.font = new Font("Verdana", 3, true, false);
	cell.textAlignment = Alignment.Center;
	cell.textColor = "#000063";
	cell.brush = "#c0c0c0";

	var cell = table3.getCell(0, 1);
	cell.rowSpan = 3;
	cell.imageLocation = "icon_home.png";

	var delivery_tasks = ["address", "to door", ""];
	for (var i = 1; i < 3; i++) {
		var cell = table3.getCell(1, i);
		cell.text = delivery_tasks[i - 1];
		cell.textColor = "#003466";

		if (i == 2)
			cell.rowSpan = 2;
	}

	var cell = table3.getCell(2, 0);
	cell.columnSpan = 2;
	cell.text = "Arrival";
	cell.font = new Font("Verdana", 3, true, false);
	cell.textAlignment = Alignment.Center;
	cell.textColor = "#e0e9e9";
	cell.brush = "#003466";

	var cell = table3.getCell(2, 1);
	cell.rowSpan = 3;
	cell.brush = "#9caac6";
	cell.imageLocation = "icon_time.png";

	var delivery_tasks = ["time", "receiver", "charges"];
	for (var i = 1; i < 4; i++) {
		var cell = table3.getCell(3, i);
		cell.text = delivery_tasks[i - 1];
		cell.textColor = "#003466";
		cell.brush = "#9caac6";
	}
	// draw link from "item 1" in first table to "row 0" in second table
	var link = diagram.factory.createDiagramLink(table1, table2);
	link.originIndex = 1;
	link.destinationIndex = 0;

	var link = diagram.factory.createDiagramLink(table2, table3);
	link.originIndex = 2;
	link.dynamic = true;
	link.destinationIndex = 1;
});