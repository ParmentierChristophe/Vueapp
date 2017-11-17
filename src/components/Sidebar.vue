<template lang="html">
    <div class="sidebar">
        <div class="columns profil">


            <div class="column">
                <div class="card is-fullwidth">

                    <div class="card-content">
                        <a class="card-avatar">
                            <img :src="currentUser.photoURL" class="card-avatar-img">
                        </a>

                        <div class="card-user">
                            <div class="card-user-name">
                                <a class="inline title is-5" href="#">{{ currentUser.displayName }}</a>
                            </div>
                            <span>
                  <a class="inline link" href="#">{{ currentUser.email }}</a>
                </span>
                            <a class="btn is-small button is-danger is-outlined" @click="logout">Déconnection</a>

                        </div>


                    </div>
                </div>

                <div class="spacer">

                </div>

                <div class="card is-fullwidth">

                    <div class="card-content">
                        <form class="form-create-note" action="index.html" method="post">
                            <input class="title" type="text" name="" placeholder="Le titre" value="">
                            <textarea name="name" placeholder="Votre texte ici ..."></textarea>
                            <a class="button is-primary valid">
                <span class="icon is-small">
                  <i class="fa fa-check"></i>
                </span>
                            </a>
                        </form>


                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {


        name: 'sidebar',

        computed: {
            ...mapGetters(['currentUser'])
        }
        ,


        data()
        {
            return {}
        }
        ,

        methods: {
            logout()
            {
                firebase.auth().signOut()
                this.$store.dispatch('setUser', null)
                this.$router.push('/Login')


            }
        }
    }
</script>

<style lang="css" scoped>
    .sidebar {
        min-width: 400px;
        display: inline-block;
    }

    .link {
        color: red;
        font-size: 14px;
    }

    .card {
        -moz-box-shadow: 0px 0px 15px 0px #bbbbbb;
        -webkit-box-shadow: 0px 0px 15px 0px #bbbbbb;
        -o-box-shadow: 0px 0px 15px 0px #bbbbbb;
        box-shadow: 0px 0px 15px 0px #bbbbbb;
        filter: progid:DXImageTransform.Microsoft.Shadow(color=#bbbbbb, Direction=NaN, Strength=10);
    }

    .profil {
        padding: 30px;
    }

    .card-avatar {
        display: inline-block;
        float: left;
        padding: 10px;

    }

    .card-avatar-img {
        border-radius: 5%;
    }

    .btn {
        margin-top: 10px;
        display: block;
        clear: both;
        transition: 0.5s;
    }

    .spacer {
        padding: 30px 0;
    }

    .inline {
        display: inline-block;
    }

    .card-user-name {
        padding-top: 25px;
    }

    /* form-create-note */

    .form-create-note input,
    .form-create-note textarea {
        width: 100%;
        max-width: 100%;
        border: none;
        padding: 4px;
        outline: none;
        font-size: 1.2em;
    }

    .valid {
        float: right;
        border-radius: 50%;
        transition: 0.5s;
    }
</style>
