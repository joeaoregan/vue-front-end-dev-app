<template>
  <div class="popup">
    <div v-if="display" class="popup-inner">
      <h1>{{ name }}</h1>
      <p>
        <span><strong>Diameter:</strong> {{ formatStringOrNumber(diameter) }}</span><br />
        <strong>Climate:</strong> {{ climate }}<br />
        <strong>Population:</strong> {{ formatStringOrNumber(population) }}
      </p>
      <button
        class="popup-close button"
        @click="$emit('togglePopup', 'close button pressed')"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanetPopup",
  props: {
    name: String,
    diameter: String,
    climate: String,
    population: String,
  },
  data() {
    return {
      display: true,
    };
  },
  methods: {
      capitalFirstLetter(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
      },
      formatStringOrNumber(string) {
          return parseInt(string) ? parseInt(string).toLocaleString() : this.capitalFirstLetter(string)
      }
  }
};
</script>

<style scoped>
@import './style.css';
</style>