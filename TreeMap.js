var AbstractionLayer = MindFusion.AbstractionLayer;

var Diagram = MindFusion.Diagramming.Diagram;
var Events = MindFusion.Diagramming.Events;
var Behavior = MindFusion.Diagramming.Behavior;
var ContainerNode = MindFusion.Diagramming.ContainerNode;
var ShapeNode = MindFusion.Diagramming.ShapeNode;

var Rect = MindFusion.Drawing.Rect;

var Dictionary = MindFusion.Collections.Dictionary;

var TreeMapLayout = MindFusion.Graphs.TreeMapLayout;

var diagram, scale;

$(document).ready(function ()
{
	// create a Diagram component that wraps the "diagram" canvas
	diagram = AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

	diagram.setBehavior(Behavior.Modify);

	diagram.setDefaultShape('Rectangle')
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

	scale = ['rgb(32, 195, 0)', 'rgb(255, 255, 0)', 'rgb(255, 128, 0)'];

	createTreeMap();

	$("#ddlWeight").selectmenu({ change: createTreeMap });
	$("#ddlColor").selectmenu({ change: createTreeMap });
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

			$xml.find('continent').each(function ()
			{
				var continent = this;
				var container = diagram.getFactory().createContainerNode(new Rect(0, 0, 10, 10));
				container.setTag([parseFloat(continent.attributes["area"].value), parseFloat(continent.attributes["population"].value)]);
				container.setText(continent.attributes["name"].value);
				$(continent).find('country').each(function ()
				{
					var country = this;
					var shape = diagram.getFactory().createShapeNode(new Rect(0, 0, 10, 10));
					var area = parseFloat(country.attributes["area"].value);
					var population = parseFloat(country.attributes["population"].value)
					shape.setTag([area, population]);
					shape.setText(country.attributes["name"].value);

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
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
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
	var largestArea = new Dictionary();
	var largestPopulation = new Dictionary();
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
		if (AbstractionLayer.isInstanceOfType(ContainerNode, node))
		{
			var area = 0.0;
			var population = 0.0;
			for (var j = 0; j < node.children.length; j++)
			{
				var child = node.children[j];
				var values = child.getTag();
				if (values == null)
					continue;

				area = Math.max(area, values[0]);
				population = Math.max(population, values[1]);
			}

			largestArea.set(node, area);
			largestPopulation.set(node, population);
		}
	}

	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
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
				total = largestArea.get(node.container);
			}
			else if ($('#ddlColor').find(":selected").text() == "Population")
			{
				value = values[1];
				total = largestPopulation.get(node.container);
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
	diagram.resizeToFitItems();

	// Remove the text of smaller nodes
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
		if (!AbstractionLayer.isInstanceOfType(ShapeNode, node) || node.getLocked())
			continue;

		if (node.getBounds().width < 10 || node.getBounds().height < 10)
			node.setText("");
	}

	// Resize caption nodes
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
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
	var tl = diagram.docToClient(cb.topLeft());
	var rc = new Rect(tl.x, tl.y, cb.width, cb.height);

	var ctrlWidth = diagram.bounds.width;
	var ctrlHeight = diagram.bounds.height;
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