var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Style = MindFusion.Diagramming.Style;
var DashStyle = MindFusion.Drawing.DashStyle;
var Alignment = MindFusion.Diagramming.Alignment;

var Rect = MindFusion.Drawing.Rect;
var LayeredLayout = MindFusion.Graphs.LayeredLayout;
var LayoutDirection = MindFusion.Graphs.LayoutDirection;

// a shortcut to the Events class
var Events = MindFusion.Diagramming.Events;

var diagram = null;

$(document).ready(function () {
    // create a Diagram component that wraps the "diagram" canvas
    diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);
    //set both base and head link shape size
    diagram.setLinkHeadShapeSize(2);
    diagram.setLinkBaseShapeSize(2);
    diagram.setLinkBaseShape(MindFusion.Diagramming.Shape.fromId("Arrow"));
    //customize the link appearance
    var linkStyle = new Style();
    linkStyle.setStroke("#c0c0c0");
    linkStyle.setTextColor("#585A5C");
    linkStyle.setFontName("Verdana");
    linkStyle.setFontSize(3);
    diagram.setStyle(linkStyle);
    //diagram items can only be selected
    diagram.setBehavior(MindFusion.Diagramming.Behavior.SelectOnly);

    // add listeners
    diagram.addEventListener(Events.linkSelected, onLinkSelected);
    diagram.addEventListener(Events.clicked, onClicked);

    //generate the graph
    onRandomGraph();
    
});

//handle the linkSelected event
function onLinkSelected(sender, args) {
    
    //get the style of the series
    var seriesStyle = lineChart.plot.seriesStyle;
    seriesStyle.strokeThicknesses.clear();

    //thicken just the selected series, the others should be transparent
    for (var j = 0; j < lineChart.series.count() ; j++) {
        seriesStyle.strokeThicknesses.add(0.15);
        diagram.links[j].setStrokeThickness(1.0);
    }
        
    //bolden all selected links in the diagram as well
    for (var m = 0; m < diagram.selection.links.length; m++) {
        var clickedLinkId = diagram.selection.links[m].getId();
        diagram.selection.links[m].setStrokeThickness(3.0);

        //find the series that correspond to the selected links
        for (var i = 0; i < lineChart.series.count() ; i++) {
            var _series = lineChart.series.item(i);

        
            //adjust the stroke thicknesses
            if (_series.title == clickedLinkId) {

                seriesStyle.strokeThicknesses.removeAt(i);
                seriesStyle.strokeThicknesses.insert(i, 3);
            }
       
        }
    }

    //repaint the chart
    lineChart.draw();    
}

//reset the chart thicknesses
function onClicked(sender, args) {
    resetThicknesses();    

}

/* bolden the two major series, the others should be very thin.
bolden the two major diaglinks as well. */
function resetThicknesses()
{
    var seriesStyle = lineChart.plot.seriesStyle;
    seriesStyle.strokeThicknesses.clear();

    for (var j = 0; j < 5; j++) {
        seriesStyle.strokeThicknesses.add(0.1);
        diagram.links[j].setStrokeThickness(1.0);
    }
    //the 6th series and link are bold
    seriesStyle.strokeThicknesses.add(2.0);
    diagram.links[5].setStrokeThickness(2.0);

    for (var j = 0; j < 2; j++) {
        seriesStyle.strokeThicknesses.add(0.15);
        diagram.links[6 + j].setStrokeThickness(1.0);
    }

    //the 9th as well
    seriesStyle.strokeThicknesses.add(2.0);
    diagram.links[8].setStrokeThickness(2.0);
    seriesStyle.strokeThicknesses.add(0.1);
    diagram.links[9].setStrokeThickness(1.0);

}


