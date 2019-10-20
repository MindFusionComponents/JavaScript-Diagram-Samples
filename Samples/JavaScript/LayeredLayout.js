var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Style = MindFusion.Diagramming.Style;

var Rect = MindFusion.Drawing.Rect;
var LayeredLayout = MindFusion.Graphs.LayeredLayout;
var LayoutDirection = MindFusion.Graphs.LayoutDirection;

var diagram = null;

$(document).ready(function () {
    // create a Diagram component that wraps the "diagram" canvas
    diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
    diagram.setLinkHeadShapeSize(2);
    var linkStyle = new Style();
    linkStyle.setStroke("#c0c0c0");
    linkStyle.setTextColor("#585A5C");
    linkStyle.setFontName("Verdana");
    linkStyle.setFontSize(3);
    diagram.setStyle(linkStyle);
 

    // create an Overview component that wraps the "overview" canvas
    var overview = MindFusion.AbstractionLayer.createControl(MindFusion.Diagramming.Overview,
        null, null, null, $("#overview")[0]);
    overview.setDiagram(diagram);
});

function onRandomGraph()
{
	randomGraph(20);
	applyLayeredLayout();
}

function randomGraph(n)
{
	diagram.clearAll();

	for (var i = 0; i < n; ++i)
	{
		var c = diagram.nodes.length;
		var g = 2 + randomInt(15);
		for (var j = 0; j < g; ++j)
		{
			var rect = new Rect(0, 0, 10, 10);
			var node = new ShapeNode(diagram);
			node.setBounds(rect);
			node.setBrush({ type: "LinearGradientBrush", color1: "#e0e9e9", color2: "#669acc", angle: 60 });
			diagram.addItem(node);
			if (j > 0)
			{
				var link = new DiagramLink(
					diagram, diagram.nodes[diagram.nodes.length - 2], node);
                   
				diagram.addItem(link);
			}
		}
		if (i > 0)
		{
			for (var j = 0; j < 1 + randomInt(3); ++j)
			{
				var link = new DiagramLink(
					diagram, diagram.nodes[randomInt(c)], diagram.nodes[c + randomInt(g)]);
				diagram.addItem(link);
			}
		}
	}
}

function applyLayeredLayout()
{
	var layout = new LayeredLayout();
	layout.direction = LayoutDirection.TopToBottom;
	layout.siftingRounds = 0;
	layout.nodeDistance = 8;
	layout.layerDistance = 8;
	diagram.arrange(layout);
	diagram.resizeToFitItems();
}

function randomInt(max)
{
	return Math.floor(max * Math.random());
}

function onZoomIn()
{
	var diagram = Diagram.find("diagram");
	if (diagram.zoomFactor > 200) return;
	diagram.setZoomFactor(diagram.zoomFactor + 10);
}

function onZoomOut()
{
	var diagram = Diagram.find("diagram");
	if (diagram.zoomFactor < 19) return;
	diagram.setZoomFactor(diagram.zoomFactor - 10);
}