/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />
namespace TreeMap
{
	import AbstractionLayer = MindFusion.AbstractionLayer;

	import Diagram = MindFusion.Diagramming.Diagram;
	import DiagramNode = MindFusion.Diagramming.DiagramNode;
	import Events = MindFusion.Diagramming.Events;
	import Behavior = MindFusion.Diagramming.Behavior;
	import ContainerNode = MindFusion.Diagramming.ContainerNode;
	import ShapeNode = MindFusion.Diagramming.ShapeNode;
	import Shape = MindFusion.Diagramming.Shape;

	import Rect = MindFusion.Drawing.Rect;
	import Point = MindFusion.Drawing.Point;

	import TreeMapLayout = MindFusion.Graphs.TreeMapLayout;

	var diagram: Diagram = null;
	var scale;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

		diagram.setBehavior(Behavior.Modify);

		diagram.setDefaultShape(Shape.fromId('Rectangle'));
		//diagram.setContainersFoldable(false);
		//diagram.setContainerCaptionHeight(6);
		diagram.setBounds(new Rect(0, 0, 250, 195));

		diagram.addEventListener(Events.nodeCreated, function (sender, e)
		{
			var node = e.getNode();
			if (node.setFoldable)
			{
				node.setFoldable(false);
				node.setCaptionHeight(6);
			}
		});

		diagram.addEventListener(Events.controlLoaded, function (sender) { sender.zoomToFit(); });

		scale = ['rgb(224, 233, 233)', 'rgb(97, 106, 127)', 'rgb(206, 0, 0)'];

		createTreeMap();

