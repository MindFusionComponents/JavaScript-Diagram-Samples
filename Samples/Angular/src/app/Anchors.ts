import { Component, OnInit } from '@angular/core';
import * as MindFusion from 'diagram-library';

import Diagram = MindFusion.Diagramming.Diagram;
import Theme = MindFusion.Diagramming.Theme;
import Style = MindFusion.Diagramming.Style;
import GlassEffect = MindFusion.Diagramming.GlassEffect;
import AnchorPattern = MindFusion.Diagramming.AnchorPattern;


@Component({
  selector: 'anchors',
  template: `<div className="App">
  <div class="header">
    <select id="shape" (change)="onShapeChange($event)">
      <option value="Rectangle">Node</option>
      <option value="Decision">Decision</option>
    </select>
  </div>

  <div class="container">
    <div class="main">
      <diagram-view 
      [diagram]="diagram"
      [routeLinks] = "true" 
      [roundedLinks] = "true"
      [linkHeadShapeSize] = "2"
      [backBrush] = "'#e0e9e9'"
      (onNodeCreated)="onDiagramNodeCreated($event)">
    </diagram-view>
    </div>
    <div class="sidebar">
      <h1>About this sample</h1>
      <p>This sample shows how to define custom anchor-point patterns and assign them to boxes. 
        There are also several predefined anchor patterns to choose from. One of them, DecisionBox, 
        is used with the decision boxes in the sample diagram on the left. 
        Link several boxes with arrows to get an idea how anchor points work.</p>
    </div>
  </div>

  <div class="footer">
    <p>Copyright 2020 MindFusion LLC.</p>
  </div>

</div>`,
})
export class Anchors implements OnInit{

  diagram : Diagram;
  theme : Theme;
  shapeNodeStyle : Style;
  glassEffect : GlassEffect;
  decision1In3Out : AnchorPattern;
  apat2 : AnchorPattern;
 
  ngOnInit():void{
    this.diagram = new Diagram();

    this.theme = new Theme();
    this.shapeNodeStyle = new Style();
    this.shapeNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 });
    this.shapeNodeStyle.setStroke("#7F7F7F");
    this.shapeNodeStyle.setTextColor("#585A5C");
    this.shapeNodeStyle.setFontName("Verdana");
    this.shapeNodeStyle.setFontSize(3);
    this.shapeNodeStyle.setBackBrush("#e0e9e9");
    this.shapeNodeStyle.setNodeEffects([new GlassEffect()]);
    this.theme.styles["std:ShapeNode"] = this.shapeNodeStyle;
    this.diagram.setStyle(this.shapeNodeStyle);

    var blue = "#2d3956";
    var green = "#5a7444";
    var red = "#ce0000";

    var apat1 = new MindFusion.Diagramming.AnchorPattern([
      new MindFusion.Diagramming.AnchorPoint(50, 0, true, true),
      new MindFusion.Diagramming.AnchorPoint(100, 50, true, true),
      new MindFusion.Diagramming.AnchorPoint(50, 100, true, true),
      new MindFusion.Diagramming.AnchorPoint(0, 50, true, true)
    ]);
    this.apat2 = new MindFusion.Diagramming.AnchorPattern([
      new MindFusion.Diagramming.AnchorPoint(10, 0, true, false, MindFusion.Diagramming.MarkStyle.Circle, green),
      new MindFusion.Diagramming.AnchorPoint(50, 0, true, false, MindFusion.Diagramming.MarkStyle.Circle, blue),
      new MindFusion.Diagramming.AnchorPoint(90, 0, true, false, MindFusion.Diagramming.MarkStyle.Circle, red),
      new MindFusion.Diagramming.AnchorPoint(10, 100, false, true, MindFusion.Diagramming.MarkStyle.Rectangle),
      new MindFusion.Diagramming.AnchorPoint(50, 100, false, true, MindFusion.Diagramming.MarkStyle.Rectangle),
      new MindFusion.Diagramming.AnchorPoint(90, 100, false, true, MindFusion.Diagramming.MarkStyle.Rectangle),
      new MindFusion.Diagramming.AnchorPoint(0, 50, true, true, MindFusion.Diagramming.MarkStyle.X)
    ]);

    var pb1 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(10, 7, 25, 18));
    pb1.setShape(MindFusion.Diagramming.Shape.fromId("Ellipse"));
    pb1.setText("Start");
    pb1.setAnchorPattern(apat1);

    var pb2 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(20, 78, 25, 18));
    pb2.setText("node 1");
    pb2.setAnchorPattern(this.apat2);

    var pb3 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(70, 73, 25, 18));
    pb3.setText("node 2");
    pb3.setAnchorPattern(this.apat2);

    var pb4 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(80, 110, 25, 18));
    pb4.setShape(MindFusion.Diagramming.Shape.fromId("Ellipse"));
    pb4.setText("End");
    pb4.setAnchorPattern(apat1);

    this.decision1In3Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision1In3Out");

    var decb1 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(20, 35, 30, 20));
    decb1.setShape(MindFusion.Diagramming.Shape.fromId("Decision"));
    decb1.setText("check 1");
    decb1.setAnchorPattern(this.decision1In3Out);

    var decision2In2Out = MindFusion.Diagramming.AnchorPattern.fromId("Decision2In2Out");

    var decb2 = this.diagram.getFactory().createShapeNode(new MindFusion.Drawing.Rect(70, 30, 30, 20));
    decb2.setShape(MindFusion.Diagramming.Shape.fromId("Decision"));
    decb2.setText("check 2");
    decb2.setAnchorPattern(decision2In2Out);

    var link = this.diagram.getFactory().createDiagramLink(decb1, decb2);
    link.route();
  }

  onDiagramNodeCreated(event) {
    var node = event.args.getNode();
    if (event.sender.getDefaultShape().id === "Rectangle")
      node.setAnchorPattern(this.apat2);
    else
      node.setAnchorPattern(this.decision1In3Out);
  }

  onShapeChange(e) {
    this.diagram.setDefaultShape(e.target.value);
  }
}