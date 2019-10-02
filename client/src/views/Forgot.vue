<template>
  <div class="Forgot-Password container">
    <div class="card bg-light db-border">
      <form @submit="sendEmail()">
        <h3 class="card-header">Forgot Password</h3>
        <div class="form-group">
          <label for="email">
            <h4 class="card-body p-3 m-2">
              Email:
              <input
                v-model="query"
                type="text"
                name="email"
                class="form-control"
                placeholder="Enter Email Here"
              />
            </h4>
          </label>
          <button class="btn btn-danger" type="submit">Reset Password</button>
          <p>*An Email will be sent to your email address with instruction to reset password*</p>
        </div>
      </form>
    </div>
  </div>
  <!-- form(method='POST')
    legend Forgot Password
    .form-group
    label(for='email') Email
    input.form-control(type='text', name='email', autofocus)
  button.btn.btn-primary(type='submit') Reset Password-->
</template>


<script>
export default {
  name: "Forgot-Password",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    sendEmail() {
      //FIXME needs sendEmail in store
      this.$store.dispatch("sendEmail", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>