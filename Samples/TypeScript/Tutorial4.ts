/// <reference path="common/jquery.min.d.ts" />
/// <reference path="jsdiag.d.ts" />

namespace Tutorial4
{
	import Diagram = MindFusion.Diagramming.Diagram;
	import CompositeNode = MindFusion.Diagramming.CompositeNode;
	import NodeListView = MindFusion.Diagramming.NodeListView;
	import Behavior = MindFusion.Diagramming.Behavior;
	import AbstractionLayer = MindFusion.AbstractionLayer;
	import Alignment = MindFusion.Diagramming.Alignment;

	import Size = MindFusion.Drawing.Size;


	export var TemplatedBase = CompositeNode.classFromTemplate("TemplatedBase",
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
					location: "snowman.png",
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
							font: "Arial 5",
							pen: "#343434"
						},
						{
							component: "Text",
							name: "FullName",
							autoProperty: true,
							text: "full name",
							font: "Arial 4 bold",
							pen: "#003466",
							padding: "1,0,1,0"
						},
						{
							component: "Text",
							name: "Details",
							autoProperty: true,
							text: "details",
							font: "Arial 3",
							pen: "#003466"
						}
					]
				}
			]
		});

	export var OrgChartNode = function (parent)
	{
		AbstractionLayer.initializeBase(Tutorial4.OrgChartNode, this, [parent]);
		this.cost = "low";
	};

	OrgChartNode.prototype =
		{
			getCost: function ()
			{
				return this.cost;
			},

			setCost: function (value)
			{
				this.cost = value;
			},

			// support for the NodeListView drag'n'drop
			clone: function ()
			{
				var copy = AbstractionLayer.callBaseMethod(
					Tutorial4.OrgChartNode, this, "clone", []);
				copy.cost = this.cost;
				return copy;
			},

			// clipboard and serialization support
			toJson: function ()
			{
				var json = AbstractionLayer.callBaseMethod(
					Tutorial4.OrgChartNode, this, "toJson", []);
				json.cost = this.cost;
				return json;
			},

			fromJson: function (json)
			{
				AbstractionLayer.callBaseMethod(
					Tutorial4.OrgChartNode, this, "fromJson", [json]);
				this.cost = json.cost;
			},

			// undo/redo
			saveState: function ()
			{
				var state = AbstractionLayer.callBaseMethod(
					Tutorial4.OrgChartNode, this, "saveState", []);
				state.cost = this.cost;
				return state;
			},

			restoreState: function (state)
			{
				AbstractionLayer.callBaseMethod(
					Tutorial4.OrgChartNode, this, "restoreState", [state]);
				this.cost = state.cost;
			}
		};

	export var diagram : Diagram = null;
	var nodeListView : NodeListView = null;

	$(document).ready(function ()
	{
		AbstractionLayer.registerClass(
			Tutorial4.OrgChartNode, "Tutorial4.OrgChartNode", Tutorial4.TemplatedBase);

		// create a Diagram component that wraps the "diagram" canvas
		diagram = Diagram.create($("#diagram")[0]);

		// enable undo/redo support
		diagram.setUndoEnabled(true);

		// enable drawing of custom nodes interactively
		diagram.setCustomNodeType(Tutorial4.OrgChartNode);
		diagram.setBehavior(Behavior.Custom);

		// create a NodeListView component that wraps the "nodeListView" canvas
		nodeListView = NodeListView.create($("#nodeListView")[0]);
		nodeListView.setMeasureUnit(6);
		nodeListView.setPadding(1);
		nodeListView.setIconSize(new Size(65, 25));
		nodeListView.setDefaultNodeSize(new Size(65, 25));

		// create and add some nodes to the node list
		var node1 = new Tutorial4.OrgChartNode(nodeListView);
		node1.setTitle("Skiing");
		node1.setFullName("Winter");
		node1.setDetails(
			"Vacation in the snow. \r\n" +
			"Ski lessons, ski equipment and winter sports.");
		node1.setImage("snowman.png");
		node1.setCost("high");
		nodeListView.addNode(node1, "");

		var node2 = new Tutorial4.OrgChartNode(nodeListView);
		node2.setTitle("Seaside");
		node2.setFullName("Summer");
		node2.setDetails("Sun bathing, swimming, catching tan.");
		node2.setImage("seaside.png");
		node2.setCost("high");
		nodeListView.addNode(node2, "");

		var node3 = new Tutorial4.OrgChartNode(nodeListView);
		node3.setTitle("Hiking");
		node3.setFullName("Spring");
		node3.setDetails("Mountain walking, guided tours.");
		node3.setImage("mountain.png");
		node3.setCost("low");
		nodeListView.addNode(node3, "");

		var node4 = new Tutorial4.OrgChartNode(nodeListView);
		node4.setTitle("Fishing");
		node4.setFullName("All Year");
		node4.setDetails("fishing equipment, instructors \nand camping.");
		node4.setImage("fishing.png");
		node4.setCost("medium");
		nodeListView.addNode(node4, "");

		var node5 = new Tutorial4.OrgChartNode(nodeListView);
		node5.setTitle("Camping");
		node5.setFullName("Summer");
		node5.setDetails("tent sleeping, open fire cooking.");
		node5.setImage("camping.png");
		node5.setCost("low");
		nodeListView.addNode(node5, "");
	});
}