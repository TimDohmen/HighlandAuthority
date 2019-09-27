<template>
  <div class="user" @click="selectAthlete(userProp._id)">
    <!-- <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
    <img :src="user.result.picture" class="card-img" alt="Broken Image" />-->
    <!-- </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{userProp.name}}</h5>
            <img :src="userProp.photo" alt />
          </div>
        </div>
      </div>
    </div>-->
    <div class="container-fluid">
      <div class="card profile p-2">
        <img class="pl-4" :src="userProp.photo" style="width:90%" />
        <h1>{{userProp.name}}</h1>
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
      debugger;
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