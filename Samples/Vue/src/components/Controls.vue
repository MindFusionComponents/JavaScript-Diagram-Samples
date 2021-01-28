<template>
  <div class="App">
    <div class="header"></div>

    <div class="container">
      <div class="main">
        <div class="sidebar-left">
          <overview :diagram="this.diagram" :style="{width:'200px', height:'300px'}" />
          <node-list-view :nodes="this.nodes" :captions="this.shapes" />
        </div>
        <div class="main">
          <zoom-control
            :diagram="this.diagram"
            :style="{ position: 'absolute', right: '20px', top: '30px', zIndex: 2 }"
          />
          <ruler :style="{width: '100%'}">
            <diagram-view
              id="diagram"
              :diagram="this.diagram"
              :style="{ position: 'absolute', height:'auto', width: 'auto', left: '0px', right: '0px', top: '0px',bottom: '0px'}"
            />
          </ruler>
        </div>
      </div>
      <div class="sidebar">
        <h1>About this sample</h1>
        <p>
          This sample demonstrates the auxilliary controls available with Vue Diagram: NodeListView,
          Overview, ZoomControl and Ruler. The NodeListView implements a list-box control that contains
          DiagramNode objects and allows dragging them to the DiagramView control. The Overview
          provides a scaled-down view of the DiagramView content and lets the user scroll
          the bound view. The ZoomControl lets users zoom and pan the target DiagramView interactively.
          The Ruler control provides horizontal and vertical scales that help users measure and align diagram items.
        </p>
        <Info />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
import * as mf from "diagram-library";
import { DiagramView, NodeListView, Overview, ZoomControl, Ruler } from "diagram-library-vue";

export default {
  name: "Controls",
  created: function() {
    // create the diagram
    var diagram = new mf.Diagramming.Diagram();

    var theme = new mf.Diagramming.Theme();
    var shapeNodeStyle = new mf.Diagramming.Style();
    shapeNodeStyle.setBrush({ type: "SolidBrush", color: "#e0e9e9" });
    shapeNodeStyle.setStroke("#7F7F7F");
    shapeNodeStyle.setFontName("Verdana");
    shapeNodeStyle.setFontSize(4);
    shapeNodeStyle.setNodeEffects([new mf.Diagramming.GlassEffect()]);
    theme.styles["std:ShapeNode"] = shapeNodeStyle;
    diagram.setTheme(theme);

    // add some nodes to the NodeListView
    this.nodes = [];
    this.shapes = ["Actor", "RoundRect", "Triangle", "Decision"];
    for (var i = 0; i < this.shapes.length; ++i) {
      var node = new mf.Diagramming.ShapeNode(diagram);
      node.setText(this.shapes[i]);
      node.setShape(this.shapes[i]);

      this.nodes.push(node);
    }
    this.diagram = diagram;
  },
  methods: {},
  data() {
    return {
      diagram: null
    };
  },
  components: {
    DiagramView,
    NodeListView,
    Overview,
    ZoomControl,
    Ruler,
    Info
  }
};
</script>

