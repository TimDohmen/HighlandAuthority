<template>
  <div class="score-sheet">
    <select
      class="custom-select col-sm-12 col-md-6 mt-2"
      id="inlineFormCustomSelect"
      @change="addNewForm($event)"
    >
      <option selected>Add an athlete</option>
      <option v-for="athlete in athletes" :key="athlete._id">{{athlete.userId.name}}</option>
    </select>
    <div v-if="templateType == 'height'">
    <hr />
    <ScoreHeightEvents v-for="athlete in selectedAthletes" :key="athlete._id" :athlete="athlete" />
    </div>
    <div v-else="templateType == 'distance'">
    <hr />
    <ScoreDistanceEvents v-for="athlete in selectedAthletes" :key="athlete._id" :athlete="athlete" />
    </div>
    <button class="btn btn-primary mt-2" @click="addScores">Submit Scores</button>
  </div>
</template>


<script>
import ScoreDistanceEvents from "./ScoreDistanceEvents";
import ScoreHeightEvents from "./ScoreHeightEvents";
import NotificationService from "../NotificationService";
export default {
  name: "score-sheet",
  data() {
    return {
      selectedAthletes: [],
      templateType: "",
    };
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
    athletes() {
      return this.$store.state.athletes;
    },
    activeGame(){
      return this.$store.state.activeGame;
    }
  },
  methods: {
    gamelist() {
      return this.$store.state.games;
    },
    addNewForm(event) {
      let selectedIndex = event.target.selectedIndex - 1;
      let athlete = this.athletes[selectedIndex];
      this.selectedAthletes.push(athlete);
      if(this.activeGame.event == 'weight-over-bar' || this.activeGame.event == 'sheaf'){
        this.templateType = "height"
      }else {
        this.templateType = "distance"
      }
    },
    addScores() {
      this.selectedAthletes.forEach(a => {
        delete a._id;
      });

      this.$store.dispatch("addScores", this.selectedAthletes);
    }
  },
  components: { ScoreDistanceEvents, ScoreHeightEvents }
};
</script>


<style scoped>
</style>