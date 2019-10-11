<template>
  <div class="PR cards-list">
    <div class="row">
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('open-stone')">
        <openStone />
      </div>
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('braemar')">
        <braemar />
      </div>
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('w4d-heavy')">
        <WFDHeavy />
      </div>
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('w4d-light')">
        <WFDLight />
      </div>
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('hammer-light')">
        <hammerLight />
      </div>
      <div class="col-sm-4 col-md-6 enumEvents" @click="setHistory('hammer-heavy')">
        <hammerHeavy />
      </div>
    </div>
  </div>
  <!-- <div>
      {{this.hiScore[0].eventName}}
      {{this.hiScore[0].topAttempt}}
    </div>
    <div>
      {{this.hiScore[1].eventName}}
      {{this.hiScore[1].topAttempt}}
    </div>
    <div>
      {{this.hiScore[2].eventName}}
      {{this.hiScore[2].topAttempt}}
    </div>
    <div>
      {{this.hiScore[3].eventName}}
      {{this.hiScore[3].topAttempt}}
    </div>
    <div>
      {{this.hiScore[4].eventName}}
      {{this.hiScore[4].topAttempt}}
    </div>
    <div>
      {{this.hiScore[5].eventName}}
      {{this.hiScore[5].topAttempt}}
  </div>-->
</template>




<script>
// DONT GO FARTHER BACK
import braemar from "../components/EventsComponents/BraemarComponent";
import WFDHeavy from "../components/EventsComponents/WFDHeavyComponent";
import openStone from "../components/EventsComponents/OpenStoneComponent";
import WFDLight from "../components/EventsComponents/WFDLightComponent";
import hammerLight from "../components/EventsComponents/HammerLightComponent";
import hammerHeavy from "../components/EventsComponents/HammerHeavyComponent";
export default {
  name: "PR",
  mounted() {},
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    hiScore() {
      return this.$store.state.hiScores;
    }
    // eventName(){
    //   return this.$store.state.scores.eventName;
    // }
  },
  methods: {
    setHistory(eventName) {
      if (this.$route.params.userId) {
        this.$store.dispatch("getOneEventScores", {
          userId: this.$route.params.userId,
          eventName: eventName
        });
      } else
        this.$store.dispatch("getOneEventScores", {
          eventName: eventName,
          userId: this.user._id
        });
    }
  },
  components: {
    openStone,
    braemar,
    WFDHeavy,
    WFDLight,
    hammerLight,
    hammerHeavy
  }
};
</script>
<style scoped>
.enumEvents {
  cursor: pointer;
}

.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
</style>