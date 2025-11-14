/// <reference path="JsDiagram-vsdoc.js" />

var Diagram = MindFusion.Diagramming.Diagram;
var Events = MindFusion.Diagramming.Events;
var Behavior = MindFusion.Diagramming.Behavior;
var ContainerNode = MindFusion.Diagramming.ContainerNode;
var ShapeNode = MindFusion.Diagramming.ShapeNode;

var Rect = MindFusion.Drawing.Rect;

var TreeMapLayout = MindFusion.Graphs.TreeMapLayout;

var diagramView, diagram, scale;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));
	diagramView.behavior = Behavior.Modify;
	
	diagram = diagramView.diagram;
	diagram.defaultShape = 'Rectangle';
	diagram.bounds = new Rect(0, 0, 250, 195);

	scale = ['rgb(224, 233, 233)', 'rgb(97, 106, 127)', 'rgb(206, 0, 0)'];

	createTreeMap();

	document.getElementById("ddlWeight").addEventListener("change", createTreeMap);
	document.getElementById("ddlColor").addEventListener("change", createTreeMap);
});

function createTreeMap()
{
		diagram.clearAll();

		// pretend we are calling a web service
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function ()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				var parser = new DOMParser();
				var xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
				var cnt = 0;

				var continents = xmlDoc.getElementsByTagName('continent');
				
				for (var i = 0; i < continents.length; i++)
				{
					var continent = continents[i];
					var container = diagram.factory.createContainerNode(0, 0, 10, 10);
					container.tag = [parseFloat(continent.attributes["area"].value), parseFloat(continent.attributes["population"].value)];
					container.text = continent.attributes["name"].value;
					container.id = cnt++;

					var countries = continent.getElementsByTagName('country');
					for (var k = 0; k < countries.length; k++)
					{
						var country = countries[k];
						var shape = diagram.factory.createShapeNode(new Rect(0, 0, 10, 10));
						var area = parseFloat(country.attributes["area"].value);
						var population = parseFloat(country.attributes["population"].value)
						shape.tag = [area, population];
						shape.text = country.attributes["name"].value;
						shape.id = cnt++;

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

						shape.tooltip = shape.text + "<br />Area: ~" + area + " " + areaQuantifier + "<br />Population: ~" + population + " " + populationQuantifier;

						container.add(shape);
					}
				}

				assignWeights();
				assignColors();
				arrangeDiagram();
			}
		};
		xhttp.open("GET", "Data.xml", true);
		xhttp.send();
}

function assignWeights()
{
	for (var i = 0; i < diagram.nodes.length; i++)
		{
			var node = diagram.nodes[i];
			// Ignore containers and container captions
			if (node instanceof ContainerNode || node.locked)
				continue;

			if (node instanceof ShapeNode)
			{
				var values = node.tag;
				if (values == null)
					continue;

				var s = document.getElementById('ddlWeight')
				var name = s.options[s.selectedIndex].text;

				if (name == "Area")
					node.weight = values[0];
				else if (name == "Population")
					node.weight = values[1];
			}
		}
}

function assignColors()
{
	var largestArea = new Map();
	var largestPopulation = new Map();
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
		if (node instanceof ContainerNode)
		{
			var area = 0.0;
			var population = 0.0;
			for (var j = 0; j < node.children.length; j++)
			{
				var child = node.children[j];
				var values = child.tag;
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
		if (node instanceof ContainerNode || node.locked)
			continue;

		if (node instanceof ShapeNode)
		{
			var values = node.tag;
			if (values == null)
				continue;

			var value = 0;
			var total = 0;

			var s = document.getElementById('ddlColor')
			var name = (s.options[s.selectedIndex]).text;

			if (name == "Area")
			{
				value = values[0];
				total = largestArea.get(node.container);
			}
				else if (name == "Population")
			{
				value = values[1];
				total = largestPopulation.get(node.container);
			}
			node.brush = getScaleColor(value, total);
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
		if (!node instanceof ShapeNode || node.locked)
			continue;

		if (node.bounds.width < 10 || node.bounds.height < 10)
			node.text = "";
	}

	// Resize caption nodes
	for (var i = 0; i < diagram.nodes.length; i++)
	{
		var node = diagram.nodes[i];
		if (node.locked && node.masterNode)
		{
			var bounds = node.bounds;
			bounds.width = node.masterNode.bounds.width;
			bounds.height = Math.min(30, node.masterNode.bounds.height);
			node.bounds = bounds;
		}
	}

	diagramView.zoomToFit();
}
