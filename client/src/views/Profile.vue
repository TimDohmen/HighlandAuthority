<template>
  <div class="profile">
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
