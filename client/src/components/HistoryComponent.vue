<template>
  <div class="history mx-auto col-md-2 mb-2 card mt-2 db-bordero">
    <u @click="showHistory = !showHistory" class="historyPart">Click Event To See Full Event History</u>
    <div class="historyCol" v-if="showHistory">
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
      showHistory: true
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
  overflow-y: hidden;
  margin-bottom: 10px;
}
.historyCol {
  overflow: scroll;
  height: 100%;
}

.history {
  position: relative;
  float: right;
  min-width: 200px;
  height: 120vh;
}
.db-bordero {
  color: black;
}
</style>