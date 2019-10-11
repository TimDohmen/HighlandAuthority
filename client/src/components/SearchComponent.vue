<template>
  <div class="user" @click="selectAthlete(userProp._id)">
    <div class="container-fluid">
      <div class="card profile p-2">
        <img class="pl-4" :src="userProp.photo" />
        <h1>{{userProp.name}}</h1>
        <i v-if="userProp.role == 'Admin'" class="ra ra-shield ra-2x"></i>
        <i v-if="userProp.role == 'Athlete'" class="ra ra-muscle-fat ra-2x"></i>
        <i v-if="userProp.role == 'Judge'" class="ra ra-gavel ra-2x"></i>
        <p class="title">CEO & Founder, Example</p>
        <p></p>
        <p>
          <button>Veiw Profile</button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import router from "../router";
export default {
  name: "user",
  props: ["userProp"],
  data() {
    return {};
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    user() {
      return this.$store.state.searchResults;
    },
    selectAthlete(payload) {
      router.push({ path: `/profile/` + payload });
    }
  },
  components: {}
};
</script>


<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  opacity: 1;
}
img {
  max-height: 300px;
  max-width: 300px;
  width: 200px;
  height: 200px;
  position: center;
  margin-top: 5%;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

/* img {
  height: 125px;
  width: 125px;
} */
</style>