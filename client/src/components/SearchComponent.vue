<template>
  <div class="results">
    <div class="card mb-3" style="max-width: 540px;">
     <div class="row no-gutters">
      <div class="col-md-4">
        <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  </div>
</div>

  </div>
</template>


<script>
export default {
  name: 'results',
  data(){
    return {
      results: "",
    }
  },
  computed:{},
  methods:{
    search(){
      this.$store.dispatch('findUserByName',this.results)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>