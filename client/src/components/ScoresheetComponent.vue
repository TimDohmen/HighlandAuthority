<template>
  <div class="score-sheet">
    teste
    <form>
      <select class="custom-select col" id="inlineFormCustomSelect">
        <option selected>Add an athlete</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="form-row">
        <div class="col-3">
          <input type="number" class="form-control" placeholder="Score 1" />
        </div>
        <div class="col-3">
          <input type="number" class="form-control" placeholder="Score 2" />
        </div>
        <div class="col-3">
          <input type="number" class="form-control" placeholder="Score 3" />
        </div>
        <div class="col-3">
          <input type="number" class="form-control" placeholder="High" disabled />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "score-sheet",
  data() {
    return {};
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
    athletes() {
      return this.$store.state.athletes;
    }
  },
  methods: {
    gamelist() {
      return this.$store.state.games;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>