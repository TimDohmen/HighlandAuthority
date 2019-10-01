<template>
  <div class="scorefield mt-3">
    <form id="athleteRow">
      <input class="col" type="text" id="athleteName" :placeholder="athlete.userId.name" disabled />
      <div class="form-row">
        <div class="col-3">
          <input
            v-model="score1"
            type="number"
            class="form-control"
            id="score1"
            placeholder="Score 1"
          />
        </div>
        <div class="col-3">
          <input
            v-model="score2"
            type="number"
            class="form-control"
            id="score2"
            placeholder="Score 2"
          />
        </div>
        <div class="col-3">
          <input
            v-model="score3"
            type="number"
            class="form-control"
            id="score3"
            placeholder="Score 3"
          />
        </div>
        <div class="col-3">
          <input type="number" class="form-control" :placeholder="topScore" disabled />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "scorefield",
  props: { athlete: { type: Object } },
  data() {
    return {
      score1: 0,
      score2: 0,
      score3: 0
    };
  },
  watch: {
    topScore: function(newTopScore) {
      this.$store.commit("setScore", {
        athleteId: this.athlete._id,
        newTopScore
      });
    }
    // topScore: function(newTopScore) {
    //   this.$store.commit("test", {
    //     athleteId: this.athlete._id,
    //     newTopScore
    //   });
    // }
  },
  computed: {
    topScore() {
      let arr = [this.score1, this.score2, this.score3];
      return Math.max(...arr);
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>