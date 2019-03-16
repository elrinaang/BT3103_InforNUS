<template>
  <div id="app">
    <NavBar /> <halls />

    <!--
      <router-link :to="{ name: 'home' }">Hello</router-link>
      <router-view></router-view>
    -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import halls from "./components/halls.vue";
export default {
  name: "App",
  components: {
    NavBar,
    HomePage,
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
