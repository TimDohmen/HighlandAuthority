<template>
  <div class="user">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!-- <img :src="payload.picture" class="card-img" alt="Broken Image" /> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{userProp.name}}</h5>
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
  computed: {},
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