<template>
  <div class="PR">
    <p>Stuff and things</p>
  </div>
</template>

<script>
export default {
  name: "PR",
  mounted() {
    // this.$store.dispatch("getScoresById", this.user._id); //FIXME Scores in store
    this.$store.dispatch("getOpenStones", this.user._id); //FIXME Scores in store
  },
  data() {
    return {
      Events: [
        "Hammer Heavy",
        "Hammer Light",
        "W4D Heavy",
        "W4D Light",
        "Braemar",
        "OpenStone"
      ]
    };
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