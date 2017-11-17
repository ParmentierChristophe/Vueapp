<template lang="html">
    <div class="notes">

        <div class="card">
            <div class="card-content">
                <img :src="collection.imageUrl" :alt="collection.collector">
                <h4>{{collection.collector}}</h4>
                <p>{{collection.description}}</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        props: ['collection'],
        name: 'notes',


        mounted: function () {
            this.$redrawVueMasonry();
        }
    }
</script>

<style scoped lang="css">
    .stop-margin {
        margin-bottom: 0;
    }

    .notes {
        display: inline-block;
    }

    .center-title {
        text-align: center;
    }

    .note {
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 5px #ccc;
        padding: 10px;
        width: 300px;
        margin: 16px;
        float: left;
    }

    .note h1 {
        font-size: 1.1em;
        margin-bottom: 6px;
    }

    .author {
        float: right;
    }

    .change-link {
        color: black;
        opacity: 0.3;
        transition: 0.2s;
    }

    .like:hover {
        color: #23D160;
        opacity: 1;
    }

    .dislike:hover {
        color: #FF3860;
        opacity: 1;
    }

    .margin-like-dislike {
        margin: 0;
        padding: 0;
        opacity: 0.3;
        display: inline-block;
    }

    .up-down {
        margin-top: 10px;
        clear: both;

    }

    .activelike {
        color: #23D160;
        opacity: 1;
    }

    .activedislike {
        color: #FF3860;
        opacity: 1;
    }

    /* mansory test*/

    .card {
        background: #F5F5F5;
        padding: 10px;
        margin: 0 0 1em;
        width: 100%;
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }

    .card:hover {
        background: #EBEBEB;
    }

    img {
        display: block;
        width: 100%;
    }
</style>
