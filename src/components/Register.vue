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
            <input class="form-style" v-validate="'required|alpha_num|min:3'" type="text" name="pseudo" placeholder="Votre pseudo" v-model="pseudo" />
            <p class="title is-6 has-text-white-bis" v-if="errors.has('pseudo')">{{ errors.first('pseudo') }}</p>

          </div>

          <div class="form-input">
            <input class="form-style" v-validate="'required|email'" type="email" name="email" placeholder="Votre Email" v-model.trim="email" />
            <p class="title is-6 has-text-white-bis" v-if="errors.has('email')">{{ errors.first('email') }}</p>
          </div>

          <div class="form-input">
            <input class="form-style" v-validate="'required|min:8'" type="password" name="password" placeholder="Votre mot de passe" v-model="password" />
            <p class="title is-6 has-text-white-bis" v-if="errors.has('password')">{{ errors.first('password') }}</p>
          </div>

          <div class="form-input">
            <input class="form-style" v-validate="'required|min:8|confirmed:password'" type="password" name="password_confirmation" placeholder="Confirmer votre mot de passe" v-model="password_confirmation" />
            <p class="title is-6 has-text-white-bis" v-if="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</p>
          </div>

          <div class="form-input">

            <a type="submit" class="btn is-large button " @click.prevent="register" :class="{ 'is-loading': isload}">S'enregistrer</a>
          </div>

          <div class="form-input" v-if="hasErrors">
            <p class="title is-6 has-text-white-bis" v-for="fail in fails">{{ fail }}</p>
          </div>

          <div class="form-input">

            <p class="form-link">Déjà enregistrer ?
              <router-link class="link" to="/login">Se connecter</router-link>
            </p>
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
      pseudo: '',
      email: '',
      password: '',
      password_confirmation: '',
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

    register() {
      this.fails = [];
      this.$validator.validateAll().then((res) => {
        if (res) {
          this.isload = true
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
            console.log('utilisateur inscrit ' + user.email);


            user.updateProfile({
              displayName: this.pseudo,
              photoURL: "http://www.gravatar.com/avatar/" + md5(user.email) + "?d=identicon"
            }).then(() => {
              this.saveUserToUsersRef(user).then(() => {
                this.$store.dispatch('setUser', user)
                this.$router.push('/')
              })
            }).catch(error => {
              this.fails.push(error.message)
              this.isload = false
              console.log(error);
            })
          }).catch(error => {
            this.fails.push(error.message)
            this.isload = false
            console.log(error);



          })
        }

      })
    },
    saveUserToUsersRef(user) {
      return this.usersRef.child(user.uid).set({
        name: user.displayName,
        avatar: user.photoURL
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

.form-style {
  display: block;
  width: 100%;
  height: 46px;
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
  color: #d0d6db;
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
