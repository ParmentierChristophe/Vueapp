<template>
<div class="home">
  <sidebar></sidebar>
  <notes></notes>
</div>
</template>

<script>
import Sidebar from './sidebar'
import Notes from './Notes'

export default {
  name: 'home',

  components: {
    Sidebar,
    Notes
  },

  data() {
    return {

    }
  },

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-family: Open Sans, Helvetica, sans-serif;
  font-weight: 300;
  height: 100vh;
  width: 100%;
  background: #fff;
  overflow-x: hidden;
}
</style>
