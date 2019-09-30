<template>
  <div class="CreatedGames col-5 bgGame mx-auto">
    <h4>{{gameProp.name}}</h4>
    <h6>Location: {{gameProp.location}} - Date: {{this.gameDate}}</h6>
  </div>
</template>


<script>
export default {
  name: "CreatedGames",
  props: ["gameProp"],
  data() {
    return {};
  },
  computed: {
    gameDate() {
      let date = new Date(this.gameProp.date);
      return date.toLocaleDateString();
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.bgGame {
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px;
  border-radius: 5px;
}
</style>