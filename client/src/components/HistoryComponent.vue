<template>
  <div class="history">
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