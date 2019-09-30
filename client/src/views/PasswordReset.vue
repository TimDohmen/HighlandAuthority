<template>
  <div class="PasswordReset container">
    <form @submit="editUser()">
      <div class="card bg-dark text-white">
        <h1 class="card-header">Reset Password</h1>
        <div class="card-body">
          <h5>Enter in New Password:</h5>
          <input
            type="password"
            placeholder="New Password"
            id="password"
            v-model="newEdit.password"
            required
          />
          <hr />
          <!-- <h5>Confirm New Password:</h5>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm_password"
            v-model="newEdit.confirmPassword"
            required
          />-->
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-success">Confirm</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import router from "@/router.js";

export default {
  name: "PasswordReset",
  data() {
    return {
      newEdit: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    editUser() {
      this.$store.dispatch("changePassword", {
        _id: this.user._id,
        password: this.newEdit.password
        // hash: this.newEdit.password
        // _id: this.profile._id,
      });
      // this.newEdit = {};
      this.$router.push({ name: "profile" });
    }

    //Validates passwords match
    // matchingPasswords() {
    //   let password = document.getElementById("password"),
    //     confirm_password = document.getElementById("confirm_password");

    //   function validatePassword() {
    //     if (password.value != confirm_password.value) {
    //       confirm_password.setCustomValidity("Passwords Don't Match");
    //     } else {
    //       confirm_password.setCustomValidity("");
    //     }
    //   }
    //   password.onchange = validatePassword;
    //   confirm_password.onkeyup = validatePassword;
    // }
  },
  components: {}
};
</script>


<style scoped>
</style>









