<template>
  <div class="openStone card">
    Event: Open Stone
    <p>PR: {{this.hiStoneScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "openStone",
  data() {
    return {};
  },
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiStoneScores", {
        userId: this.$route.params.userId,
        eventName: "open-stone"
      });
    } else
      this.$store.dispatch("getHiStoneScores", {
        userId: this.user._id,
        eventName: "open-stone"
      });
  },
  computed: {
    hiStoneScore() {
      return this.$store.state.hiStoneScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>