/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace SpanningCells
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import ColumnStyle = MindFusion.Diagramming.ColumnStyle;
	import Alignment = MindFusion.Diagramming.Alignment;
	import Rect = MindFusion.Drawing.Rect;
	import Font = MindFusion.Drawing.Font;
	import GlassEffect = MindFusion.Diagramming.GlassEffect;
	import Style = MindFusion.Diagramming.Style;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		var diagram: Diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]) as Diagram;
		diagram.setLinkHeadShapeSize(2);

		var shapeNodeStyle = new Style();
		shapeNodeStyle.setBrush({ type: 'SolidBrush', color: '#e0e9e9' });
		shapeNodeStyle.setStroke("#7F7F7F");
		//  shapeNodeStyle.setTextColor("#e0e9e9");
		shapeNodeStyle.setFontName("Verdana");
		shapeNodeStyle.setFontSize(3);
		shapeNodeStyle.setBackBrush("#e0e9e9");
		shapeNodeStyle.setNodeEffects([new GlassEffect()]);

		diagram.setStyle(shapeNodeStyle);

		// create first table
		var table1 = diagram.getFactory().createTableNode(20, 20, 62, 42);
		table1.redimTable(2, 6);
		table1.getColumn(1).columnStyle = ColumnStyle.AutoWidth;
		table1.setText("Preparation");
		table1.setCaptionBackBrush("#9caac6");
		table1.setCaptionFont(
			new Font("sans-serif", 3, true /*bold*/, true /*italic*/, false /*underline*/));

		var cell = table1.getCell(0, 0);
		cell.setColumnSpan(2);
		cell.setText("Calculate Price");
		cell.setTextAlignment(Alignment.Center);
		cell.setTextColor("#2d3956");
		cell.setBrush("#9caac6");

		var cell = table1.getCell(0, 3);
		cell.setColumnSpan(2);
		cell.setText("Print Papers");
		cell.setTextAlignment(Alignment.Center);
		cell.setTextColor("#2d3956");
		cell.setBrush("#9caac6");

		var cell = table1.getCell(0, 1);
		cell.setRowSpan(2);
		cell.setImageLocation("icon_calculator.png");

		var cell = table1.getCell(0, 4);
		cell.setRowSpan(2);
		cell.setImageLocation("icon_print.png");

		var preparation_tasks = ["Distance", "Cargo Weight", "Invoice", "Track Number"];

		for (var i = 1; i <= 4; i++)
		{
			var row = i <= 2 ? i : i + 1;
			var cell = table1.getCell(1, row);
			cell.setText(preparation_tasks[i - 1]);
			cell.setTextAlignment(Alignment.Far);
		}


		// create second table
		var table2 = diagram.getFactory().createTableNode(120, 36, 55, 30);
		table2.redimTable(3, 4);
		table2.getColumn(2).columnStyle = ColumnStyle.AutoWidth;
		table2.setText("Spedition");
		table2.setCaptionBackBrush("black");
		table2.setCaptionFont(
			new Font("Verdana", 4, true, false));
		table2.setTextColor("white");

		var cell = table2.getCell(1, 0);
		cell.setRowSpan(3);
		cell.setColumnSpan(2);
		cell.setImageLocation("icon_delivery.png");

		var delivery_tasks = ["route", "fuel", "driver_id", ""];
		for (var i = 0; i < 4; i++)
		{
			var cell = table2.getCell(0, i);
			cell.setText(delivery_tasks[i]);
			cell.setTextColor("#003466");
		}
		var colors = ["#000063", "#ce0000", "#5a79a5"];
		for (var i = 1; i < 4; i++)
		{
			var cell = table2.getCell(i - 1, 3);
			cell.setText("District " + i);
			cell.setTextColor("#e0e9e9");
			cell.setBrush(colors[i - 1]);
		}


		// create third table
		var table3 = diagram.getFactory().createTableNode(25, 80, 75, 30);
		table3.redimTable(4, 4);
		table3.getColumn(4).columnStyle = ColumnStyle.AutoWidth;
		table3.setText("Delivery");
		table3.setCaptionBackBrush("#ce0000");
		table3.setCaptionFont(
			new Font("Verdana", 4, false, true));
		table3.setTextColor("#e0e9e9");

		var cell = table3.getCell(0, 0);
		cell.setColumnSpan(2);
		cell.setText("Destination");
		cell.setFont(
			new Font("Verdana", 3, true, false));
		cell.setTextAlignment(Alignment.Center);
		cell.setTextColor("#000063");
		cell.setBrush("#c0c0c0");

		var cell = table3.getCell(0, 1);
		cell.setRowSpan(3);
		cell.setImageLocation("icon_home.png");

		var delivery_tasks = ["address", "to door", ""];
		for (var i = 1; i < 3; i++)
		{
			var cell = table3.getCell(1, i);
			cell.setText(delivery_tasks[i - 1]);
			cell.setTextColor("#003466");

			if (i == 2)
				cell.setRowSpan(2);
		}

		var cell = table3.getCell(2, 0);
		cell.setColumnSpan(2);
		cell.setText("Arrival");
		cell.setFont(
			new Font("Verdana", 3, true, false));
		cell.setTextAlignment(Alignment.Center);
		cell.setTextColor("#e0e9e9");
		cell.setBrush("#003466");

		var cell = table3.getCell(2, 1);
		cell.setRowSpan(3);
		cell.setBrush("#9caac6");
		cell.setImageLocation("icon_time.png");

		var delivery_tasks = ["time", "receiver", "charges"];
		for (var i = 1; i < 4; i++)
		{
			var cell = table3.getCell(3, i);
			cell.setText(delivery_tasks[i - 1]);
			cell.setTextColor("#003466");
			cell.setBrush("#9caac6");
		}
		// draw link from "item 1" in first table to "row 0" in second table
		var link = diagram.getFactory().createDiagramLink(table1, table2);
		link.setOriginIndex(1);
		link.setDestinationIndex(0);

		var link = diagram.getFactory().createDiagramLink(table2, table3);
		link.setOriginIndex(2);
		link.setDynamic(true);
		link.setDestinationIndex(1);
	});
}