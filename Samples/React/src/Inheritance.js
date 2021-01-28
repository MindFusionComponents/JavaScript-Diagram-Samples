import React, { Component } from 'react';
import Info from './Info';
import mf from 'diagram-library';
import { DiagramView } from 'diagram-library-react';

class Inheritance extends Component {
  constructor(props) {
    super(props);

    mf.Diagramming.TableNode.prototype.useScrollBars = true;
    mf.Diagramming.ScrollBar.prototype.background = "#e0e9e9";
    mf.Diagramming.ScrollBar.prototype.foreground = "DarkGray";

    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    this.createClassDiagram(diagram,
      [
        "MindFusion.Diagramming.DiagramItem",
        "MindFusion.Diagramming.DiagramLink",
        "MindFusion.Diagramming.DiagramNode",
        "MindFusion.Diagramming.ShapeNode",
        "MindFusion.Diagramming.TableNode",
        "MindFusion.Diagramming.ContainerNode",
        "MindFusion.Diagramming.FreeFormNode",
        "MindFusion.Diagramming.SvgNode"
      ]);

    // set the model diagram in state
    this.state = {
      diagram: diagram
    };
  }

  createClassDiagram(diagram, classes) {
    var classConstructors = [];

    // create a table node for each class
    for (var i = 0; i < classes.length; i++) {
      var className = classes[i];
      var node = diagram.getFactory().createTableNode(20, 20, 42, 42);
      node.redimTable(1, 0);
      node.setText(className.substr(className.lastIndexOf(".") + 1));
      node.setBrush("white");
      node.setCaptionBackBrush("#c0c0c0");
      node.setCaptionFont(
        new mf.Drawing.Font("sans-serif", 3, true /*bold*/, true /*italic*/));
      node.setScrollable(true);

      var ctor = eval(className);
      for (var property in ctor.prototype) {
        node.addRow();
        node.getCell(0, node.rows.length - 1).setText(property);
      }
      classConstructors.push(ctor);
      ctor.classNode = node;
    }

    // create a diagram link for each prototype inheritance
    classConstructors.forEach(function (ctor) {
      var base = this.getBaseType(ctor);
      if (base && base.classNode) {
        var link = diagram.factory.createDiagramLink(
          base.classNode,
          ctor.classNode);
        link.setHeadShape(null);
        link.setBaseShape("Triangle");
        link.setBaseShapeSize(3);
      }
    }, this);

    // arrange as a tree
    var treeLayout = new mf.Graphs.TreeLayout();
    treeLayout.linkType = mf.Graphs.TreeLayoutLinkType.Cascading;
    diagram.arrange(treeLayout);
  }

  getBaseType(ctor) {
    // if class registered using MindFusion.registerClass
    if (ctor.__baseType)
      return ctor.__baseType;

    // if  prototypical inheritance with Child.prototype = new Parent()
    if (ctor.prototype && ctor.prototype.constructor !== ctor)
      return ctor.prototype.constructor;

    return null;
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        </div>
        <div className="container">
          <div className="main">
            <DiagramView diagram={this.state.diagram} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>This sample page shows how to build a class inheritance diagram. 
              Classes are represented by instances of the TableNode class. Each property of the class prototype is 
              listed in a TableNode cell. 
              Finally, the diagram is arranged using the TreeLayout algorithm.</p>
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


export default Inheritance;
