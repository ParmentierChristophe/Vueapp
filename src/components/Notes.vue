<template lang="html">
  <div class="notes">
    <div class="center-title">
      <h1 class="title">Toutes les notes</h1>
    </div>
    <hr>
      <div class="note">
      <p class="title stop-margin">Le Silmarillion</p>
      <i class="subtitle is-info is-6">Il y a 3 minutes</i>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="author"><i>By Crispy</i></p>
      <div class="up-down">
        <span class="icon">
          <a class="change-link like" href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
        </span>
        <p class="title is-6 margin-like-dislike">3</p>

          <span class="icon">

          <a class="change-link dislike" href="#"><i class="fa fa-thumbs-o-down"></i></a>

        </span>
        <p class="title is-6 margin-like-dislike">-3</p>

      </div>
  </div>


  <div class="note">
  <p class="title stop-margin">Les Enfants de Húrin </p>
  <i class="subtitle is-6">Il y a 1 jours</i>
  <hr>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  <p class="author"><i>By J.R.R Tolkien</i></p>

  <div class="up-down">
    <span class="icon">
      <a class="change-link activelike" href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
    </span>
    <p class="title is-6 margin-like-dislike">21</p>

      <span class="icon">

      <a class="change-link dislike" href="#"><i class="fa fa-thumbs-o-down"></i></a>

    </span>
    <p class="title is-6 margin-like-dislike">-32</p>

  </div>

</div>



<div class="note">
<p class="title stop-margin">Contes et légendes inachevés, tome 1</p>
<i class="subtitle is-6">Il y a 3 jours</i>
<hr>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="author"><i>By J.R.R Tolkien</i></p>

<div class="up-down">
  <span class="icon">
    <a class="change-link like" href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
  </span>
  <p class="title is-6 margin-like-dislike">95</p>

    <span class="icon">

    <a class="change-link activedislike" href="#"><i class="fa fa-thumbs-o-down"></i></a>

  </span>
  <p class="title is-6 margin-like-dislike">-42</p>

</div>

</div>



<div class="note">
<p class="title stop-margin">Le Hobbit</p>
<i class="subtitle is-6">Il y a 1 semaine</i>
<hr>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
<p class="author"><i>By J.R.R Tolkien</i></p>

<div class="up-down">
  <span class="icon">
    <a class="change-link activelike" href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
  </span>
  <p class="title is-6 margin-like-dislike">32</p>

    <span class="icon">

    <a class="change-link dislike" href="#"><i class="fa fa-thumbs-o-down"></i></a>

  </span>
  <p class="title is-6 margin-like-dislike">-8</p>

</div>

</div>



<div class="note">
<p class="title stop-margin">Le Seigneur des Anneaux </p>
<i class="subtitle is-6">Il y a 3 mois</i>
<hr>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="author"><i>By J.R.R Tolkien</i></p>

<div class="up-down">
  <span class="icon">
    <a class="change-link activelike" href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></a>
  </span>
  <p class="title is-6 margin-like-dislike">72</p>

    <span class="icon">

    <a class="change-link dislike" href="#"><i class="fa fa-thumbs-o-down"></i></a>

  </span>
  <p class="title is-6 margin-like-dislike">0</p>

</div>

</div>


</div>
</template>

<script>
export default {
  name: 'notes'
}
</script>

<style scoped lang="css">
.stop-margin {
  margin-bottom: 0;
}
.notes {
  display: inline-block;
  width: 65%;
}

.center-title {
  text-align: center;
}
.note{
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 280px;
  margin: 16px;
  float: left;
}
.note h1{
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
</style>
