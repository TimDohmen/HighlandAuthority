<template>
  <div class="hammerLight">
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
</style>