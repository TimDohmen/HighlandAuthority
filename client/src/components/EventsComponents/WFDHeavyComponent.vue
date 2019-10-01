<template>
  <div class="WFDHeavy card">
    Event: W4D Heavy
    <p>PR: {{this.hiScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "WFDHeavy",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiWFDScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiWFDScores", {
        userId: this.$route.params.userId,
        eventName: "w4d-heavy"
      });
    } else
      this.$store.dispatch("getHiWFDScores", {
        userId: this.user._id,
        eventName: "w4d-heavy"
      });
  }
};
</script>


<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>