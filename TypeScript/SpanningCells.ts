/// <reference path="jquery.d.ts" />
/// <reference path="jsdiag.d.ts" />

import Diagram = MindFusion.Diagramming.Diagram;
import ColumnStyle = MindFusion.Diagramming.ColumnStyle;
import Alignment = MindFusion.Diagramming.Alignment;
import TableNode = MindFusion.Diagramming.TableNode;
import DiagramLink = MindFusion.Diagramming.DiagramLink;
import GlassEffect = MindFusion.Diagramming.GlassEffect;

import Rect = MindFusion.Drawing.Rect;
import Font = MindFusion.Drawing.Font;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	var diagram = Diagram.create($("#diagram")[0]);
	diagram.getNodeEffects().push(new GlassEffect());
	diagram.setLinkHeadShapeSize(2);

	diagram.setShapeBrush("LightGray");

	// create first table
    var table1: TableNode = diagram.getFactory().createTableNode(20, 20, 42, 42);
	table1.redimTable(2, 6);
	table1.getColumn(1).columnStyle = ColumnStyle.AutoWidth;
	table1.setText("Table 1");
	table1.setCaptionBackBrush("gray");
	table1.setCaptionFont(
		new Font("sans-serif", 3, true /*bold*/, true /*italic*/, false /*underline*/));

	var cell = table1.getCell(0, 0);
	cell.setColumnSpan(2);
	cell.setText("Heading 1");
	cell.setTextAlignment(Alignment.Center);
	cell.setBrush("lightGray");

	var cell = table1.getCell(0, 3);
    cell.setColumnSpan(2);
	cell.setText("Heading 2");
	cell.setTextAlignment(Alignment.Center);
	cell.setBrush("lightGray");

	var cell = table1.getCell(0, 1);
	cell.setRowSpan(2);
	cell.setImageLocation("icon1.png");

	var cell = table1.getCell(0, 4);
    cell.setRowSpan(2);
	cell.setImageLocation("icon2.png");

	for (var i = 1; i <= 4; i++)
	{
		var row = i <= 2 ? i : i + 1;
		var cell = table1.getCell(1, row);
		cell.setText("item " + i);
		cell.setTextAlignment(Alignment.Far);
	}

	// create second table
	var table2: TableNode = diagram.getFactory().createTableNode(120, 36, 55, 30);
	table2.redimTable(3, 4);
	table2.getColumn(2).columnStyle = ColumnStyle.AutoWidth;
	table2.setText("Table 2");
	table2.setCaptionBackBrush("black");
	table2.setTextColor("white");

	var cell = table2.getCell(1, 0);
	cell.setRowSpan(3);
	cell.setColumnSpan(2);
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
    var link: DiagramLink = diagram.getFactory().createDiagramLink(table1, table2);
	link.setOriginIndex(1);
	link.setDestinationIndex(0);
});