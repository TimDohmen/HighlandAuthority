<template>
  <div class="hammerHeavy cards">
    <!-- Event: Hammer Heavy
    <p>PR: {{this.hiScore.topAttempt}}</p>-->

    <div class="cards 1">
      <div class="card_image">
        <img src="http://www.ecns.cn/hd/2018/09/03/79871c6eb8834ee3af9755208ff411b6.jpg" />
      </div>
      <div class="card_title title-white">
        <h4>
          <b>Event:</b> Hammer Heavy
        </h4>
        <small>Class: {{this.hiScore.throwingClass}}</small>

        <p>PR: {{this.hiScore.topAttempt}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "hammerHeavy",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiHammerHScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiHammerHScores", {
        userId: this.$route.params.userId,
        eventName: "hammer-heavy"
      });
    } else
      this.$store.dispatch("getHiHammerHScores", {
        userId: this.user._id,
        eventName: "hammer-heavy"
      });
  }
};
</script>


<style scoped>
.cards {
  background-color: rgba(255, 255, 255, 0.8);
}
.cards {
  background-color: rgba(255, 255, 255, 0.8);
}

.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.cards {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.cards .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.cards .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.cards .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -120px;
  height: 40px;
}

.cards:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
</style>