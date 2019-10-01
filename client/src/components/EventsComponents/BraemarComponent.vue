<template>
  <div class="braemar card">
    Event: Braemar
    <p>PR: {{this.hiScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "braemar",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiBraemarScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiBraemarScores", {
        userId: this.$route.params.userId,
        eventName: "braemar"
      });
    } else
      this.$store.dispatch("getHiBraemarScores", {
        userId: this.user._id,
        eventName: "braemar"
      });
  }
};
</script>


<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>