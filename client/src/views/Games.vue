<template>
  <div class="games container-fluid">
    <div class="row mt-2">
      <div class="col-12">
        <form @submit.prevent="createGame()">
          <h1>Games Creator</h1>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Name of the Games"
              v-model="newGame.name"
            />
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="Games Location"
              v-model="newGame.location"
            />
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="Games Date"
              v-model="newGame.date"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
      <div class="row">
        <CreatedGames v-for="game in games" :key="game._id" :gameProp="game" />
      </div>
    </div>
  </div>
</template>


<script>
import CreatedGames from "../components/CreatedGames";
export default {
  name: "games",
  data() {
    return {
      newGame: {}
    };
  },
  mounted() {
    this.getGames();
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    games() {
      return this.$store.state.games;
    }
  },
  methods: {
    createGame() {
      this.$store.dispatch("createGame", {
        userId: this.user._id,
        name: this.newGame.name,
        location: this.newGame.location,
        date: this.newGame.date
      });
    },
    getGames() {
      this.$store.dispatch("getGames");
    }
  },
  components: { CreatedGames }
};
</script>


<style scoped>
form {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
.form-group {
  text-align: left;
  padding: 5px 10px 5px 10px;
}
h1 {
  font-family: "IM Fell English SC", serif;
}
</style>