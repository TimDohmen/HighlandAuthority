<template>
  <div id="app">
    <div class="container-fluid">
      <div id="nav" class="row p-2">
        <div class="col-sm-2 col-md-2">
          <img
            src="https://www.spokanehighlandgames.net/uploads/1/0/3/2/103286654/male-athlete_1_orig.png"
            alt="Strongman"
            class="img-size"
            href="/login"
          />
        </div>
        <div class="col-sm-6 col-md-6 d-flex align-items-center">
          <h1 class="title">Highland Authority</h1>
        </div>

        <div class="col-sm-4 col-md-4 m-auto">
          <router-link v-if="!user._id" to="/login" class="btn btn-light m-1">
            <i class="fas fa-home fa-sm"></i>
            Home
          </router-link>
          <router-link v-if="user._id" to="/profile" class="btn btn-light m-1">
            <i class="fas fa-user fa-sm"></i>
            My Profile
          </router-link>
          <button v-if="user._id" class="btn btn-danger ml-2" @click="Logout()">
            <i class="fas fa-sign-out-alt fa-sm"></i>
            Logout
          </button>

          <form>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search Athletes..."
                v-model="query"
              />
              <div class="input-group-append">
                <button class="btn btn-success" type="button" @click="searchUsers()" id="search">
                  <!-- type type changed from submit -->
                  <i class="fas fa-search fa-sm"></i>
                  Search
                </button>
              </div>
            </div>
          </form>
          <router-link
            v-if="user.role!='Athlete' && user._id"
            to="/scoring"
            class="btn btn-light m-1"
          >
            <i class="far fa-plus-square fa-sm"></i>
            Add Scores To Exisiting Game
          </router-link>
          <router-link
            v-if="user.role!='Athlete' && user._id"
            to="/games"
            class="btn btn-light m-1"
          >
            <i class="far fa-calendar-plus fa-sm"></i>
            Create A Game
          </router-link>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NotificationService from "./NotificationService";

export default {
  name: "App",
  data() {
    return {
      query: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async Logout() {
      if (await NotificationService.confirmLogout()) {
        this.$store.dispatch("logout");
        location.reload();
      }
      // get rid of access to old data on screen when loggin out by refreshing
    },
    searchUsers() {
      this.$store.dispatch("findUserByName", this.query);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: gray;
}

#nav a.router-link-exact-active {
  color: black;
}
.img-size {
  height: 200px;
  width: 160px;
}
.title {
  font-family: "IM Fell English SC", serif;
  text-shadow: 2px 2px 8px white;
}
</style>