/// <reference path="JsDiagram-vsdoc.js" />

var DiagramView = MindFusion.Diagramming.DiagramView;
var Diagram = MindFusion.Diagramming.Diagram;
var CompositeNode = MindFusion.Diagramming.CompositeNode;
var Behavior = MindFusion.Diagramming.Behavior;

var Alignment = MindFusion.Drawing.Alignment;
var Rect = MindFusion.Drawing.Rect;


var OrgChartNode = CompositeNode.classFromTemplate("OrgChartNode",
{
	component: "GridPanel",
	rowDefinitions: ["*"],
	columnDefinitions: ["22", "*"],
	children:
	[
		{
			component: "Rect",
			name: "Background",
			pen: "black",
			brush: "white",
			columnSpan: 2
		},
		{
			component: "Image",
			name: "Image",
			autoProperty: true,
			location: "ceo.png",
			margin: "1",
			imageAlign: "Fit"
		},
		{
			component: "StackPanel",
			orientation: "Vertical",
			gridColumn: 1,
			margin: "1",
			verticalAlignment: "Near",
			children:
			[
				{
					component: "Text",
					name: "Title",
					autoProperty: true,
					text: "title",
					font: "Calibri bold"
				},
				{
					component: "Text",
					name: "FullName",
					autoProperty: true,
					text: "full name",
					pen: "blue",
					font: "Calibri 4",
					padding: "1,0,1,0"
				},
				{
					component: "Text",
					name: "Details",
					autoProperty: true,
					text: "details",
					font: "Calibri 3"
				}
			]
		}
	]
});

Diagram.registerClass(OrgChartNode, "OrgChartNode", "OrgChartNode", 1, CompositeNode);

var diagram = null;

document.addEventListener("DOMContentLoaded", function ()
{
	// create a DiagramView component that wraps the "diagram" canvas
	var diagramView = DiagramView.create(document.getElementById("diagram"));
	diagram = diagramView.diagram;

	// enable drawing of custom nodes interactively
	diagram.customNodeType = OrgChartNode;
	diagramView.behavior = Behavior.Custom;

	var node1 = new OrgChartNode(diagram);
	node1.bounds = new Rect(25, 15, 60, 25);
	node1.bounds = new Rect(25, 15, 60, 25);
	node1.title = "CEO";
	node1.fullName = "John Smith";
	node1.details =
		"Our beloved leader. \r\n" +
		"The CEO of this great corporation.";
	node1.image = "ceo.png";
	diagram.addItem(node1);

	var node2 = new OrgChartNode(diagram);
	node2.bounds = new Rect(25, 55, 60, 25);
	node2.title = "CTO";
	node2.fullName = "Bob Smith";
	node2.details = "The technology chief of this great corporation.";
	node2.image = "cto.png";
	diagram.addItem(node2);

	var node3 = new OrgChartNode(diagram);
	node3.bounds = new Rect(95, 55, 60, 25);
	node3.title = "HR";
	node3.fullName = "Mary Johnson";
	node3.details = "Human resources and staff development.";
	node3.image = "hr.png";
	diagram.addItem(node3);

	var node4 = new OrgChartNode(diagram);
	node4.bounds = new Rect(175, 55, 60, 25);
	node4.title = "PR";
	node4.fullName = "Diana Brandson";
	node4.details = "Public relations and media.";
	node4.image = "pr.png";
	diagram.addItem(node4);

	var node5 = new OrgChartNode(diagram);
	node5.bounds = new Rect(175, 95, 60, 25);
	node5.title = "Media";
	node5.fullName = "Dave Lu";
	node5.details = "Adertising and creative content.";
	node5.image = "ad.png";
	diagram.addItem(node5);

	diagram.factory.createDiagramLink(node1, node2);
	diagram.factory.createDiagramLink(node1, node3);
	diagram.factory.createDiagramLink(node1, node4);
	diagram.factory.createDiagramLink(node4, node5);
});