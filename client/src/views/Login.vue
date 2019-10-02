<template>
  <div class="container-fluid">
    <!-- Login Section -->
    <Section v-if="!user._id" class="row">
      <div class="col-12 mt-3">
        <div class="login">
          <form v-if="loginForm" @submit.prevent="loginUser">
            <input type="email" v-model="creds.email" placeholder="email" />
            <input type="password" v-model="creds.password" placeholder="password" />
            <button class="btn btn-success" type="submit">Login</button>
          </form>
          <form v-else @submit.prevent="register">
            <input type="text" v-model="newUser.name" placeholder="name" />
            <input type="email" v-model="newUser.email" placeholder="email" />
            <input type="password" v-model="newUser.password" placeholder="password" />
            <button class="btn btn-warning" type="submit">Create Account</button>
          </form>
          <p v-if="loginForm" @click="ForgotPassword()">Forgot Password?</p>
          <div class="action" @click="loginForm = !loginForm">
            <p v-if="loginForm">No account? Click here to Register</p>

            <p v-else>Already have an account? Click here to Login</p>
          </div>
        </div>
      </div>
    </Section>
    <GamesInfo />
  </div>
</template>

<script>
import router from "@/router.js";
import GamesInfo from "../components/GamesInfo";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "profile" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    },
    ForgotPassword() {
      this.$router.push({ name: "forgot-email" });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { GamesInfo }
};
</script>

<style>
.action {
  cursor: pointer;
}

.action:hover {
  text-decoration: underline;
  color: blue;
}
.db-border {
  border-width: 5px;
  border-style: double;
  opacity: 1;
}

/* Card Boxes */
</style>