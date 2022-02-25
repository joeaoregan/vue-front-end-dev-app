<template>
  <div class="navbar">
     <a href="https://www.linkedin.com/in/joeaoregan/" target="_blank" title="Joe O'Regan - LinkedIn" class="link"><img alt="LinkedIn" src="../../assets/linkedin_logo.png" width="30" /></a>
     <a href="https://github.com/joeaoregan/" target="_blank" title="Joe O'Regan - GitHub"><img alt="GitHub" src="../../assets/github_logo.png" width="30" /></a>
      
  </div>
</template>

<script>
export default {
  name: "NavBar",
  };
</script>

<style>
.navbar {
    position: fixed;
    top: 0;
    height: 30px;
    color: white;
    background-color: black;
    padding: 10px;
}
.link {
    padding-right: 10px;
}
</style>