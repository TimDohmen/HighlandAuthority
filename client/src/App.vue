<template>
  <div id="app">
    <div id="nav" class="row p-2">
      <div class="col-sm-8"></div>
      <div class="col-sm-4 col-md-4">
        <router-link to="/login" class="mr-3">Info</router-link>
        <router-link to="/profile" class="mr-3">Home</router-link>
        <button class="btn btn-danger" @click="Logout()">Logout</button>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-sm-8"></div>
      <div class="col-sm-3 col-md-4">
          <div class="input-group" >
            <input type="text" class="form-control" placeholder="Search..." v-model="query"/>
            <div class="input-group-append">
              <button class="btn btn-outline-success" type="submit" @click="searchUsers()" id="search">Go</button>
            </div>
         </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      query: "",
    }
  },
  computed: {
    
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
    },
    searchUsers(){
      this.$store.dispatch('findUserByName',this.query)
    }
  },
    
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
</style>