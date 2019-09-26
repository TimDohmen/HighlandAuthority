<template>
  <div class="hammerHeavy">
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
    this.$store.dispatch("getHiHammerHScores", {
      userId: this.user._id,
      eventName: "hammer-heavy"
    });
  }
};
</script>


<style scoped>
</style>