<template>
  <div class="container">
    <div class="wrapper">
      <div class="scroll-text">
        <h1>STAR WARS API</h1>

        <h2>Front-end developer assignment</h2>

        <p>
          Table implemented containing a list of users with the following
          columns: name, height, mass, created, edited, planet name
        </p>
        <p>
          When the user clicks on the planet name link a popup is displayed
          showing the following information regarding the planet: name,
          diameter, climate, population
        </p>
        <p>
          The user can sort the table by each column by clicking on the column
          heading. The user can filter by searching the person's name. Entering
          the wrong name displays a Jedi Mind Trick gif.
        </p>
        <p>
          Created with VueJS using a bunch of tutorials. Credit to iamshaunjp on
          YouTube/GitHub for this scrolling text effect, that has nothing to do
          with the assignment but looks cool.
        </p>
        <p>Created by Joe O'Regan who could really do with a job.</p>
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
@import "./style.css";
</style>