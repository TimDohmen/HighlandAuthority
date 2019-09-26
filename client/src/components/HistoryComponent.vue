<template>
  <div class="history">hello</div>
</template>


<script>
export default {
  name: "history",
  mounted() {    
  },
  data() {
    return {};
  },
  computed: {
scores(){
  return this.$store.state.oneEventScores
}
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>