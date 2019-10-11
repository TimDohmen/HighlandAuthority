<template>
  <div class="WFDHeavy cards">
    <!-- Event: W4D Heavy
    <p>PR: {{this.hiScore.topAttempt}}</p>-->

    <div class="cards 1">
      <div class="card_image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/WFD_implement_01.jpg/250px-WFD_implement_01.jpg"
        />
      </div>
      <div class="card_title title-white">
        <h4>
          <b>Event:</b> W4D Heavy
        </h4>
        <small>Class: {{this.hiScore.throwingClass}}</small>

        <p>PR: {{this.hiScore.topAttempt}} Ft</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "WFDHeavy",
  data() {
    return {};
  },
  computed: {
    hiScore() {
      return this.$store.state.hiWFDScore;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: {},
  mounted() {
    if (this.$route.params.userId) {
      this.$store.dispatch("getHiWFDScores", {
        userId: this.$route.params.userId,
        eventName: "w4d-heavy"
      });
    } else
      this.$store.dispatch("getHiWFDScores", {
        userId: this.user._id,
        eventName: "w4d-heavy"
      });
  }
};
</script>


<style scoped>
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
  text-shadow: 1px 1px 2px black, 0 0 1em gold, 0 0 0.2em grey;
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