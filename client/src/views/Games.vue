<template>
  <div class="games container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Games Creator</h1>
        <form @submit.prevent="createGame()">
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "games",
  data() {
    return {
      newGame: {}
    };
  },
  computed: {},
  methods: {
    createGame() {
      this.$store.dispatch("createGame", this.newGame);
    }
  },
  components: {}
};
</script>


<style scoped>
form {
  background-color: rgba(255, 255, 255, 0.8);
}
.form-group {
  text-align: left;
}
</style>