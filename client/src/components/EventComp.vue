<template>
  <div class="PR">
    <p>Stuff</p>
  </div>
</template>

<script>
export default {
  name: "PR",
  mounted() {
    debugger;
    this.$store.dispatch("getScoresById", this.user._id); //FIXME Scores in store
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {}
};
</script>