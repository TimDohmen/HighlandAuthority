<template>
  <div class="historyScore">
    <dl>
      <dt>Distance: {{scoreProp.topAttempt}}</dt>
      <dt>Game: {{scoreProp.gamesId.name}}</dt>
      <dt>Date: {{this.dateTest}}</dt>
      <dt>Class: {{scoreProp.throwingClass}}</dt>
    </dl>
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
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>