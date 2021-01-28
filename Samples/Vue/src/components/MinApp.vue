<template>
  <div class="App">
    <div class="header">
      Behavior
      <select id="behavior" v-on:change="onBehaviorChanged($event)">
        <option value="3">LinkShapes</option>
        <option value="4">LinkTables</option>
        <option value="11">LinkContainers</option>
        <option value="26">LinkFreeShapes</option>
        <option value="0">Modify</option>
      </select>

      <span>Nodes count: {{this.nodes}}</span>
      <span>Links count: {{this.links}}</span>
    </div>

    <div class="container">
      <div class="main">
        <diagram-view
          id="diagram"
          :diagram="this.diagram"
          :allow-inplace-edit=true
          :route-links=true
          :show-grid=true
          :behavior="this.behavior"
          back-brush="lightcyan"
          v-on:node-created="onDiagramNodeCreated"
          v-on:diagram-changed="onDiagramChanged"
        />
      </div>
      <div class="sidebar">
        <h1>About this sample</h1>
        <p>A sample page that shows the basic functionality of Vue DiagramView.</p>
        <Info />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
import * as mf from "diagram-library";
import { DiagramView } from "diagram-library-vue";

export default {
  name: "MinApp",
  created: function() {
    // create the diagram
    var diagram = new mf.Diagramming.Diagram();
    diagram.setShadowsStyle(mf.Diagramming.ShadowsStyle.None);

    var shapeNode = diagram.getFactory().createShapeNode(20, 10, 50, 50);
    var tableNode = diagram.getFactory().createTableNode(100, 10, 50, 50);
    diagram.getFactory().createDiagramLink(shapeNode, tableNode);

    this.diagram = diagram;
  },
  methods: {
    onBehaviorChanged: function(e) {
      this.behavior = +e.target.value;
    },
    onDiagramNodeCreated: function(sender, args) {
      var node = args.getNode();
      if (node instanceof mf.Diagramming.TableNode) {
        node.setText("Table");
      } else if (node instanceof mf.Diagramming.ContainerNode) {
        node.setText("Container");
        node.setFoldable(true);
      }
    },
    onDiagramChanged: function() {
      this.nodes = this.diagram.nodes.length;
      this.links = this.diagram.links.length;
    }
  },
  data() {
    return {
      diagram: null,
      nodes: 2,
      links: 1,
      behavior: mf.Diagramming.Behavior.LinkShapes
    };
  },
  components: {
    DiagramView,
    Info
  }
};
</script>

