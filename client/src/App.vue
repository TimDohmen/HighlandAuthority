<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="offset-8 col-4">
        <router-link to="/login" class="mr-3">Info</router-link>
        <router-link to="/profile" class="mr-3">Home</router-link>
        <button class="btn btn-danger" @click="Logout()">Logout</button>
      </div>
      <div class="offset-9 col-3 mt-2">
        <form @submit="Search()" >
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search..." />
            <div class="input-group-append">
              <button class="btn btn-outline-success" type="submit">Go</button>
            </div>
         </div>
        </form>
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
      results: "",
    }
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
    }
  },
    Search(){
      this.$store.dispatch('findUserByName',this.results)
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
</style>