		($("#ddlWeight") as any).selectmenu({ change: createTreeMap });
		($("#ddlColor") as any).selectmenu({ change: createTreeMap });
	});

	function createTreeMap()
	{
		diagram.clearAll();

		$.ajax({
			type: "GET",
			url: "Data.xml",
			dataType: "xml",
			success: function (xml)
			{
				var $xml = $(xml);
				let cnt = 0;

				$xml.find('continent').each(function ()
				{
					var continent = this;
					var container = diagram.getFactory().createContainerNode(0, 0, 10, 10);
					container.setTag([parseFloat(continent.attributes["area"].value), parseFloat(continent.attributes["population"].value)]);
					container.setText(continent.attributes["name"].value);
					container.setId(cnt++);
					$(continent).find('country').each(function ()
					{
						var country = this;
						var shape = diagram.getFactory().createShapeNode(new Rect(0, 0, 10, 10));
						var area = parseFloat(country.attributes["area"].value);
						var population = parseFloat(country.attributes["population"].value)
						shape.setTag([area, population]);
						shape.setText(country.attributes["name"].value);
						shape.setId(cnt++);

						var areaQuantifier = "million sq. km.";
						if (area < 1)
						{
							area *= 1000;
							areaQuantifier = "thousand sq. km.";
						}
						var populationQuantifier = "billions";
						if (population < 1)
						{
							population *= 1000;
							populationQuantifier = "millions";
						}

						shape.setTooltip(shape.getText() + "<br />Area: ~" + area + " " + areaQuantifier + "<br />Population: ~" + population + " " + populationQuantifier);

						container.add(shape);
					});
				});

				assignWeights();
				assignColors();
				arrangeDiagram();
			}
		});
	}

	function assignWeights()
	{
		for (var i = 0; i < diagram.getNodes().length; i++)
		{
			var node = diagram.getNodes()[i];
			// Ignore containers and container captions
			if (AbstractionLayer.isInstanceOfType(ContainerNode, node) || node.getLocked())
				continue;

			if (AbstractionLayer.isInstanceOfType(ShapeNode, node))
			{
				var values = node.getTag();
				if (values == null)
					continue;

				if ($('#ddlWeight').find(":selected").text() == "Area")
					node.setWeight(values[0]);
				else if ($('#ddlWeight').find(":selected").text() == "Population")
					node.setWeight(values[1]);
			}
		}
	}

	function assignColors()
	{
		var largestArea: { [id: number]: number; } = {};
		var largestPopulation: { [id: number]: number; } = {};
		for (var i = 0; i < diagram.getNodes().length; i++)
		{
			let node = diagram.getNodes()[i] as ContainerNode;
			if (!node.getChildren)
				continue;
			if (AbstractionLayer.isInstanceOfType(ContainerNode, node))
			{
				var area = 0.0;
				var population = 0.0;
				for (var j = 0; j < node.getChildren().length; j++)
				{
					var child = node.getChildren()[j];
					var values = child.getTag();
					if (values == null)
						continue;

					area = Math.max(area, values[0]);
					population = Math.max(population, values[1]);
				}

				largestArea[node.getId()] =  area;
				largestPopulation[node.getId()] =  population;
			}
		}

		for (var i = 0; i < diagram.getNodes().length; i++)
		{
			let node = diagram.getNodes()[i];
			// Ignore containers and container captions
			if (AbstractionLayer.isInstanceOfType(ContainerNode, node) || node.getLocked())
				continue;

			if (AbstractionLayer.isInstanceOfType(ShapeNode, node))
			{
				var values = node.getTag();
				if (values == null)
					continue;

				var value = 0;
				var total = 0;
				if ($('#ddlColor').find(":selected").text() == "Area")
				{
					value = values[0];
					total = largestArea[node.getContainer().getId()];
				}
				else if ($('#ddlColor').find(":selected").text() == "Population")
				{
					value = values[1];
					total = largestPopulation[node.getContainer().getId()]
				}
				node.setBrush(getScaleColor(value, total));
			}
		}
	}

	function getScaleColor(value, total)
	{
		var factor = value / total;
		if (factor < 0)
			factor = 0;
		if (factor > 1)
			factor = 1;

		var step = 1.0 / (scale.length - 1);
		var start = scale[Math.floor(factor / step)];
		var end = scale[Math.min(scale.length - 1, Math.floor(factor / step) + 1)];

		var factorBase = factor - factor % step;

		start = start.substring(4, start.length - 1)
			.replace(/ /g, '')
			.split(',');
		end = end.substring(4, end.length - 1)
			.replace(/ /g, '')
			.split(',');

		return 'rgb(' +
            (+start[0] + Math.floor(((factor - factorBase) * (end[0] - start[0]) / step))).toString() + "," +
            (+start[1] + Math.floor(((factor - factorBase) * (end[1] - start[1]) / step))).toString() + "," +
            (+start[2] + Math.floor(((factor - factorBase) * (end[2] - start[2]) / step))).toString() + ")";
	}

	function arrangeDiagram()
	{
		var layout = new TreeMapLayout();
		layout.padding = 0;
		layout.containerPadding = 1;
		layout.layoutArea = new Rect(0, 0, 250, 195);
		diagram.arrange(layout);
		diagram.resizeToFitItems(5);

		// Remove the text of smaller nodes
		for (var i = 0; i < diagram.getNodes().length; i++)
		{
			var node = diagram.getNodes()[i];
			if (!AbstractionLayer.isInstanceOfType(ShapeNode, node) || node.getLocked())
				continue;

			if (node.getBounds().width < 10 || node.getBounds().height < 10)
				node.setText("");
		}

		// Resize caption nodes
		for (var i = 0; i < diagram.getNodes().length; i++)
		{
			var node = diagram.getNodes()[i];
			if (node.getLocked() && node.getMasterNode())
			{
				var bounds = node.getBounds();
				bounds.width = node.getMasterNode().getBounds().width;
				bounds.height = Math.min(30, node.getMasterNode().getBounds().height);
				node.setBounds(bounds);
			}
		}

		zoom();
	}

	function zoom()
	{
		diagram.setZoomFactor(100);
		var cb = diagram.getContentBounds();
		var tl = diagram.docToClient(new Point(cb.top(), cb.left()));
		var rc = new Rect(tl.x, tl.y, cb.width, cb.height);

		var ctrlWidth = diagram.getBounds().width;
		var ctrlHeight = diagram.getBounds().height;
		var cntWidth = rc.width;
		var cntHeight = rc.height;

		if (ctrlWidth > 0 && ctrlHeight > 0 && cntWidth > 0 && cntHeight > 0)
		{
			var rx = cntWidth / ctrlWidth;
			var ry = cntHeight / ctrlHeight;
			var ratio = Math.max(rx, ry);

			diagram.setScrollX(rc.x);
			diagram.setScrollY(rc.y);

			var newZoom = 100.0 / ratio;
			if (newZoom > 10)
				newZoom -= 2;

			diagram.setZoomFactor(newZoom);
		}
	}
}