<template>
  <div class="braemar">
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
    this.$store.dispatch("getHiBraemarScores", {
      userId: this.user._id,
      eventName: "braemar"
    });
  }
};
</script>


<style scoped>
</style>