<template>
  <div id="app">
    <ul class="menu">
      <li
        v-for="sample in samples"
        v-bind:key="sample"
        v-bind:class="['menu-item', { active: currentSample === sample }]"
        v-on:click="currentSample = sample">{{sample}}</li>
    </ul>
    <component v-bind:is="currentSample"></component>
    <div class="footer">
      <p>Copyright 2020 MindFusion LLC.</p>
    </div>
  </div>
</template>

<script>
import MinApp from "./components/MinApp.vue";
import Inheritance from "./components/Inheritance.vue";
import Anchors from "./components/Anchors.vue";
import FractalLayout from "./components/FractalLayout.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "App",
  created: function() {},
  data() {
    return {
      currentSample: "min-app",
      samples: ["min-app", "anchors", "inheritance", "fractal-layout", "controls"]
    };
  },
  components: {
    Anchors,
    MinApp,
    Inheritance,
    FractalLayout,
    Controls
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

ul.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li.menu-item {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
}

li.menu-item:hover {
  background-color: #535353;
}
li.menu-item.active {
  background-color: #42b983;
}
.header {
  height: 49px;
  background-color: #fafafa;
  border-bottom: 1px solid #e2e4e7;
  overflow: auto;
  text-align: left;
  padding: 5px;
}
.header * {
  margin: 4px;
}
.container {
  position: absolute;
  display: flex;
  top: 110px;
  left: 0;
  bottom: 60px;
  right: 0;
  text-align: left;
}
.main {
  flex: 1 1 100%;
  overflow: hidden;
  display: flex;
  position: relative;
}
.sidebar {
  flex: 0 0 400px;
  order: 1;
  padding-left: 15px;
  overflow-y: scroll;
}
.sidebar-left{
  flex: 0 0 220px;
  overflow-y: scroll;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #fafafa;
  border-top: 1px solid #e2e4e7;
  padding: 5px;
  text-align: center;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

