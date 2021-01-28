import { Component, OnInit } from '@angular/core';
import * as MindFusion from 'diagram-library';

import Diagram = MindFusion.Diagramming.Diagram;

@Component({
  selector: 'min-app',
  template: `<div className="App">
  <div class="header">
    Behavior
    <select id="behavior" (change)="onBehaviorChange($event)">
      <option value="3">LinkShapes</option>
      <option value="4">LinkTables</option>
      <option value="11">LinkContainers</option>
      <option value="26">LinkFreeShapes</option>
      <option value="0">Modify</option>
    </select>

    <span>{{"Nodes count: " + nodes}}</span>
    <span>{{"Links count: " + links}}</span>
  </div>

  <div class="container">
    <div class="main">
        <diagram-view 
        [diagram]="diagram" 
        [allowInplaceEdit]="true" 
        [routeLinks]="true" 
        [showGrid]="true"
        [linkHeadShapeSize] = "5"
        [backBrush]="'lightcyan'"
        (onNodeCreated)="onDiagramNodeCreated($event)"
        (onNodeDeleted)="onNodeDeleted($event)"
        (onLinkCreated)="onLinkCreated($event)"
        (onLinkDeleted)="onLinkDeleted($event)">
        </diagram-view>
    </div>
    <div class="sidebar">
      <h1>About this sample</h1>
      <p>A sample page that shows the basic functionality of Angular DiagramView.</p>
    </div>
  </div>

  <div class="footer">
    <p>Copyright 2020 MindFusion LLC.</p>
  </div>

</div>`
})
export class MinApp implements OnInit{
    

  diagram: Diagram;
  nodes: number;
  links: number;

  ngOnInit(): void{

    this.diagram = new Diagram();
    this.diagram.setShadowsStyle(MindFusion.Diagramming.ShadowsStyle.None);

    var shapeNode = this.diagram.getFactory().createShapeNode(20, 10, 50, 50);
    var tableNode = this.diagram.getFactory().createTableNode(100, 10, 50, 50);
    this.diagram.getFactory().createDiagramLink(shapeNode, tableNode);

    this.nodes = this.diagram.getNodes().length;
    this.links = this.diagram.getLinks().length;

  }

  onLinkCreated(event){
    this.links = this.diagram.getLinks().length;
  }
  onLinkDeleted(event){
    this.links = this.diagram.getLinks().length;
  }

  onDiagramNodeCreated(event) {
    var node = event.args.getNode();
    if (node instanceof MindFusion.Diagramming.TableNode) {
      node.setText("Table");
    }else if (node instanceof MindFusion.Diagramming.ContainerNode) {
      node.setText("Container");
      node.setFoldable(true);
    }
    this.nodes = this.diagram.getNodes().length;
  }
  onNodeDeleted(event){
    this.nodes = this.diagram.getNodes().length;
  }

  onBehaviorChange(e) {
    this.diagram.setBehavior(+e.target.value);
  }
}