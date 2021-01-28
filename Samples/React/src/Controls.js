import React, { Component } from 'react';
import Info from './Info';
import mf from 'diagram-library';
import { DiagramView, Overview, NodeListView, ZoomControl, Ruler } from 'diagram-library-react';

class Controls extends Component {
  constructor(props) {
    super(props);

    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    var theme = new mf.Diagramming.Theme();
    var shapeNodeStyle = new mf.Diagramming.Style();
    shapeNodeStyle.setBrush({ type: 'SolidBrush', color: '#e0e9e9' });
    shapeNodeStyle.setStroke("#7F7F7F");
    shapeNodeStyle.setFontName("Verdana");
    shapeNodeStyle.setFontSize(4);
    shapeNodeStyle.setNodeEffects([new mf.Diagramming.GlassEffect()]);
    theme.styles["std:ShapeNode"] = shapeNodeStyle;
    diagram.setTheme(theme);

    // add some nodes to the NodeListView
    var nodes = [];
    var shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
    for (var i = 0; i < shapes.length; ++i) {
      var node = new mf.Diagramming.ShapeNode(diagram);
      node.setText(shapes[i]);
      node.setShape(shapes[i]);

      nodes.push(node);
    }

    this.state = {
      diagram: diagram,
      nodes: nodes,
      captions: shapes
    };
  }

  render() {
    var props = {
      "id": "diagram1",
      "linkHeadShapeSize": 2,
      "routeLinks": true,
      "roundedLinks": true,
      "backBrush": "#e0e9e9"
    };

    return (
      <div className="App">
        <div className="header">
        </div>

        <div className="container">
          <div className="main">
            <div className="sidebar-left">
              <Overview diagram={this.state.diagram}></Overview>
              <NodeListView 
                nodes={this.state.nodes}
                captions={this.state.captions}
              ></NodeListView>
            </div>
            <div className="main">
              <ZoomControl diagram={this.state.diagram} style={{ position: "absolute", right: 20, top: 30, zIndex: 2 }}></ZoomControl>
              <Ruler style={{ width: "100%" }}>
                <DiagramView diagram={this.state.diagram}
                  {...props}
                  style={{ position: "absolute", width: 'auto', height: 'auto', left: 0, right: 0, top: 0, bottom: 0 }} />
              </Ruler>
            </div>
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>This sample demonstrates the auxilliary controls available with React Diagram: NodeListView,
            Overview, ZoomControl and Ruler. The NodeListView implements a list-box control that contains
            DiagramNode objects and allows dragging them to the DiagramView control. The Overview
            provides a scaled-down view of the DiagramView content and lets the user scroll
            the bound view. The ZoomControl lets users zoom and pan the target DiagramView interactively.
            The Ruler control provides horizontal and vertical scales that help users measure and align diagram items.</p>
            <Info />
          </div>
        </div>

        <div className="footer">
          <p>Copyright 2020 MindFusion LLC.</p>
        </div>

      </div>
    );
  }
}


export default Controls;
