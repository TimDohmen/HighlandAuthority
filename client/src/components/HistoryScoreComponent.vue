<template>
  <div class="historyScore">
    Distance: {{scoreProp.topAttempt}}
    Game: {{scoreProp.gamesId.name}}
    Date: {{this.dateTest}}
    <!-- Date: {{scoreProp.gamesId.date }} -->
  </div>
</template>


<script>
export default {
  name: "historyScore",
  data() {
    return {};
  },
  props: ["scoreProp"],
  computed: {
    scores() {
      return this.$store.state.oneEventScores;
    },
    dateTest() {
      let date = new Date(this.scoreProp.gamesId.date);
      return date.toLocaleDateString();
      // return this.scoreProp.createdAt.split("T")[0];
      // return this.scoreProp.gamesId.date.toDateString();
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>