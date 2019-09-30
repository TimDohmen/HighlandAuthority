<template>
  <div id="Edit-Profile-Modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document" v-if="profile._id">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <h1>
              Edit Your Profile
              <button data-dismiss="modal" class="btn btn-outline-danger xButton">x</button>
            </h1>
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
              />
            </div>
            <div class="form-group">
              <label for="picture">Profile Picture:</label>
              <input
                type="text"
                class="form-control"
                id="picture"
                placeholder="Enter Profile Picture URL"
                v-model="newEdit.picture"
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
              <select class="custom-select" id="inputGroupSelect02" v-model="newEdit.class">
                <option selected>Choose...</option>
                <option value="Pros">Pros</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="Master 40-49">Master 40-49</option>
                <option value="Master 50-59">Master 50-59</option>
                <option value="Master 60+">Master 60+</option>
                <option value="Women's Open">Women's Open</option>
                <option value="Women's Master">Women's Master</option>
                <option value="Women's Pro">Women's Pro</option>
                <option value="Lightweight">Lightweight</option>
              </select>
              <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Classes</label>
              </div>
              <u>Reset Password</u>
            </div>
            <!-- End of Classes Dropdown -->

            <button v-if="profile._id" type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="modal-footer">
            <!--FIXME  Reset Password -->
            <div class="form-group d-flex align-item-center">
              <hr />
              <input
                type="button"
                @click="resetPassword"
                value="Reset Password"
                class="btn btn-danger"
              />
              <hr />
              <!-- END OF RESET -->
            </div>
            <hr />-->
            <!-- END OF RESET -->

            <button v-if="profile._id" type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <!-- end of modal body -->
        <div class="modal-footer">
          <button
            id="close"
            type="button"
            class="btn btn-outline-danger float-right"
            data-dismiss="modal"
          >Cancel</button>
        </div>
      </div>
    </div>

    <div class="modal-dialog" role="document" v-if="!profile._id">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <h1>
              Edit Your Profile
              <button data-dismiss="modal" class="btn btn-outline-danger xButton">x</button>
            </h1>
            <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>-->
          </div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProfile()">
            <div class="form-group">
              <label for="nickname">Nickname:</label>
              <input
                type="text"
                class="form-control"
                id="nickname"
                placeholder="Enter Nickname"
                v-model="newEdit.nickname"
              />
            </div>
            <div class="form-group">
              <label for="picture">Profile Picture:</label>
              <input
                type="text"
                class="form-control"
                id="picture"
                placeholder="Enter Profile Picture URL"
                v-model="newEdit.picture"
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
              <select class="custom-select" id="inputGroupSelect02" v-model="newEdit.class">
                <option selected>Choose...</option>
                <option value="Pros">Pros</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="Master 40-49">Master 40-49</option>
                <option value="Master 50-59">Master 50-59</option>
                <option value="Master 60+">Master 60+</option>
                <option value="Women's Open">Women's Open</option>
                <option value="Women's Master">Women's Master</option>
                <option value="Women's Pro">Women's Pro</option>
                <option value="Lightweight">Lightweight</option>
              </select>
              <div class="input-group-append">
                <label class="input-group-text" for="inputGroupSelect02">Classes</label>
              </div>
            </div>
            <!-- End of Classes Dropdown -->
            <button class="btn btn-primary">Create Profile</button>
          </form>
        </div>
        <!-- end of modal body -->
        <div class="modal-footer">
          <button
            id="close"
            type="button"
            class="btn btn-outline-danger"
            data-dismiss="modal"
          >Cancel</button>
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
      newEdit: {}
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
    editProfile() {
      this.$store.dispatch("editProfile", {
        _id: this.profile._id,
        nickname: this.newEdit.nickname,
        location: this.newEdit.location,
        class: this.newEdit.class,
        bio: this.newEdit.bio,
        picture: this.newEdit.picture,
        phone: this.newEdit.phone
      });
      // this.newEdit = {};
      $("#close").click();
    },

    createProfile() {
      this.$store.dispatch("createProfile", {
        nickname: this.newEdit.nickname,
        location: this.newEdit.location,
        class: this.newEdit.class,
        bio: this.newEdit.bio,
        picture: this.newEdit.picture,
        phone: this.newEdit.phone,
        userId: this.user._id
      });
      // this.newEdit = {};
      $("#close").click();
    },

    //FIXME  Reset Password
    resetPassword() {
      this.$router.push({ name: "forgot" });
      $("#close").click();
    }
  }
};
</script>

<style scoped>
.xButton {
  margin-left: 135px;
  margin-bottom: 5px;
}
</style>