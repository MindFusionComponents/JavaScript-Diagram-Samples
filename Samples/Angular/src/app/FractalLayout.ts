import { Component, OnInit } from '@angular/core';
import * as MindFusion from 'diagram-library';
import Diagram = MindFusion.Diagramming.Diagram;
import Behavior = MindFusion.Diagramming.Behavior;

@Component({
  selector: 'fractal-layout',
  template: `<div className="App">
  <div class="header">
    <button (click)="onRandomTree()">Random tree</button>
    <button (click)="onZoomIn()">Zoom in</button>
    <button (click)="onZoomOut()">Zoom out</button>
  </div>

  <div class="container">
    <div class="main">
      <diagram-view [diagram]="diagram"  [linkHeadShapeSize]="2" [behavior]="pan" ></diagram-view>
    </div>
    <div class="sidebar">
      <h1>About this sample</h1>
      <p>Click the button to create a random tree and arrange it using the FractalLayout algorithm.</p>
    </div>
  </div>

  <div class="footer">
    <p>Copyright 2020 MindFusion LLC.</p>
  </div>

</div>`
})
export class FractalLayout implements OnInit{
 
  diagram: Diagram;
  brushes: Array<string> =  ["#9caac6", "#ce0000", "#c0c0c0"];
  pan : Behavior.Pan;

  ngOnInit(): void{

    this.diagram = new Diagram();
  }

  onRandomTree() {
    this.diagram.clearAll();

    // create the root node
    var rect = new MindFusion.Drawing.Rect(0, 0, 15, 10);
    var node = new MindFusion.Diagramming.ShapeNode(this.diagram);
    var brush = this.brushes[0];
    node.setBounds(rect);
    node.setBrush(brush);
    node.setStroke(this.brushes[1]);
    this.diagram.addItem(node);

    // add random children
    this.randomTree(node, 5, 4);

    this.applyLayout();
    this.diagram.setZoomFactor(8);
  }

  randomTree(node, depth, minChildren) {
    if (depth <= 0)
      return;

    var diagram = node.getParent();
    var children = this.randomInt(depth) - 1 + minChildren;
    var brush: any = this.brushes[0];
    while (brush === node.getBrush())
      brush = this.brushes[1];

    if (diagram.nodes.length < 3 && children < 2)
      children = 2;

    for (var i = 0; i < children; ++i) {
      // create child node
      var rect = new MindFusion.Drawing.Rect(0, 0, 15, 10);
      var child = new MindFusion.Diagramming.ShapeNode(diagram);
      child.setBounds(rect);
      child.setBrush(brush);
      diagram.addItem(child);

      // create a link
      var link = new MindFusion.Diagramming.DiagramLink(diagram, node, child);
      diagram.addItem(link);

      // build child branch
      this.randomTree(child, depth - 1, minChildren);
    }
  }

  applyLayout() {
    var layout = new MindFusion.Graphs.FractalLayout();
    layout.root = this.diagram.getNodeAt[0];
    this.diagram.arrange(layout);
    this.fitItems(this.diagram);
  }

  randomInt(max) {
    return Math.floor(max * Math.random());
  }

  fitItems(diagram) {
    var rect = MindFusion.Drawing.Rect.empty;
    diagram.nodes.forEach(function (node) {
      if (rect === MindFusion.Drawing.Rect.empty)
        rect = node.bounds;
      else
        rect = rect.union(node.bounds);
    });

    if (rect)
      diagram.setBounds(new MindFusion.Drawing.Rect(0, 0, rect.right() + 10, rect.bottom() + 10));
  }

  onZoomIn() {
    if (this.diagram.getZoomFactor() > 200) return;
    this.diagram.setZoomFactor(this.diagram.getZoomFactor() + 10);
  }

  onZoomOut() {
    if (this.diagram.getZoomFactor() < 19) return;
    this.diagram.setZoomFactor(this.diagram.getZoomFactor() - 10);
  }
}