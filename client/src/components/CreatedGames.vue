<template>
  <div class="CreatedGames">
    <div class="col-4">
      <h1>{{gameProp.name}}</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "CreatedGames",
  props: ["gameProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>