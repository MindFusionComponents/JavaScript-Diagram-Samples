import React, { Component } from 'react';
import Info from './Info';
import mf from 'diagram-library';
import { DiagramView } from 'diagram-library-react';

class Anchors extends Component {
  constructor(props) {
    super(props);

    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    var theme = new mf.Diagramming.Theme();
    var shapeNodeStyle = new mf.Diagramming.Style();
    shapeNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 });
    shapeNodeStyle.setStroke("#7F7F7F");
    shapeNodeStyle.setTextColor("#585A5C");
    shapeNodeStyle.setFontName("Verdana");
    shapeNodeStyle.setFontSize(3);
    shapeNodeStyle.setBackBrush("#e0e9e9");
    shapeNodeStyle.setNodeEffects([new mf.Diagramming.GlassEffect()]);
    theme.styles["std:ShapeNode"] = shapeNodeStyle;
    diagram.setTheme(theme);

    var blue = "#2d3956";
    var green = "#5a7444";
    var red = "#ce0000";

    diagram.setDefaultShape("Rectangle");

    var apat1 = new mf.Diagramming.AnchorPattern([
      new mf.Diagramming.AnchorPoint(50, 0, true, true),
      new mf.Diagramming.AnchorPoint(100, 50, true, true),
      new mf.Diagramming.AnchorPoint(50, 100, true, true),
      new mf.Diagramming.AnchorPoint(0, 50, true, true)
    ]);

    this.apat2 = new mf.Diagramming.AnchorPattern(
      [
        new mf.Diagramming.AnchorPoint(10, 0, true, false, mf.Diagramming.MarkStyle.Circle, green),
        new mf.Diagramming.AnchorPoint(50, 0, true, false, mf.Diagramming.MarkStyle.Circle, blue),
        new mf.Diagramming.AnchorPoint(90, 0, true, false, mf.Diagramming.MarkStyle.Circle, red),
        new mf.Diagramming.AnchorPoint(10, 100, false, true, mf.Diagramming.MarkStyle.Rectangle),
        new mf.Diagramming.AnchorPoint(50, 100, false, true, mf.Diagramming.MarkStyle.Rectangle),
        new mf.Diagramming.AnchorPoint(90, 100, false, true, mf.Diagramming.MarkStyle.Rectangle),
        new mf.Diagramming.AnchorPoint(0, 50, true, true, mf.Diagramming.MarkStyle.X)
      ]);

    var pb1 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(10, 7, 25, 18));
    pb1.setShape("Ellipse");
    pb1.setText("Start");
    pb1.setAnchorPattern(apat1);

    var pb2 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(20, 78, 25, 18));
    pb2.setText("node 1");
    pb2.setAnchorPattern(this.apat2);

    var pb3 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(70, 73, 25, 18));
    pb3.setText("node 2");
    pb3.setAnchorPattern(this.apat2);

    var pb4 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(80, 110, 25, 18));
    pb4.setShape("Ellipse");
    pb4.setText("End");
    pb4.setAnchorPattern(apat1);

    this.decision1In3Out = mf.Diagramming.AnchorPattern.fromId("Decision1In3Out");

    var decb1 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(20, 35, 30, 20));
    decb1.setShape("Decision");
    decb1.setText("check 1");
    decb1.setAnchorPattern(this.decision1In3Out);

    var decision2In2Out = mf.Diagramming.AnchorPattern.fromId("Decision2In2Out");

    var decb2 = diagram.getFactory().createShapeNode(new mf.Drawing.Rect(70, 30, 30, 20));
    decb2.setShape("Decision");
    decb2.setText("check 2");
    decb2.setAnchorPattern(decision2In2Out);

    var link = diagram.getFactory().createDiagramLink(decb1, decb2);
    link.route();

    // set the model diagram in state
    this.state = {
      diagram: diagram,
      shape: "Rectangle"
    };
  }

  onDiagramNodeCreated(sender, args) {
    var node = args.getNode();
    if (sender.getDefaultShape().id === "Rectangle")
      node.setAnchorPattern(this.apat2);
    else
      node.setAnchorPattern(this.decision1In3Out);
  }

  onShapeChange(e) {
    this.setState({ shape: e.target.value });
  }

  render() {
    var props = {
      "linkHeadShapeSize": 2,
      "routeLinks": true,
      "roundedLinks": true,
      "backBrush": "#e0e9e9",
      "defaultShape": this.state.shape
    };

    return (
      <div className="App">
        <div className="header">
          <select id="shape" onChange={this.onShapeChange.bind(this)}>
            <option value="Rectangle">Node</option>
            <option value="Decision">Decision</option>
          </select>
        </div>

        <div className="container">
          <div className="main">
            <DiagramView diagram={this.state.diagram} {...props}
              onNodeCreated={(sender, args) => this.onDiagramNodeCreated(sender, args)} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>This sample shows how to define custom anchor-point patterns and assign them to boxes. 
              There are also several predefined anchor patterns to choose from. One of them, DecisionBox, 
              is used with the decision boxes in the sample diagram on the left. 
              Link several boxes with arrows to get an idea how anchor points work.</p>
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


export default Anchors;
