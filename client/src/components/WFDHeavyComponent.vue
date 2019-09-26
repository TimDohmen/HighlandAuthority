<template>
  <div class="WFDHeavy">
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
    this.$store.dispatch("getHiWFDScores", {
      userId: this.user._id,
      eventName: "w4d-heavy"
    });
  }
};
</script>


<style scoped>
</style>