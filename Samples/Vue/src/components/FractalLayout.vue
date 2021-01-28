<template>
  <div class="App">
    <div class="header">
      <button v-on:click="onRandomTree($event)">Random tree</button>
      <button v-on:click="onZoomIn($event)">Zoom in</button>
      <button v-on:click="onZoomOut($event)">Zoom out</button>
    </div>

    <div class="container">
      <div class="main">
        <diagram-view
          id="diagram"
          :diagram="this.diagram"
          :link-head-shape-size="2"
          :behavior="this.behavior"
        />
      </div>
      <div class="sidebar">
        <h1>About this sample</h1>
        <p>Click the button to create a random tree and arrange it using the FractalLayout algorithm.</p>
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
  name: "FractalLayout",
  created: function() {
    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    this.diagram = diagram;
    this.brushes = ["#9caac6", "#ce0000", "#c0c0c0"];
  },
  methods: {
    onRandomTree: function() {
      this.diagram.clearAll();

      // create the root node
      var rect = new mf.Drawing.Rect(0, 0, 15, 10);
      var node = new mf.Diagramming.ShapeNode(this.diagram);
      var brush = this.brushes[0];
      node.setBounds(rect);
      node.setBrush(brush);
      node.setStroke(this.brushes[1]);
      this.diagram.addItem(node);

      // add random children
      this.randomTree(node, 5, 4);

      this.applyLayout();
      this.diagram.setZoomFactor(8);
    },
    randomTree: function(node, depth, minChildren) {
      if (depth <= 0) return;

      var diagram = node.getParent();
      var children = this.randomInt(depth) - 1 + minChildren;
      var brush = this.brushes[0];
      while (brush === node.getBrush()) brush = this.brushes[1];

      if (diagram.nodes.length < 3 && children < 2) children = 2;

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
    },
    applyLayout: function() {
      var layout = new mf.Graphs.FractalLayout();
      layout.root = this.diagram.nodes[0];
      this.diagram.arrange(layout);
      this.fitItems(this.diagram);
    },

    randomInt: function(max) {
      return Math.floor(max * Math.random());
    },

    fitItems: function(diagram) {
      var rect = mf.Drawing.Rect.empty;
      diagram.nodes.forEach(function(node) {
        if (rect === mf.Drawing.Rect.empty) rect = node.bounds;
        else rect = rect.union(node.bounds);
      });

      if (rect)
        diagram.setBounds(
          new mf.Drawing.Rect(0, 0, rect.right() + 10, rect.bottom() + 10)
        );
    },

    onZoomIn: function() {
      if (this.diagram.zoomFactor > 200) return;
      this.diagram.setZoomFactor(this.diagram.zoomFactor + 10);
    },

    onZoomOut: function() {
      if (this.diagram.zoomFactor < 19) return;
      this.diagram.setZoomFactor(this.diagram.zoomFactor - 10);
    }
  },
  data() {
    return {
      diagram: null,
      behavior: mf.Diagramming.Behavior.Pan
    };
  },
  components: {
    DiagramView,
    Info
  }
};
</script>

