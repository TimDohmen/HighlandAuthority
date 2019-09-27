<template>
  <div class="profileSearched container-fluid">
    <!-- Profile Card -->
    <div class="row">
      <div class="card col-sm-12 col-md-3 text-left">
        <img :src="profile.picture" class="card-img-top border rounded m-auto img-fluid" />
        <div class="card-body">
          <h3>{{profile.userId.name}}</h3>
          <h6>Nickname: {{profile.nickname}}</h6>
          <h6>Class: {{profile.class}}</h6>
        </div>
      </div>
    </div>
    <!-- End of Profile Card -->
    <!-- Event/PR area -->
    <PR />
    <!-- End of Event/PR area -->

    <history />

    <!-- Start of Bio/Location/Phone -->
    <hr />
    <div class="row">
      <div class="col-sm-12 col-md-4 card justify-content-center">
        <h4>Bio: {{profile.bio}}</h4>
      </div>
      <div class="col-sm-12 col-md-4 card justify-content-center">
        <h4>Location: {{profile.location}}</h4>
      </div>
      <div class="col-sm-12 col-md-4 card justify-content-center">
        <h4>Phone #: {{profile.phone}}</h4>
      </div>
    </div>
    <!-- End of Bio/Location/Phone -->
  </div>
</template>

<script>
import PR from "../components/EventComp";
import history from "../components/HistoryComponent";

export default {
  name: "profileSearched",
  mounted() {
    // this.$store.dispatch("getAllProfiles");
    this.getSearchedProfile();
  },
  computed: {
    profile() {
      return this.$store.state.activeProfile;
    }
  },
  props: [],
  methods: {
    getSearchedProfile() {
      this.$store.dispatch("getSearchedProfile", this.$route.params.userId);
    }
  },
  components: { PR, history }
};
</script>

<style scoped>
img {
  height: 225px;
  width: 225px;
}
.card {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
