<template>
  <div id="app">
    <div class="container-fluid">
      <div id="nav" class="row p-2">
        <div class="row m-4">
          <div class="col-2">
            <img
              src="https://www.spokanehighlandgames.net/uploads/1/0/3/2/103286654/male-athlete_1_orig.png"
              alt="Strongman"
              class="img-size"
            />
          </div>
          <div class="col-6 d-flex align-items-center">
            <h1 class="title">Highland Authority</h1>
          </div>

          <div class="offset-9 col-sm-4 col-md-4">
            <!-- <router-link to="/login" class="btn btn-light m-1">Info</router-link> -->
            <router-link to="/profile" class="btn my-btn m-1">Home</router-link>
            <button class="btn my-btn" @click="Logout()">Logout</button>
          </div>

          <!-- <div class="row p-2"> -->
          <!-- <div class="col-sm-8"></div> -->
          <div class="offset-sm-4 col-sm-3 offset-md-9 col-md-4">
            <form action>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Athletes..."
                  v-model="query"
                />
                <div class="input-group-append">
                  <button class="btn my-btn" type="submit" @click="searchUsers()" id="search">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    Logout() {
      this.$store.dispatch("logout");
    },
    searchUsers() {
      this.$store.dispatch("findUserByName", this.query);
    }
  }
};
</script>

<style>
.my-btn {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
.my-btn:hover {
  background: #fff;
  color: #1aab8a;
}
.my-btn:before,
.my-btn:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
.my-btn:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.my-btn:hover:before,
.my-btn:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
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
  max-width: 100%;
}
.title {
  font-family: "IM Fell English SC", serif;
  text-shadow: 2px 2px 8px white;
}
</style>