<template>
  <div class="history">
    Event: {{this.scores[0].eventName}}
    <historyScore v-for="score in scores" :scoreProp="score" :key="score._id" />
  </div>
</template>


<script>
import historyScore from "../components/HistoryScoreComponent";
export default {
  name: "history",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    scores() {
      return this.$store.state.oneEventScores;
    }
  },
  methods: {},
  components: { historyScore }
};
</script>


<style scoped>
</style>