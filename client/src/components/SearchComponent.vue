<template>
  <div class="user" @click="selectAthlete(userProp._id)">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!-- <img :src="user.result.picture" class="card-img" alt="Broken Image" /> -->
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{userProp.name}}</h5>
            <img :src="userProp.photo" alt />
          </div>
        </div>
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
img {
  height: 125px;
  width: 125px;
}
</style>