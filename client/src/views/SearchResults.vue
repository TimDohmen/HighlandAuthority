<template>
  <div class="searchResults bg-dark green-bg m-5">
    <h2 class="text-align-center card-header bg-light mb-4 mt-4">
      <hr />Athletes Profile
      <hr />
    </h2>
    <div class="col offset-2 col-8 mb-2 bg-light text-dark db-border">
      <div class="row">
        <h1 class="float-left m-1 pr-3 card db-border bg-warning">Search Results:</h1>
      </div>
      <div class="row d-flex justify-content-center">
        <SearchComponent v-for="user in users" :key="user._id" :userProp="user" class="mb-4" />
      </div>
    </div>
  </div>
</template>


<script>
import SearchComponent from "../components/SearchComponent";
export default {
  name: "searchResults",
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.searchResults;
    }
  },
  methods: {},
  components: { SearchComponent }
};
</script>


<style scoped>
.db-border {
  border-width: 5px;
  border-style: double;
  /* opacity: 0.9; */
}
.green-bg {
  background-image: url(https://bloximages.chicago2.vip.townnews.com/murrayledger.com/content/tncms/assets/v3/editorial/9/3b/93bd2f6e-5f84-11e0-8d78-001cc4c03286/4d9b124058d8f.image.jpg?resize=400%2C395);
}
</style>