<template>
<div class="home">
  <sidebar></sidebar>
</div>
</template>

<script>
import Sidebar from './sidebar'

export default {
  name: 'home',

  components: {
    Sidebar
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
