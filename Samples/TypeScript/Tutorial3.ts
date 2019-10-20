/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />

namespace Tutorial3
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import CompositeNode = MindFusion.Diagramming.CompositeNode;
	import Behavior = MindFusion.Diagramming.Behavior;
	import AbstractionLayer = MindFusion.AbstractionLayer;
	import Alignment = MindFusion.Diagramming.Alignment;

	import Rect = MindFusion.Drawing.Rect;

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
							font: "Arial bold"
						},
						{
							component: "Text",
							name: "FullName",
							autoProperty: true,
							text: "full name",
							pen: "blue",
							padding: "1,0,1,0"
						},
						{
							component: "Text",
							name: "Details",
							autoProperty: true,
							text: "details",
							font: "Arial 3"
						}
					]
				}
			]
		});

	export var diagram : Diagram = null;

	$(document).ready(function ()
	{
		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);

		// enable drawing of custom nodes interactively
		diagram.setCustomNodeType(OrgChartNode);
		diagram.setBehavior(Behavior.Custom);

		var node1 = new OrgChartNode(diagram);
		node1.setBounds(new Rect(25, 15, 60, 25));
		node1.setTitle("CEO");
		node1.setFullName("John Smith");
		node1.setDetails(
			"Our beloved leader. \r\n" +
			"The CEO of this great corporation.");
		node1.setImage("ceo.png");
		diagram.addItem(node1);

		var node2 = new OrgChartNode(diagram);
		node2.setBounds(new Rect(25, 55, 60, 25));
		node2.setTitle("CTO");
		node2.setFullName("Bob Smith");
		node2.setDetails("The technology chief of this great corporation.");
		node2.setImage("cto.png");
		diagram.addItem(node2);

		var node3 = new OrgChartNode(diagram);
		node3.setBounds(new Rect(95, 55, 60, 25));
		node3.setTitle("HR");
		node3.setFullName("Mary Johnson");
		node3.setDetails("Human resources and staff development.");
		node3.setImage("hr.png");
		diagram.addItem(node3);

		var node4 = new OrgChartNode(diagram);
		node4.setBounds(new Rect(175, 55, 60, 25));
		node4.setTitle("PR");
		node4.setFullName("Diana Brandson");
		node4.setDetails("Public relations and media.");
		node4.setImage("pr.png");
		diagram.addItem(node4);

		var node5 = new OrgChartNode(diagram);
		node5.setBounds(new Rect(175, 95, 60, 25));
		node5.setTitle("Media");
		node5.setFullName("Dave Lu");
		node5.setDetails("Adertising and creative content.");
		node5.setImage("ad.png");
		diagram.addItem(node5);

		diagram.getFactory().createDiagramLink(node1, node2);
		diagram.getFactory().createDiagramLink(node1, node3);
		diagram.getFactory().createDiagramLink(node1, node4);
		diagram.getFactory().createDiagramLink(node4, node5);
	});
}