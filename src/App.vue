<template>
  <div>
    <img :alt="imgAlt" src="./assets/logo.png" width="100" />
    <form v-show="people != null" id="search">
      Filter: <input name="query" v-model="searchQuery" />
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
    document.title = "Joe O'Regan App";

    let page = 1;
    let next = "";

    (async () => {
      while (next != null) {
        await axios
          .get("https://swapi.dev/api/people/?page=" + page++ + "&format=json")
          .then((response) => {
            this.people = this.people.concat(response.data.results);
            next = response.data.next;
          })
          .catch((errors) => {
            console.error(errors);
          });
      }

      page = 1;
      next = "";

      while (next != null) {
        await axios
          .get("https://swapi.dev/api/planets/?page=" + page++ + "&format=json")
          .then((response) => {
            this.planets = this.planets.concat(response.data.results);
            next = response.data.next;
          })
          .catch((errors) => {
            console.error('I have a bad feeling about this: ' + errors);
          });
      }
      this.ready = true;
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
