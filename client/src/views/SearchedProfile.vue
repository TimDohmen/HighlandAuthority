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
        <div v-if="user.role=='Admin'">
          Role: {{profile.userId.role}}
          <div v-if="user.role=='Admin' && profile.userId.role!='Athlete'">
            <input
              type="radio"
              aria-label="Checkbox for following text input"
              name="role"
              v-model="Athlete"
              id="athleteButton"
              @click="setRole('Athlete')"
            /> Athlete
          </div>
          <div v-if="user.role=='Admin' && profile.userId.role!='Judge'">
            <input
              type="radio"
              aria-label="Checkbox for following text input"
              v-model="Judge"
              name="role"
              id="judgeButton"
              @click="setRole('Judge')"
            /> Judge
          </div>
          <div v-if="user.role=='Admin' && profile.userId.role!='Admin'">
            <input
              type="radio"
              aria-label="Checkbox for following text input"
              v-model="Admin"
              name="role"
              id="adminButton"
              @click="setRole('Admin')"
            /> Admin
          </div>
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
    },
    user() {
      return this.$store.state.user;
    }
  },
  props: [],
  methods: {
    getSearchedProfile() {
      this.$store.dispatch("getSearchedProfile", this.$route.params.userId);
    },
    setRole(role) {
      this.$store.dispatch("setRole", {
        _id: this.profile.userId._id,
        role: role
      });
      this.getSearchedProfile();
      document.querySelectorAll("input").forEach(v => {
        v.checked = false;
      });
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
