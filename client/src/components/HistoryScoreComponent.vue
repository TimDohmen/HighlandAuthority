<template>
  <div class="historyScore">
    <p>{{scoreProp.topAttempt}}</p>
    <p>{{scoreProp.createdAt}}</p>
  </div>
</template>


<script>
export default {
  name: "historyScore",
  data() {
    return {};
  },
  props: ["scoreProp"],
  computed: {
    scores() {
      return this.$store.state.oneEventScores;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>