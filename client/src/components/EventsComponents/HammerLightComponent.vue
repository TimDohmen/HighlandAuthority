<template>
  <div class="hammerLight card">
    Event: Hammer Light
    <p>PR: {{this.hiScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "hammerLight",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiHammerLScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiHammerLScores", {
        userId: this.$route.params.userId,
        eventName: "hammer-light"
      });
    } else
      this.$store.dispatch("getHiHammerLScores", {
        userId: this.user._id,
        eventName: "hammer-light"
      });
  }
};
</script>


<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>