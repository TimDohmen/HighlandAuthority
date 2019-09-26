<template>
  <div class="openStone">
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