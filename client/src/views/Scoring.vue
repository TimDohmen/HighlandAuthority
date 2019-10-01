<template>
  <div class="scoring">
    <div>
      <select class="custom-select col-sm-12 col-md-6" v-model="game" id="inlineFormCustomSelect">
        <option selected>Pick a game</option>
        <option v-for="game in games" :key="game._id" :value="game._id">{{game.name}}</option>
      </select>
    </div>
    <div>
      <select
        class="custom-select col-sm-12 col-md-6 mt-2"
        v-model="event"
        id="inlineFormCustomSelect"
      >
        <option selected>Pick an event</option>
        <option value="braemar">Braemar</option>
        <option value="open-stone">Open Stone</option>
        <option value="w4d-heavy">W4D Heavy</option>
        <option value="w4d-light">W4D Light</option>
        <option value="hammer-heavy">Heavy Hammer</option>
        <option value="hammer-light">Light Hammer</option>
        <option value="weight-over-bar" disabled>WOB</option>
        <option value="sheaf" disabled>Sheaf</option>
        <option value="caber" disabled>Caber</option>
      </select>
    </div>
    <div>
      <select
        class="custom-select col-sm-12 col-md-6 mt-2"
        v-model="throwingClass"
        id="inlineFormCustomSelect"
      >
        <option selected>Pick an class</option>
        <option value="pro-class">Pro Class</option>
        <option value="a-class">A Class</option>
        <option value="b-class">B Class</option>
        <option value="c-class">C-Class</option>
        <option value="novice-class">Novice Class</option>
        <option value="masters-40">Masters 40-49</option>
        <option value="masters-50">Masters 50-59</option>
        <option value="masters-60">Masters 60+</option>
        <option value="womens-open">Women's Open</option>
        <option value="womens-masters">Women's Masters</option>
        <option value="womens-pro">Women's Pro</option>
      </select>
    </div>
    <ScoresheetComponent />
    <button class="btn btn-primary mt-2" @submit="addScores">Submit Scores</button>
  </div>
</template>


<script>
import ScoresheetComponent from "../components/ScoresheetComponent";
export default {
  name: "scoring",
  data() {
    return {
      throwingClass: "",
      event: "",
      game: ""
    };
  },
  mounted() {
    this.getAthletes();
    this.getGames();
  },
  // watch: {
  //   throwingclass: function(newThrowingClass) {
  //     debugger;
  //     this.$store.commit("setThrowingClass", {
  //       athleteId: this.athlete._id,
  //       newThrowingClass
  //     });
  //   }
  // },
  computed: {
    // throwingclass() {
    //   return this.throwingClass;
    // },
    athletes() {
      return this.$store.state.athletes;
    },
    games() {
      return this.$store.state.games;
    }
  },
  methods: {
    getAthletes() {
      this.$store.dispatch("getAthletes");
    },
    getGames() {
      this.$store.dispatch("getGames");
    },
    addScores() {}
  },
  components: { ScoresheetComponent }
};
</script>


<style scoped>
</style>