//build the nodes and arrange the diagram
function onRandomGraph() {
    buildDiagram();
    applyLayeredLayout();

    //add the separators for the tyres
    //first get the size of the diagram
    var width = diagram.getBounds().width;
    var height = diagram.getBounds().height;

    //separator for the Clients tyre
    //the link starts from the left edge and eds to the right edge of the digram
    var link = new DiagramLink(
					diagram, new MindFusion.Drawing.Point(2, (height / 3.5)),
        new MindFusion.Drawing.Point(width, (height / 3.5)));
    link.setShadowOffsetX(0);
    link.setShadowOffsetY(0);
    link.setStrokeDashStyle(DashStyle.Dash);
    link.setStroke("#DCDCDC");
    //remove the shapes at both ends
    link.setHeadShape(null);
    link.setBaseShape(null);
    //do not allow this link to be selected
    link.setLocked(true);
    //move the link label to the right
    var linkLabel = link.addLabel("Clients");
    linkLabel.setControlPointPosition(1, -5, 0);
    diagram.addItem(link);

    //separator for the network servers tyre
    link = new DiagramLink(
					diagram, new MindFusion.Drawing.Point(2, 2*(height / 3.7)),
        new MindFusion.Drawing.Point(width, 2*(height / 3.7)));
    link.setShadowOffsetX(0);
    link.setShadowOffsetY(0);
    link.setStrokeDashStyle(DashStyle.Dash);
    link.setStroke("#DCDCDC");
    link.setHeadShape(null);
    link.setBaseShape(null);
    link.setLocked(true);
    linkLabel = link.addLabel("Network Serveres");
    linkLabel.setControlPointPosition(1, -5, 0);

    diagram.addItem(link);

    //separator for the data servers tyre
    link = new DiagramLink(
					diagram, new MindFusion.Drawing.Point(2, 3 * (height / 3.8)),
        new MindFusion.Drawing.Point(width, 3 * (height / 3.8)));
    link.setShadowOffsetX(0);
    link.setShadowOffsetY(0);
    link.setStrokeDashStyle(DashStyle.Dash);
    link.setStroke("#DCDCDC");
    link.setHeadShape(null);
    link.setBaseShape(null);
    link.setLocked(true);
    linkLabel = link.addLabel("Data Serveres");
    linkLabel.setControlPointPosition(1, -5, 0);

    diagram.addItem(link);
}

//generate diagram nodes
function buildDiagram() {
    diagram.clearAll();

    //the default node size
    var rect = new Rect(0, 0, 15, 15);

    var node = new ShapeNode(diagram);
    node.setBounds(rect);
    //the web server
    node.setImageLocation("icons/web_server.png");
    node.setTransparent(true);
    diagram.addItem(node);

    //the clients
    for (var i = 0; i < 4; ++i) {       
       
        node = new ShapeNode(diagram);
        node.setBounds(rect);
        node.setTransparent(true);
        node.setImageLocation("icons/client.png");
        diagram.addItem(node);
        //add a link between the client and the server
        var link = new DiagramLink(
					diagram, node, diagram.nodes[0]);
        link.setId("Client" + i);
        link.addLabel("Client" + i);
        diagram.addItem(link);
    }
     
    //create the network servers
    for (var i = 0; i < 3; ++i) {

        node = new ShapeNode(diagram);
        node.setBounds(rect);
        node.setTransparent(true);
        node.setImageLocation("icons/network_server.png");
        diagram.addItem(node);
        //add a link between the client and the server
        var link = new DiagramLink(
					diagram, diagram.nodes[0], node );
        link.setId("Network" + i);
        link.addLabel("Network" + i);
        diagram.addItem(link);
    }

    
    //the db node
    node = new ShapeNode(diagram);
    node.setBounds(rect);
    node.setImageLocation("icons/data_server.png");
    node.setTransparent(true);
    diagram.addItem(node);

    //create the link between network servers and data
    for (var i = 0; i < 3; ++i) {

         //add a link between the network servers and the DB server
        var link = new DiagramLink(
					diagram, diagram.nodes[5+i], node);
        link.setId("Data" + i);
        link.addLabel("Data" + i);
        diagram.addItem(link);
    }

    //bolden the two major links
    diagram.links[5].setStrokeThickness(2.0);
    diagram.links[8].setStrokeThickness(2.0);

   
        
}

//the layeredLayout arranges the diagram properly - into layers
function applyLayeredLayout() {
    var layout = new LayeredLayout();
    layout.direction = LayoutDirection.TopToBottom;
    layout.siftingRounds = 0;
    layout.nodeDistance = 20;
    layout.layerDistance = 20;
    diagram.arrange(layout);
    diagram.resizeToFitItems();
}

function randomInt(max) {
    return Math.floor(max * Math.random());
}