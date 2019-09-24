<template>
  <div id="EditProfileModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <h1>Edit Your Profile</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editProfile()">
              <div class="form-group">
                <label for="nickname">Nickname</label>
                <input
                  type="text"
                  class="form-control"
                  id="nickname"
                  placeholder="Enter Nickname"
                  v-model="newCar.make"
                  required
                />
              </div>
            </form>
          </div>
          <!-- end of modal body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfileModal",
  data() {
    return {
      newEdit: {} //newProfile??
    };
  },
  computed: {},
  methods: {
    editProfile() {
      this.$store.dispatch("editProfile", this.newEdit);
      this.newEdit = {};
    }
  }
};
</script>

<style scoped>
</style>