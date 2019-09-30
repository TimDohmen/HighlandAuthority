<template>
  <div class="CreatedGames col-5 bgGame mx-auto" @click="showButton = !showButton">
    <h4>{{gameProp.name}}</h4>
    <h6>Location: {{gameProp.location}} - Date: {{this.gameDate}}</h6>
    <div v-if="showButton">
      <button
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#Edit-Game-Modal"
      >Edit Game Info</button>
    </div>
    <EditGameModal />
  </div>
</template>


<script>
import EditGameModal from "../components/EditGame";
export default {
  name: "CreatedGames",
  props: ["gameProp"],
  data() {
    return {
      showButton: false
    };
  },
  computed: {
    gameDate() {
      let date = new Date(this.gameProp.date);
      return date.toLocaleDateString();
    }
  },
  methods: {},
  components: { EditGameModal }
};
</script>


<style scoped>
.bgGame {
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px;
  border-radius: 5px;
}
.CreatedGames:hover {
  cursor: pointer;
}
</style>