<template>
  <div class="score-sheet"></div>
</template>


<script>
export default {
  name: "score-sheet",
  data() {
    return {};
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
    athletes() {
      return this.$store.state.athletes;
    }
  },
  methods: {
    gamelist() {
      return this.$store.state.games;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>