<template>
  <div class="EditGame">
    <div :id="'edit-game'+individualGameProp._id" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <h1>
                Edit Game
                <button
                  data-dismiss="modal"
                  id="closeModal"
                  class="btn btn-outline-danger xButton"
                >x</button>
              </h1>
            </div>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editGame()">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="individualGameProp.name" />
              </div>
              <div class="form-group">
                <label for="location">Location:</label>
                <input type="text" class="form-control" id="location" v-model="editedGame.location" />
              </div>
              <div class="form-group">
                <label for="date">Date:</label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  placeholder="Enter Date"
                  v-model="editedGame.date"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!-- end of modal body -->
          <div class="modal-footer">
            <button
              :id="'close'+editedGame._id"
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
import moment from "moment";
export default {
  name: "EditGame",
  data() {
    return {
      editedGame: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.editedGame = {
        name: this.individualGameProp.name,
        location: this.individualGameProp.location,
        date: this.individualGameProp.date,
        _id: this.individualGameProp._id
      };
    });
  },
  props: ["individualGameProp"],
  computed: {},
  methods: {
    editGame() {
      this.$store.dispatch("editGame", this.editedGame);
      $("#close" + this.individualGameProp._id).click();
    }
  },
  components: {}
};
</script>


<style scoped>
.form-group {
  text-align: left;
}
</style>