<template lang="html">
  <div class="sidebar">
<div class="columns profil">


    <div class="column is-3">
          <div class="card is-fullwidth">

            <div class="card-content">
              <a class="card-avatar">
                <img :src="currentUser.photoURL" class="card-avatar-img">
              </a>

              <div class="card-user">
                <div class="card-user-name">
                  <a href="#">{{ currentUser.displayName }}</a>
                </div>
                <span>
                  <a href="#">{{ currentUser.email }}</a>
                </span>
                <a class="btn is-small button is-danger is-outlined" @click="logout">Déconnection</a>

              </div>


            </div>
          </div>
          <div class="spacer"></div>

        </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {


  name: 'sidebar',

  computed: {
    ...mapGetters(['currentUser'])
  },


  data() {
    return {

    }
  },

  methods: {
    logout(){
       firebase.auth().signOut()
       this.$store.dispatch('setUser', null)
       this.$router.push('/Login')


    }
  }
}
</script>

<style lang="css">
.profil {
  padding: 30px;
}
.card-avatar {
  display: inline-block;
  float: left;
  padding: 10px;

}

.btn {
  margin-top: 10px;
}
.card-avatar img {

}


.card-user-name {
  padding-top: 5px;
}
</style>
