<template>
  <div class="profile">
    <div class="card">
      <img :src="profile.picture" class="card-img-top" />
      <div class="card-body">
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    {{user.name}}
    <h1>{{profile.bio}}</h1>
  </div>
</template>

<script>
export default {
  name: "profile",
  mounted() {
    this.$store.dispatch("getAllProfiles");
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
  }
};
</script>
