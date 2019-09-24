<template>
  <div class="profile">{{profile.title}}</div>
</template>

<script>
export default {
  name: "profile",
  computed: {
    profile() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  },
  props: []
};
</script>
