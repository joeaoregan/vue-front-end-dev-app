<template>
  <div class="navbar">
    <div class="icon">
      <a href="./" title="Home" class="link"
        ><img alt="home" src="../../assets/logo2.png" width="30"
      /></a>
    </div>
    <div class="icon">
      <a href="#/about" title="About" class="link"
        ><img alt="about" src="../../assets/info.png" width="30"
      /></a>
    </div>
    <div class="icon">
      <a
        href="https://www.linkedin.com/in/joeaoregan/"
        :target="newTab"
        :title="titleLinkedIn"
        class="link"
        ><img alt="LinkedIn" src="../../assets/linkedin_logo.png" width="30"
      /></a>
    </div>
    <div class="icon">
      <a
        href="https://github.com/joeaoregan/"
        :target="newTab"
        :title="titleGitHub"
        ><img alt="GitHub" src="../../assets/github_logo.png" width="30"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      titleLinkedIn: "Joe O'Regan - LinkedIn",
      titleGitHub: "Joe O'Regan - GitHub",
      newTab: "_blank",
    };
  },
};
</script>

<style>
@import "./style.css";
</style>