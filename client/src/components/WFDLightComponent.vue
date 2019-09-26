<template>
  <div class="WFDLight">
    Event Name: W4D Light
    <p>PR: {{this.hiScore.topAttempt}}</p>
  </div>
</template>


<script>
export default {
  name: "WFDLight",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiWFDLScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    this.$store.dispatch("getHiWFDLScores", {
      userId: this.user._id,
      eventName: "w4d-light"
    });
  }
};
</script>


<style scoped>
</style>