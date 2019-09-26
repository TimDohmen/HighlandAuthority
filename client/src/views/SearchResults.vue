<template>
  <div class="searchResults">
    test
    <SearchComponent v-for="user in users" :key="user._id" :userProp="user" />
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
</style>