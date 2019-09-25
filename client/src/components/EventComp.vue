<template>
  <div class="PR">
    <p>Stuff</p>
  </div>
</template>

<script>
export default {
  name: "PR",
  mounted() {
    this.$store.dispatch("getScoresById", this.user._id);
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
    // eventName(){
    //   return this.$store.state.scores.eventName;
    // }
  },
  methods: {
    findPR() {}
  }
};
</script>