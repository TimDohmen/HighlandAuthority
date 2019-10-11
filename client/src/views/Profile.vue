<template>
  <div class="profile container-fluid db-border">
    <!-- Profile Card -->
    <div class="row">
      <!-- <div class="card col-sm-12 col-md-3 text-left db-border m-2"> -->
      <!-- <img :src="profile.picture" class="card-img-top border rounded m-auto img-fluid db-border" />
        <div class="card-body db-border">
          <h3 class="displayRole">{{user.name}}</h3>
          <i v-if="user.role == 'Admin'" class="ra ra-shield ra-2x ml-1"></i>
          <i v-if="user.role == 'Athlete'" class="ra ra-muscle-fat ra-2x ml-1"></i>
          <i v-if="user.role == 'Judge'" class="ra ra-gavel ra-2x ml-1"></i>
          <h6>Nickname: {{profile.nickname}}</h6>
          <h6>Class: {{profile.class}}</h6>
      </div>-->

      <!-- FIXME Construction -->

      <figure class="snip1515">
        <div class="profile-image">
          <img :src="profile.picture" class="card-img-top rounded-circle m-auto img-fluid" />
        </div>
        <figcaption>
          <h2 class="displayRole">{{user.name}}</h2>
          <i v-if="user.role == 'Admin'" class="ra ra-shield ra-2x ml-1"></i>
          <i v-if="user.role == 'Athlete'" class="ra ra-muscle-fat ra-2x ml-1"></i>
          <i v-ifaaa="user.role == 'Judge'" class="ra ra-gavel ra-2x ml-1"></i>
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
          </div>
        </figcaption>
      </figure>
      <!-- //FIXME END OF CONSTRUCTION -->

      <EditProfileModal />
      <!-- </div> -->
      <!-- Event/PR area -->
      <PR />
      <history />
      <!-- End of Event/PR area -->
    </div>
    <!-- End of Profile Card -->
    <!-- Start of Bio/Location/Phone -->
    <!-- <hr />
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
    </div>-->
    <!-- End of Bio/Location/Phone -->
  </div>
</template>

<script>
import PR from "../components/EventComp";
import EditProfileModal from "../components/EditProfileModal";
import history from "../components/HistoryComponent";

export default {
  name: "profile",
  mounted() {
    // this.$store.dispatch("getAllProfiles");
    this.getMyProfile();
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
    getMyProfile() {
      this.$store.dispatch("getMyProfile", this.user._id);
    }
  },
  components: { PR, EditProfileModal, history }
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
