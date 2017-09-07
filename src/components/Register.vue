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
            <input class="form-style" type="text" name="name" placeholder="Votre pseudo" v-model.trim="name" />
          </div>

          <div class="form-input">
            <input class="form-style" type="email" name="email" placeholder="Votre Email" v-model.trim="email" />
          </div>

          <div class="form-input">
            <input class="form-style" type="password" name="password" placeholder="Votre mot de passe" v-model="password" />
          </div>

          <div class="form-input">
            <input class="form-style" type="password" name="password_confirmation" placeholder="Confirmer votre mot de passe" v-model="password_confirmation" />
          </div>

          <div class="form-input">

            <button class="btn" @click.prevent="register">S'enregistrer</button>
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
export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        console.log('utilisateur inscrit' + user.email);

      }).catch(error => {
        console.log(error);
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
}

.btn:hover {
  opacity: 0.8;
}

.form-link {
  color: #d0d6db;
}

.link {
  font-weight:500;
  color: #a84342;
  -webkit-transition: 0.5s;
  /* Safari */
  transition: 0.5s;
}

.link:hover {
  color: #992623;
}
</style>
