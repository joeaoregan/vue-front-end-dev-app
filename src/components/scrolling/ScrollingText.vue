<template>
  <div class="container">
    <div class="wrapper">
      <div class="scroll-text">
        <h1>STAR WARS API</h1>

        <h2>Front-end developer assignment</h2>

        <p>
          Table implemented containing a list of users with the following columns: name, height, mass, created, edited, planet name
        </p>
        <p>
          When the user clicks on the planet name link a popup is displayed showing the following information regarding the planet: name, diameter, climate, population
        </p>
        <p>
          The user can sort the table by each column. The user can filter by searching the person,s name.
        </p>
        <p>
          Created with VueJS. Credit to iamshaunjp on YouTube/GitHub for this scrolling text effect, that has nothing to do with the assignment but looks cool.
        </p>
        <p>
          Created by Joe O'Regan who could really do with a job.
        </p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollingText",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap");

.container {
  background: rgb(20, 20, 20);
  /* background: red; */
  overflow: hidden;
  font-family: "Roboto";
  /* push down the the wrapper by half the page */
  /* margin: 50% 0 0 0; */
  position: absolute;
}
.container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 25%;
  /* background to fade out the text as it goes up */
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 1) 40%,
    rgba(20, 20, 20, 0) 100%
  );
}
.wrapper {
  display: flex;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  /* perspective gives us a 3d space within the element to work with*/
  /* perspective also has the effect of pushing the content "down" */
  perspective: 450px;
}
.scroll-text {
  color: #ffc909;
  font-size: 3vw;
  line-height: 1.5em;
  font-weight: bold;
  text-align: justify;
  position: relative;
  animation: scroll 60s linear forwards;
}
h1,
h2 {
  text-align: center;
}

@keyframes scroll {
  from {
    top: 0;
    transform: translateZ(0) rotateX(20deg);
  }
  to {
    top: -7500px;
    transform: translateZ(-2500px) rotateX(21deg);
  }
}
</style>