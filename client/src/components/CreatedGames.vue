<template>
  <div class="CreatedGames col-sm-5 col-md-5 bgGame mx-auto">
    <div @click="showButton = !showButton" class="show">
      <h4>{{gameProp.name}}</h4>
      <h6>Location: {{gameProp.location}} - Date: {{this.gameDate}}</h6>
    </div>
    <div v-if="showButton">
      <button
        class="btn btn-warning"
        data-toggle="modal"
        :data-target="'#edit-game' + gameProp._id"
      >Edit Game Info</button>
    </div>
    <EditGameModal :individualGameProp="gameProp" :key="gameProp._id" />
  </div>
</template>


<script>
import EditGameModal from "../components/EditGame";
import moment from "moment";
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
      let date = moment(this.gameProp.date)
        .utcOffset(7)
        .format("MM-DD-YYYY");
      return date;
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
.show:hover {
  cursor: pointer;
}
</style>