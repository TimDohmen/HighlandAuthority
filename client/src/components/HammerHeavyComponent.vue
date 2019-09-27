<template>
  <div class="hammerHeavy card">
    Event: Hammer Heavy
    <p>PR: {{this.hiScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "hammerHeavy",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiHammerHScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiHammerHScores", {
        userId: this.$route.params.userId,
        eventName: "hammer-heavy"
      });
    } else
      this.$store.dispatch("getHiHammerHScores", {
        userId: this.user._id,
        eventName: "hammer-heavy"
      });
  }
};
</script>


<style scoped>
</style>