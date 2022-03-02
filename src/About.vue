<template>
  <div>
    <Navbar></Navbar>
    <ScrollingText></ScrollingText>
  </div>
</template>

<script>
import ScrollingText from "./components/scrolling/ScrollingText.vue";
import Navbar from "./components/navbar/navbar.vue";
export default {
  name: "AboutPage",
  components: {
    ScrollingText,
    Navbar,
  },
};
</script>
