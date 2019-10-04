<template>
  <div class="scorefield mt-3">
    <form id="athleteRow">
      <div class="form-row">
        <input
          class="col-8"
          type="text"
          id="athleteName"
          :placeholder="athlete.userId.name"
          disabled
        />
        <input class="form-control col-3 ml-2" type="number" :placeholder="topScore" disabled />
      </div>
      <div class="form-row">
        <div v-for="(attempt, index) in attempts" class="col-2">
          <input
            v-model="attempt.height"
            type="number"
            class="form-control"
            id="score1"
            placeholder="Height"
          />
          <div class="d-flex">
            <select
              v-for="tryValue in attempt.tries"
              v-model="tryValue.status"
              class="custom-select"
            >
              <option value="1">P</option>
              <option value="2">X</option>
              <option value="3">O</option>
            </select>
          </div>
        </div>
      </div>
    </form>
    <button type="button" @click="addAttempt">Add Height</button>
  </div>
</template>


<script>
export default {
  name: "scorefield",
  props: {
    athlete: { type: Object }
  },
  data() {
    return {
      attempts: [
        {
          height: undefined,
          tries: [{ status: "" }, { status: "" }, { status: "" }]
        }
      ]
    };
  },
  watch: {
    topScore: function(newTopScore) {
      let activeGame = this.$store.state.activeGame;
      this.$store.commit("setScore", {
        athleteId: this.athlete._id,
        newTopScore,
        activeGame
      });
    }
  },
  computed: {
    topScore() {
      let arr = [this.score1, this.score2, this.score3];
      return Math.max(...arr);
    }
  },
  methods: {
    addAttempt() {
      this.attempts.push({
        height: 0,
        tries: [{ status: "" }, { status: "" }, { status: "" }]
      });
    },
    addTry(attemptIndex) {
      if (this.attempts[attemptIndex].tries >= 3) {
        //prevent addition of attempt
        return;
      }
      this.attempts[attemptIndex].tries.push({ status: "" });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>