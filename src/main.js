// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import french from 'vee-validate/dist/locale/fr'
import VeeValidate, { Validator } from 'vee-validate'
import store from './store'
import {VueMasonryPlugin} from 'vue-masonry';



Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)


Validator.addLocale(french);

Vue.use(VeeValidate, {
  locale: 'fr'
});


let config = {
  apiKey: "AIzaSyBctiJjorT7vhRoakR2ygCxXwKPwyNGGDU",
  authDomain: "authvue-crispy.firebaseapp.com",
  databaseURL: "https://authvue-crispy.firebaseio.com",
  projectId: "authvue-crispy",
  storageBucket: "authvue-crispy.appspot.com",
  messagingSenderId: "978892760862"
};
firebase.initializeApp(config);

window.firebase = firebase

/* eslint-disable no-new */
const nonEnregistre = firebase.auth().onAuthStateChanged( user => {

store.dispatch('setUser', user)

  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })

nonEnregistre()

})
