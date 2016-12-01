/// <reference path="MindFusion.Diagramming-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var ColumnStyle = MindFusion.Diagramming.ColumnStyle;
var Alignment = MindFusion.Diagramming.Alignment;
var Rect = MindFusion.Drawing.Rect;
var Font = MindFusion.Drawing.Font;
var GlassEffect = MindFusion.Diagramming.GlassEffect;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	var diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());
	diagram.setLinkHeadShapeSize(2);

	diagram.setShapeBrush("LightGray");

	// create first table
	var table1 = diagram.getFactory().createTableNode(20, 20, 42, 42);
	table1.redimTable(2, 6);
	table1.getColumn(1).columnStyle = ColumnStyle.AutoWidth;
	table1.setText("Table 1");
	table1.setCaptionBackBrush("gray");
	table1.setCaptionFont(
		new Font("sans-serif", 3, true /*bold*/, true /*italic*/));

	var cell = table1.getCell(0, 0);
	cell.columnSpan = 2;
	cell.setText("Heading 1");
	cell.setTextAlignment(Alignment.Center);
	cell.setBrush("lightGray");

	var cell = table1.getCell(0, 3);
	cell.columnSpan = 2;
	cell.setText("Heading 2");
	cell.setTextAlignment(Alignment.Center);
	cell.setBrush("lightGray");

	var cell = table1.getCell(0, 1);
	cell.rowSpan = 2;
	cell.setImageLocation("icon1.png");

	var cell = table1.getCell(0, 4);
	cell.rowSpan = 2;
	cell.setImageLocation("icon2.png");

	for (var i = 1; i <= 4; i++)
	{
		var row = i <= 2 ? i : i + 1;
		var cell = table1.getCell(1, row);
		cell.setText("item " + i);
		cell.setTextAlignment(Alignment.Far);
	}

	// create second table
	var table2 = diagram.getFactory().createTableNode(120, 36, 55, 30);
	table2.redimTable(3, 4);
	table2.getColumn(2).columnStyle = ColumnStyle.AutoWidth;
	table2.setText("Table 2");
	table2.setCaptionBackBrush("black");
	table2.setTextColor("white");

	var cell = table2.getCell(1, 0);
	cell.rowSpan = 3;
	cell.columnSpan = 2;
	cell.setImageLocation("icon3.png");

	for (var i = 0; i < 4; i++)
	{
		var cell = table2.getCell(0, i);
		cell.setText("row " + i);
		cell.setTextColor("blue");
	}
	var colors = ["red", "green", "blue"];
	for (var i = 0; i < 3; i++)
	{
		var cell = table2.getCell(i, 3);
		cell.setText("col " + i);
		cell.setTextColor("black");
		cell.setBrush(colors[i]);
	}

	// draw link from "item 1" in first table to "row 0" in second table
	var link = diagram.getFactory().createDiagramLink(table1, table2);
	link.setOriginIndex(1);
	link.setDestinationIndex(0);
});