<template>
<div class="register">
  <form class="">
    <input type="text" name="name" placeholder="name" v-model="name" />
    <input type="email" name="email" placeholder="email address" v-model="email" />
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <input type="password" name="password_confirmation" placeholder="password confirmation" v-model="password_confirmation"/>

    <button @click.prevent="register">create</button>
    <p class="">Déjà enregistrer ? <router-link to="/login">Se connecter</router-link></p>
  </form>

</div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name:'',
      email:'',
      password:'',
      password_confirmation:''
    }
  },
    methods: {
      register(){
       console.log('ok enregistré');
       firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( user => {
         console.log('utilisateur inscrit' + user.email);

       }).catch( error => {
         console.log(error);
       })
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
