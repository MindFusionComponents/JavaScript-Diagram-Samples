import React, { Component } from 'react';
import Info from './Info';
import mf from 'diagram-library';
import { DiagramView } from 'diagram-library-react';

class MinApp extends Component {
  constructor(props) {
    super(props);

    // create the diagram
    var diagram = new mf.Diagramming.Diagram();
    diagram.setShadowsStyle(mf.Diagramming.ShadowsStyle.None);

    var shapeNode = diagram.getFactory().createShapeNode(20, 10, 50, 50);
    var tableNode = diagram.getFactory().createTableNode(100, 10, 50, 50);
    diagram.getFactory().createDiagramLink(shapeNode, tableNode);

    // set the model diagram in state
    this.state = {
      diagram: diagram,
      nodes: 2,
      links: 1,
      behavior: mf.Diagramming.Behavior.LinkShapes
    };
  }

  onDiagramChanged(sender, args) {
    this.setState({
      nodes: this.state.diagram.nodes.length,
      links: this.state.diagram.links.length,
    })
  }

  onDiagramNodeCreated(sender, args) {
    var node = args.getNode();
    if (node instanceof mf.Diagramming.TableNode) {
      node.setText("Table");
    }
    else if (node instanceof mf.Diagramming.ContainerNode) {
      node.setText("Container");
      node.setFoldable(true);
    }
  }

  onBehaviorChange(e) {
    this.setState({ behavior: +e.target.value });
  }

  render() {
    var props = {
      "allowInplaceEdit": true,
      "routeLinks": true,
      "showGrid": true,
      "backBrush": "lightcyan",
      "behavior": this.state.behavior
    };

    return (
      <div className="App">
        <div className="header">
          Behavior
          <select id="behavior" onChange={this.onBehaviorChange.bind(this)}>
            <option value="3">LinkShapes</option>
            <option value="4">LinkTables</option>
            <option value="11">LinkContainers</option>
            <option value="26">LinkFreeShapes</option>
            <option value="0">Modify</option>
          </select>

          <span>{"Nodes count: " + this.state.nodes}</span>
          <span>{"Links count: " + this.state.links}</span>
        </div>

        <div className="container">
          <div className="main">
            <DiagramView diagram={this.state.diagram} {...props}
              onDiagramChanged={(sender, args) => this.onDiagramChanged(sender, args)}
              onNodeCreated={(sender, args) => this.onDiagramNodeCreated(sender, args)} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>A sample page that shows the basic functionality of React DiagramView.</p>
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


export default MinApp;
