<template>
  <div>
    <img :alt="imgAlt" src="./assets/logo.png" width="100" />
    <form v-show="people != null" id="search">
      Search <s>Your Feelings</s> Users:
      <input name="query" v-model="searchQuery" />
    </form>

    <UserTable
      @toggle-popup="togglePopup"
      :planets="planets"
      :users="people"
      :columns="gridColumns"
      :filter-key="searchQuery"
      :ready="ready"
    >
    </UserTable>

    <PlanetPopup
      v-if="displayPopup"
      @toggle-popup="togglePopup"
      :name="planet.name"
      :diameter="planet.diameter"
      :climate="planet.climate"
      :population="planet.population"
    ></PlanetPopup>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchQuery = ref("");
</script>

<script>
import PlanetPopup from "./components/popup/Popup";
import UserTable from "./components/table/UserTable.vue";
import axios from "axios";

export default {
  name: "App",
  metaInfo: {
    title: "New Title",
  },
  setup() {
    return {
      PlanetPopup,
    };
  },
  components: {
    UserTable,
  },
  methods: {
    testFunc(n) {
      this.testStr = n;
    },
    togglePopup(planet) {
      if (planet != null) {
        this.planet.name = planet.name;
        this.planet.diameter = planet.diameter;
        this.planet.climate = planet.climate;
        this.planet.population = planet.population;
      }
      this.displayPopup = !this.displayPopup;
    },
  },
  data() {
    return {
      ready: false,
      displayPopup: false,
      imgAlt: "Page logo image",
      people: [],
      planet: {},
      planets: [],
      gridColumns: ["name", "height", "mass", "created", "edited", "homeworld"],
    };
  },
  mounted() {
    document.title = "Joe O'Regan SWAPI App";

    let personPage = 1,
      planetPage = 1,
      nextPlanetPage = "",
      nextPersonPage = "";

    (async () => {
      while (nextPersonPage != null) {
        await axios
          .get(
            "https://swapi.tech/api/people/?page=" + personPage + "&format=json"
          )
          .then((response) => {
            this.people = this.people.concat(response.data.results);
            nextPersonPage = response.data.next;
          })
          .catch((errors) => {
            console.error(errors);
          })
          .finally(() => {
            console.log("People Page " + personPage + " Loaded");
            personPage++;
          });
      }
      console.log("All Users Loaded");
      if (nextPlanetPage == null && nextPersonPage == null) this.ready = true;
      if (this.ready) console.log("Ready: " + this.ready);
    })();

    (async () => {
      while (nextPlanetPage != null) {
        await axios
          .get(
            "https://swapi.tech/api/planets/?page=" + planetPage + "&format=json"
          )
          .then((response) => {
            this.planets = this.planets.concat(response.data.results);
            nextPlanetPage = response.data.next;
          })
          .catch((errors) => {
            console.error("I have a bad feeling about this: " + errors);
          })
          .finally(() => {
            console.log("Planets Page " + planetPage + " Loaded");
            planetPage++;
          });
      }
      console.log("All Home Planets Loaded");
      if (nextPlanetPage == null && nextPersonPage == null) this.ready = true;
      if (this.ready) console.log("Ready: " + this.ready);
    })();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
