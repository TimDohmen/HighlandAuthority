<template>
  <div class="user">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!-- <img :src="user.result.picture" class="card-img" alt="Broken Image" /> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{userProp.users.name}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
    }
  },
  components: {}
};
</script>


<style scoped>
</style>