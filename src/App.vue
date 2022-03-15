<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar/navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
