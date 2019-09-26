<template>
  <div class="historyScore">
    Distance: {{scoreProp.topAttempt}}
    Game: {{scoreProp.gamesId.name}}
    Date: {{this.dateTest}}
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
      return this.scoreProp.createdAt.split("T")[0];
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>