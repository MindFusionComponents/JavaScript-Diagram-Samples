import * as common from "mindfusion-common";
import * as MindFusion from "diagram-library";

import { Component } from '@angular/core';

import Diagram = MindFusion.Diagramming.Diagram;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MindFusion JsDiagram';
  
  private diagram: Diagram;
  
  ngOnInit() {
	this.diagram = Diagram.create(document.querySelector('#diagram'));
	this.diagram.setBackBrush("#d0d0d0");
    this.diagram.setBehavior(MindFusion.Diagramming.Behavior.LinkShapes);
    this.diagram.setAutoResize(MindFusion.Diagramming.AutoResize.AllDirections);
  }
}
