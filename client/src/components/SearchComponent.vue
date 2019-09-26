<template>
  <div class="results">


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