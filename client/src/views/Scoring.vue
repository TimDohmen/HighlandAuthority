<template>
  <div class="scoring"></div>
</template>


<script>
export default {
  name: "scoring",
  data() {
    return {};
  },
  mounted() {
    this.getAthletes();
  },
  computed: {},
  methods: {
    getAthletes() {
      this.$store.dispatch("getAthletes");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>