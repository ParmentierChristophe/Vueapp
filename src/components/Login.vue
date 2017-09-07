<template>
<div class="register">
  <section class="">

    <div class="">
      <div class="center_form">
        <div class="img">


          <img class="logo" src="../assets/crispy.png" alt="">
        </div>
        <form class="">



          <div class="form-input">
            <input class="title form-style" v-validate="'required|email'" type="email" name="email" placeholder="Votre Email" v-model.trim="email" required/>
            <p class="title is-6 has-text-white-bis" v-if="errors.has('email')">{{ errors.first('email') }}</p>
          </div>

          <div class="form-input">
            <input class="title form-style" v-validate="'required|min:8'" type="password" name="password" placeholder="Votre mot de passe" v-model="password" required/>
            <p class="title is-6 has-text-white-bis" v-if="errors.has('password')">{{ errors.first('password') }}</p>
          </div>


          <div class="form-input">

            <a type="submit" class="title btn is-large button " @click.prevent="login" :class="{ 'is-loading': isload}">Se connecter</a>
          </div>



          <div class="form-input">

            <p class="subtitle is-6 form-link">Pas encore inscrit ?
              <router-link class="link" to="/register">S'inscrire</router-link>
            </p>
          </div>

          <div class="box" v-if="hasErrors">
            <p class="title is-6 has-text-danger" v-for="fail in fails">{{ fail }}</p>
          </div>

        </form>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import md5 from 'md5'

export default {
  name: 'register',


  data() {
    return {
      email: '',
      password: '',
      locale: 'fr',
      fails: [],
      usersRef: firebase.database().ref('users'),
      isload: false
    }
  },
  computed: {
    hasErrors() {
      return this.fails.length > 0
    }
  },
  methods: {
    login() {
      this.fails = [];
      this.$validator.validateAll().then((res) => {
        this.isload = true
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
          this.$store.dispatch('setUser', user)
          this.$router.push('/')

        }).catch(error => {
          this.fails.push(error.message)
          this.isload = false
          console.log(error);
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 100%;
  text-align: center;
}

.logo {
  width: 25%;
  text-align: center;
  margin: 12px;
}

.center_form {
  max-width: 420px;
  margin: 0 auto;
  padding: 100px 20px 0 20px;
}

.form-input {
  padding: 0 20px;
  margin: 0 0 15px;
}

.box {
  max-width: 340px;
  margin: 0 auto;
}

.form-style {
  display: block;
  width: 100%;
  height: 46px;
  margin-bottom: 5px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  border: 0;
  border-radius: 3px;
  background-color: #fff;
}

.btn {
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  display: block;
  border: none;
  background: no-repeat;
  background-image: linear-gradient(-180deg, #992623, #a84342 83%);
  text-align: center;
  text-decoration: none;
  line-height: 54px;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  height: 65px;
}

.btn:hover {
  opacity: 0.8;

}

.form-link {
  color: # ;
}

.link {
  font-weight: 500;
  color: #411b1a;
  -webkit-transition: 0.5s;
  /* Safari */
  transition: 0.5s;
}

.link:hover {
  color: #fff;
}
</style>
