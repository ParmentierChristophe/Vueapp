<template>
    <div class="home">
        <sidebar></sidebar>
        <div class="wrapper">
            <div class="cards">
                <notes v-for="collection in collections" :key="collection.imageId" :collection="collection"></notes>
            </div>
        </div>
    </div>
</template>

<script>
    import cloudinary from 'cloudinary-core';
    import data from '../db.json';
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
                cloudinary: null,
                collections: []
            }
        },
        created() {
            this.cloudinary = cloudinary.Cloudinary.new({
                cloud_name: 'christekh'
            });
            this.collections = data.map(this.transform);
        },
        methods: {
            transform(collection) {
                const imageUrl =
                        this.cloudinary.url(collection.imageId
                        )
                    ;
                return Object.assign(collection, {imageUrl});
            }
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .home {
        font-family: Open Sans, Helvetica, sans-serif;
        font-weight: 300;
        height: 100vh;
        width: 100%;
        background: #fff;
        overflow-x: hidden;
        display: flex;
    }

    body {
        margin: 0;
    }

    main {
        text-align: center;
        margin-top: 40px;
    }

    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }

    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }

    .cards {
        column-count: 1;
        column-gap: 1em;
    }

    .wrapper {
        display: inline-block;
        padding: 15px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 800px) {
        .home {
            display: block;
        }
    }

    @media only screen and (min-width: 500px) {

        .cards {
            column-count: 1;
        }
    }

    /*    @media only screen and (min-width: 700px) {
            .cards {
                column-count: 2;
            }
        }*/

    @media only screen and (min-width: 900px) {
        .cards {
            column-count: 2;
        }
    }

    @media only screen and (min-width: 1100px) {

        .cards {
            column-count: 4;
        }
    }
</style>
