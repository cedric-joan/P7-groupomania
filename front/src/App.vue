<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar},
  
};
</script>

<template>
  <NavBar ></NavBar>
  <router-view />
</template>

<style>


</style>
