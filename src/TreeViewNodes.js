/// <reference path="JsDiagram-vsdoc.js" />

var Behavior = MindFusion.Diagramming.Behavior;
var TreeViewItem = MindFusion.Diagramming.TreeViewItem;
var SimpleShape = MindFusion.Diagramming.SimpleShape;
var Thickness = MindFusion.Drawing.Thickness;
var Font = MindFusion.Drawing.Font;
var FontStyle = MindFusion.Drawing.FontStyle;

MindFusion.Diagramming.ScrollBar.prototype.background = "#eee";
MindFusion.Diagramming.ScrollBar.prototype.foreground = "#aaa";

var diagram = null;

var icon1 = "treeicon1.png";
var icon2 = "treeicon2.png";

document.addEventListener("DOMContentLoaded", function ()
{
    // create a DiagramView component that wraps the "diagram" canvas
    var diagramView = MindFusion.Diagramming.DiagramView.create(document.getElementById("diagram"));

    // allow users to draw TreeView nodes
    diagramView.behavior = Behavior.LinkTreeViews;
    diagramView.allowInplaceEdit = true;

    diagram = diagramView.diagram;
    diagram.linkHeadShapeSize = 2;
	diagram.backBrush = "#f5f5f5";

    diagram.addEventListener("nodeClicked", (s, a) => onNodeClicked(s, a));
    diagram.addEventListener("treeItemTextEdited", (s, a) => onItemEdited(s, a));

    // Customers node
    var node1 = diagram.factory.createTreeViewNode(30, 10, 50, 88);
    node1.text = "Customers";
    node1.shape = SimpleShape.RoundedRectangle;

    node1.addItem(createItem("Name", icon1));
    var item2 = createItem("Address", icon2);
    node1.addItem(item2);
    node1.addItem(createItem("Country", icon1), item2);
    node1.addItem(createItem("City", icon1), item2);
    node1.addItem(createItem("Street", icon1), item2);
    node1.addItem(createItem("ZIP Code", icon1), item2);

    var item3 = createItem("Orders", icon2);
    node1.addItem(item3);
    node1.addItem(createItem("OrderDate", icon1), item3);

    var item31 = createItem("Details", icon1);
    node1.addItem(item31, item3);
    node1.addItem(createItem("ProductID", icon1), item31);
    node1.addItem(createItem("UnitPrice", icon1), item31);
    node1.addItem(createItem("Quantity", icon1), item31);

    node1.flatItems[6].textColor = "green";
    node1.flatItems[6].font = new Font("Arial", 4, FontStyle.Underline);
    node1.flatItems[9].textColor = "orange";

    // Products node
    var node2 = diagram.factory.createTreeViewNode(220, 50, 50, 56);
    node2.text = "Category";
    node2.shape = SimpleShape.RoundedRectangle;
    node2.fromObject(
        [{
            text: "Name"
        },
        {
            text: "Description"
        },
        {
            text: "Product",
            textColor: "orange",
            children: [{ text: "Name" }, { text: "QuantityPerUnit" }, { text: "UnitPrice" }]

        }]
    );

    node2.flatItems.forEach((item) =>
    {
        item.imagePadding = new Thickness(0, 1, 1, 1);
        if (item.children.length)
            item.imageLocation = icon2; else item.imageLocation = icon1;
    })

    // Report node
    var node3 = diagram.factory.createTreeViewNode(130, 120, 50, 50);
    node3.text = "Report";
    node3.brush = "lightyellow";
    node3.fromObject(
        [{
            text: "Order",
            imageLocation: "icon_calculator.png"
        },
        {
            text: "Date",
            imageLocation: "icon_calendar.png"
        },
        {
            text: "Products",
            imageLocation: "icon_delivery.png",
            children: [{ text: "Name" }, { text: "TotalPrice", brush: "lightblue" }]

        }]
    );

	// Transport node
    var node4 = diagram.factory.createTreeViewNode(120, 10, 60, 70);
	node4.shape = SimpleShape.RoundedRectangle;
    node4.text = "Transport";
    node4.brush = "lightyellow";
    node4.fromObject(
        [{
            text: "Check documents",
            imageLocation: "icon_documents.png"
        },
        {
            text: "Fixed-time delivery",
            imageLocation: "icon_clock.png"
        },
		{
            text: "Route Optimization",
            imageLocation: "icon_map.png"
        },
		{
            text: "Delivery Address",
            imageLocation: "treeicon1.png"
        },
        {
            text: "Cargo",
            imageLocation: "icon_cargo.png",
			brush: "#ebebeb",
            children: [{ text: "Package", imageLocation: "icon_danger.png" }, { text: "Chemicals", imageLocation: "icon_chemicals.png", brush: "#ffccd6", textColor: "#ff1744"}, { text: "Auditor",  imageLocation: "icon_person.png"}]

        }]
    );

    var link1 = diagram.factory.createDiagramLink(node1, node1.flatItems[9], node2, node2.flatItems[2]);
    link1.autoRoute = true;
    link1.headShape = null;
    link1.pen = "orange";

    var link2 = diagram.factory.createDiagramLink(node2, node2.flatItems[3], node3, node3.flatItems[3]);
    link2.pen = "blue";

    var link3 = diagram.factory.createDiagramLink(node1, node1.flatItems[6], node3, node3.flatItems[0]);

    var link4 = diagram.factory.createDiagramLink(node1, node1.flatItems[7], node3, node3.flatItems[1]);
	
	var link5 = diagram.factory.createDiagramLink(node1, node1.flatItems[1], node4, node4.flatItems[3]);
    link5.autoRoute = true;
    link5.headShape = null;
    link5.pen = "#a6a6a6";
});

function createItem(text, icon)
{
    var item = new TreeViewItem();
    item.text = text;
    item.imageLocation = icon;
    item.imagePadding = new Thickness(0, 1, 1, 1);
    return item;
}

function onNodeClicked(sender, args)
{
    if (args.mouseButton == 2)
    {
        var item = createItem("<untitled>", icon2);
        var parent = args.node.itemFromPoint(args.mousePosition);

        args.node.addItem(item, parent);
    }
}

function onItemEdited(sender, args)
{
    if (!args.newText)
        args.node.removeItem(args.item);
}