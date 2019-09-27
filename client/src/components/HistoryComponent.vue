<template>
  <div class="history card mt-2">
    <u
      @click="showHistory = !showHistory"
      class="historyPart"
    >Click Event Then Click Here To Show Event History</u>
    <div v-if="showHistory">
      Event: {{this.scores[0].eventName}}
      <historyScore v-for="score in scores" :scoreProp="score" :key="score._id" />
    </div>
  </div>
</template>


<script>
import historyScore from "../components/HistoryScoreComponent";
export default {
  name: "history",
  mounted() {},
  data() {
    return {
      showHistory: false
    };
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
p:hover {
  cursor: pointer;
}
.historyPart {
  cursor: pointer;
}
</style>