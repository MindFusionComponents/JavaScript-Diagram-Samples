import React, { Component } from 'react';
import Info from './Info';
import mf from 'diagram-library';
import { DiagramView } from 'diagram-library-react';

class FractalLayout extends Component {
  constructor(props) {
    super(props);

    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    // set the model diagram in state
    this.state = {
      diagram: diagram,
      brushes: ["#9caac6", "#ce0000", "#c0c0c0"]
    };
  }

  onRandomTree() {
    this.state.diagram.clearAll();

    // create the root node
    var rect = new mf.Drawing.Rect(0, 0, 15, 10);
    var node = new mf.Diagramming.ShapeNode(this.state.diagram);
    var brush = this.state.brushes[0];
    node.setBounds(rect);
    node.setBrush(brush);
    node.setStroke(this.state.brushes[1]);
    this.state.diagram.addItem(node);

    // add random children
    this.randomTree(node, 5, 4);

    this.applyLayout();
    this.state.diagram.setZoomFactor(8);
  }

  randomTree(node, depth, minChildren) {
    if (depth <= 0)
      return;

    var diagram = node.getParent();
    var children = this.randomInt(depth) - 1 + minChildren;
    var brush = this.state.brushes[0];
    while (brush === node.getBrush())
      brush = this.state.brushes[1];

    if (diagram.nodes.length < 3 && children < 2)
      children = 2;

    for (var i = 0; i < children; ++i) {
      // create child node
      var rect = new mf.Drawing.Rect(0, 0, 15, 10);
      var child = new mf.Diagramming.ShapeNode(diagram);
      child.setBounds(rect);
      child.setBrush(brush);
      diagram.addItem(child);

      // create a link
      var link = new mf.Diagramming.DiagramLink(diagram, node, child);
      diagram.addItem(link);

      // build child branch
      this.randomTree(child, depth - 1, minChildren);
    }
  }

  applyLayout() {
    var layout = new mf.Graphs.FractalLayout();
    layout.root = this.state.diagram.nodes[0];
    this.state.diagram.arrange(layout);
    this.fitItems(this.state.diagram);
  }

  randomInt(max) {
    return Math.floor(max * Math.random());
  }

  fitItems(diagram) {
    var rect = mf.Drawing.Rect.empty;
    diagram.nodes.forEach(function (node) {
      if (rect === mf.Drawing.Rect.empty)
        rect = node.bounds;
      else
        rect = rect.union(node.bounds);
    });

    if (rect)
      diagram.setBounds(new mf.Drawing.Rect(0, 0, rect.right() + 10, rect.bottom() + 10));
  }

  onZoomIn() {
    if (this.state.diagram.zoomFactor > 200) return;
    this.state.diagram.setZoomFactor(this.state.diagram.zoomFactor + 10);
  }

  onZoomOut() {
    if (this.state.diagram.zoomFactor < 19) return;
    this.state.diagram.setZoomFactor(this.state.diagram.zoomFactor - 10);
  }

  render() {
    var props = {
      "linkHeadShapeSize": 2,
      "behavior": mf.Diagramming.Behavior.Pan
    };

    return (
      <div className="App">
        <div className="header">
          <button onClick={() => this.onRandomTree()}>Random tree</button>
          <button onClick={() => this.onZoomIn()}>Zoom in</button>
          <button onClick={() => this.onZoomOut()}>Zoom out</button>
        </div>

        <div className="container">
          <div className="main">
            <DiagramView diagram={this.state.diagram} {...props} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>Click the button to create a random tree and arrange it using the FractalLayout algorithm.</p>
            <Info/>
          </div>
        </div>

        <div className="footer">
          <p>Copyright 2020 MindFusion LLC.</p>
        </div>

      </div>
    );
  }
}


export default FractalLayout;
