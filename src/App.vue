<template>
  <div id="app"><NavBar /><halls /></div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import selectionPane2 from "./components/selectionPane2";
import lodgingPane from "./components/lodgingPane";
import halls from "./components/halls";

export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
    //selectionPane,
    selectionPane2,
    lodgingPane,
    halls
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
