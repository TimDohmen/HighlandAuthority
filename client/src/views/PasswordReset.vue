<template>
  <div class="PasswordReset container">
    <form @submit="editUser()">
      <div class="card op">
        <h1 class="card-header">Reset Password</h1>
        <div class="card-body">
          <h5>Enter in New Password:</h5>
          <input type="password" placeholder="New Password" id="password" required />
          <hr />
          <h5>Confirm New Password:</h5>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm_password"
            v-model="newEdit.password"
            required
          />
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-success">Confirm</button>
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
      if (this.validatePassword()) {
        this.$store.dispatch("changePassword", {
          _id: this.user._id,
          password: this.newEdit.password
        });
        this.$router.push({ name: "profile" });
      }
    },

    validatePassword() {
      let password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");
      if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity("");
        return true;
      }
      password.onchange = validatePassword;
      confirm_password.onkeyup = validatePassword;
    }
  },
  components: {}
};
</script>


<style scoped>
.op {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>









