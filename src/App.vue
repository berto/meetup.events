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
                <li><router-link to="/">Today</router-link></li>
                <li><router-link to="/upcoming">Upcoming</router-link></li>
                <li><router-link to="/add">Add Event</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/suggested">Suggested</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="isLoggedIn" v-on:click="logout"><a>Logout</a></li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    const token = localStorage.getItem('session');
    if (token) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('session');
      this.$router.go('/');
      this.$forceUpdate();
    },
  },
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
