<template>
  <div class="searchResults">
    <div class="row">
      <SearchComponent />
    </div>
  </div>
</template>


<script>
import SearchComponent from './components/SearchComponent'
export default {
  name: 'searchResults',
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{ SearchComponent}
}
</script>


<style scoped>

</style>