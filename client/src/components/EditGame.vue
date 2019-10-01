<template>
  <div class="EditGame">
    <div id="Edit-Game-Modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <h1>
                Edit Game
                <button data-dismiss="modal" class="btn btn-outline-danger xButton">x</button>
              </h1>
            </div>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editProfile()">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="individualGameProp.name" />
              </div>
              <div class="form-group">
                <label for="location">Location:</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  v-model="individualGameProp.location"
                />
              </div>
              <div class="form-group">
                <label for="date">Date:</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  placeholder="Enter Date"
                  v-model="individualGameProp.date"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
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
  </div>
</template>


<script>
export default {
  name: "EditGame",
  data() {
    return {
      newEdit: {},
      gameProp: {}
    };
  },
  props: ["individualGameProp"],
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.form-group {
  text-align: left;
}
</style>