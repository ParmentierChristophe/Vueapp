<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    html {
        overflow-y: auto !important;
    }

    body {
        font-family: Open Sans, Helvetica, sans-serif;
        font-weight: 300;
        height: 100vh;
        width: 100%;
        background: #e53935; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #e35d5b, #e53935); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #e35d5b, #e53935); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        font-family: Open Sans, Helvetica, sans-serif;
        font-weight: 300;
        overflow-x: hidden;
    }
</style>
