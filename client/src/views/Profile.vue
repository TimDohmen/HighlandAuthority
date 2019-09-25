<template>
  <div class="profile">{{profile.title}}</div>
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
    }
  },
  props: [],
  methods: {
    getMyProfile() {
      this.$store.dispatch("getActiveProfile", {
        profiles: this.$store.state.profiles,
        userId: session.uid
      });
    }
  }
};
</script>
