<template>
  <div class="app">
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li><a href="#"><img src="./assets/glogo.png">Meetup Events</a></li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li><router-link to="/">Day</router-link></li>
                <li><router-link to="/all">All</router-link></li>
                <li><router-link to="/add">Add Event</router-link></li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
img {
  width: 100px;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
  background: #333333;
}

</style>
