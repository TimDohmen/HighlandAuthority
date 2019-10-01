<template>
  <div class="scoring">
    <ScoresheetComponent />
  </div>
</template>


<script>
import ScoresheetComponent from "../components/ScoresheetComponent";
export default {
  name: "scoring",
  data() {
    return {};
  },
  mounted() {
    this.getAthletes();
    this.getGames();
  },
  computed: {
    athletes() {
      return this.$store.state.athletes;
    }
  },
  methods: {
    getAthletes() {
      this.$store.dispatch("getAthletes");
    },
    getGames() {
      this.$store.dispatch("getGames");
    }
  },
  components: { ScoresheetComponent }
};
</script>


<style scoped>
</style>