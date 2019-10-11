<template>
  <div class="profileSearched container-fluid db-border">
    <!-- Profile Card -->
    <div class="row" v-if="profile.userId">
      <div class="col-2-sm">
        <figure class="snip1515">
          <div class="profile-image">
            <img :src="profile.picture" class="card-img-top rounded-circle m-auto img-fluid" />
          </div>
          <figcaption>
            <h2 class="displayRole">{{profile.userId.name}}</h2>
            <i v-if="user.role == 'Admin'" class="ra ra-shield ra-2x ml-1"></i>
            <i v-if="user.role == 'Athlete'" class="ra ra-muscle-fat ra-2x ml-1"></i>
            <i v-if="user.role == 'Judge'" class="ra ra-gavel ra-2x ml-1"></i>
            <h3>
              <b>Nickname:</b>
              {{profile.nickname}}
            </h3>
            <h6>
              <b>Class:</b>
              {{profile.class}}
            </h6>
            <h6>
              <b>Location:</b>
              {{profile.location}}
            </h6>
            <h3>
              <b>Bio:</b>
            </h3>
            <h6>{{profile.bio}}</h6>
            <h6>
              <b>Phone #:</b>
              {{profile.phone}}
            </h6>
            <div class="icons">
              <button
                class="btn btn-warning m-2"
                data-toggle="modal"
                data-target="#Edit-Profile-Modal"
              >Edit</button>
              <div v-if="user.role=='Admin'">
                Role: {{profile.userId.role}}
                <div v-if="user.role=='Admin' && profile.userId.role!='Athlete'">
                  <input
                    type="radio"
                    aria-label="Checkbox for following text input"
                    id="athleteButton"
                    @click="setRole('Athlete')"
                  /> Athlete
                </div>
                <div v-if="user.role=='Admin' && profile.userId.role!='Judge'">
                  <input
                    type="radio"
                    aria-label="Checkbox for following text input"
                    id="judgeButton"
                    @click="setRole('Judge')"
                  /> Judge
                </div>
                <div v-if="user.role=='Admin' && profile.userId.role!='Admin'">
                  <input
                    type="radio"
                    aria-label="Checkbox for following text input"
                    id="adminButton"
                    @click="setRole('Admin')"
                  /> Admin
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
        <!-- //FIXME END OF CONSTRUCTION -->
      </div>
      <EditProfileModal />
      <!-- </div> -->
      <!-- Event/PR area -->
      <PR class="col" />
      <history class="col-2" />
    </div>
  </div>
  <!-- End of Profile Card -->
  <!-- Event/PR area -->
  <!-- End of Bio/Location/Phone -->
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
.displayRole {
  display: inline;
}

.snip1515 {
  font-family: "Open Sans", Arial, sans-serif;
  position: relative;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #000000;
  text-align: center;
  line-height: 1.4em;
  font-size: 14px;
  box-shadow: none !important;
}

.snip1515 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.snip1515 .profile-image {
  display: inline-block;
  width: 80%;
  z-index: 1;
  position: relative;
  padding: 10px;
  border: 2px solid #e8b563;
  border-radius: 50%;
}

.snip1515 .profile-image img {
  max-width: 100%;
  vertical-align: top;
}

.snip1515 figcaption {
  width: 100%;
  background-color: #f2f2f2;
  color: #555;
  padding: 125px 25px 25px;
  margin-top: -100px;
  display: inline-block;
}

.snip1515 h3,
.snip1515 h4,
.snip1515 p {
  margin: 0 0 5px;
}

.snip1515 h3 {
  font-weight: 600;
  font-size: 1.3em;
  font-family: "Playfair Display", Arial, sans-serif;
}

.snip1515 h4 {
  color: #8c8c8c;
  font-weight: 400;
  letter-spacing: 2px;
}

.snip1515 p {
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 0.9;
}

.snip1515 .icons {
  text-align: center;
  width: 100%;
}

.snip1515 i {
  padding: 10px 2px;
  display: inline-block;
  font-size: 18px;
  font-weight: normal;
  color: #e8b563;
  opacity: 0.75;
}

.snip1515 i:hover {
  opacity: 1;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
</style>
