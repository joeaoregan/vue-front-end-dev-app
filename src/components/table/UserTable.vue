<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  planets: Array,
  users: Array,
  columns: Array,
  filterKey: String,
});
const sortKey = ref("");
const sortOrders = ref(props.columns.reduce((o, key) => ((o[key] = 1), o), {}));

const filteredData = computed(() => {
  let { users, filterKey } = props;
  if (filterKey) {
    filterKey = filterKey.toLowerCase();
    users = users.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
      });
    });
  }
  const key = sortKey.value;
  if (key) {
    const order = sortOrders.value[key];
    users = users.slice().sort((a, b) => {
      a = a[key];
      b = b[key];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
  return users;
});

function sortBy(key) {
  sortKey.value = key;
  sortOrders.value[key] *= -1;
}
</script>

<script>
export default {
  name: "UserTable",
  props: {
    ready: Boolean,
  },
  data() {
    return {
      planetDetails: "These are not the users you are looking for",
    };
  },
  methods: {
    capitalFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    getPlanetName(url) {
      function isPlanet(planet) {
        return planet.url === url;
      }

      if (this.planets.find(isPlanet)) {
        var p = this.planets.find(isPlanet);
        return {
          name: p.name,
          diameter: p.diameter,
          climate: this.capitalFirstLetter(p.climate),
          population: p.population,
        };
      } else {
        return { name: "Unknown" };
      }
    },
    formatOutput(key, text) {
      if (key === "created" || key == "edited") {
        var date = new Date(text);
        return new Intl.DateTimeFormat("en-IE", {
          dateStyle: "short",
          timeStyle: "medium",
        }).format(date);
      } else if (key === "homeworld") {
        return this.getPlanetName(text);
      } else {
        return text;
      }
    },
  },
};
</script>

<template>
  <div>
    <div v-if="filteredData">
      <table v-if="filteredData.length" class="center">
        <thead>
          <tr>
            <th
              v-for="key in columns"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }"
              :key="key"
            >
              {{ capitalFirstLetter(key) }}
              <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in filteredData" :key="entry">
            <td v-for="key in columns" :key="key">
              <button
                class="button"
                v-if="
                  key === 'homeworld' &&
                  formatOutput(key, entry[key]).name != 'unknown'
                "
                @click="$emit('togglePopup', formatOutput(key, entry[key]))"
              >
                {{ formatOutput(key, entry[key]).name }}
              </button>
              <p
                v-else-if="
                  key === 'homeworld' &&
                  formatOutput(key, entry[key]).name === 'unknown'
                "
              >
                {{ capitalFirstLetter(formatOutput(key, entry[key]).name) }}
              </p>
              <p v-else>
                {{ formatOutput(key, entry[key]) }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-else>
        <div v-if="ready" id="user-not-found">
          <img
            alt="Jedi Mind Trick Image"
            src="../../assets/mind-trick.gif"
            width="400"
          />
          <p>{{ planetDetails }}</p>
        </div>
        <p v-else id="users-loading">A Long Time Ago In A Galaxy Far Away...</p>
      </div>
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>