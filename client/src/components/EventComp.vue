<template>
  <div class="event"></div>
</template>

<script>
export default {
  name: "event",
  mounted() {
    this.$store.dispatch("getScoresById", user._id); //FIXME Scores in store
  },
  data() {},
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {}
};
</script>