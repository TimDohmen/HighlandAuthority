<template>
  <div id="Edit-Profile-Modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <h1>Edit Your Profile</h1>
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>-->
          </div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editProfile()">
            <div class="form-group">
              <label for="nickname">Nickname:</label>
              <input
                type="text"
                class="form-control"
                id="nickname"
                placeholder="Enter Nickname"
                v-model="newEdit.nickname"
                required
              />
            </div>
            <div class="form-group">
              <label for="picture">Profile Picture:</label>
              <input
                type="text"
                class="form-control"
                id="picture"
                placeholder="Enter Profile Picture"
                v-model="newEdit.picture"
                required
              />
            </div>
            <div class="form-group">
              <label for="bio">Profile Bio:</label>
              <input
                type="text"
                class="form-control"
                id="bio"
                placeholder="Enter Profile Bio"
                v-model="newEdit.bio"
                required
              />
            </div>
            <div class="form-group">
              <label for="location">Location:</label>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder="Enter Location"
                v-model="newEdit.location"
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number:</label>
              <input
                type="number"
                class="form-control"
                id="phone"
                placeholder="Enter in Telephone Number"
                v-model="newEdit.phone"
                required
              />
            </div>
            <!-- TODO Classes -->
            <!--OLD <div class="form-group">
                <label for="class">Class: </label>
                <input
                  type="text"
                  class="form-control"
                  id="class"
                  placeholder=" class"
                  v-model="newEdit.class"
                  required
                />
            </div>-->
            <div class="input-group mb-3">
              <!-- Form Group? or input-group -->
              <select class="custom-select" id="inputGroupSelect02">
                <option selected>Choose...</option>
                <option value="1">Pros</option>
                <option value="2">A</option>
                <option value="3">B</option>
                <option value="4">C</option>
                <option value="5">Master 40-49</option>
                <option value="6">Master 50-59</option>
                <option value="7">Master 60+</option>
                <option value="8">Women's Open</option>
                <option value="9">Women's Master</option>
                <option value="10">Women's Pro</option>
                <option value="11">Lightweight</option>
              </select>
              <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Classes</label>
              </div>
            </div>
            <!-- End of Classes Dropdown -->
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <!-- end of modal body -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
  computed: {
    profile() {
      return this.$store.state.activeProfile;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    //TODO Make in Store
    //FIXME make this better
    editProfile() {
      this.$store.dispatch("editProfile", {
        id: this.user._id,
        nickname: this.newEdit.nickname,
        location: this.newEdit.location,
        class: this.newEdit.class,
        bio: this.newEdit.bio,
        picture: this.newEdit.picture,
        phone: this.newEdit.phone
      });
      this.newEdit = {};
      $(".close").click();
    }
  }
};
</script>

<style scoped>
</style>