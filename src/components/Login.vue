<template>
  <form class="uk-container" v-on:submit.prevent="login">
    <fieldset class="uk-fieldset">
      <legend class="uk-legend">Enter Password</legend>
      <div class="uk-margin">
        <input class="uk-input" type="password" v-model="password" required>
      </div>
      <button class="uk-button uk-button-default">Login</button>
      <p v-if="error"> Incorrect Password </p>
    </fieldset>
  </form>
</template>

<script>
import Events from '../lib/Events';

export default {
  name: 'login',
  data() {
    return {
      password: '',
      error: false,
    };
  },
  methods: {
    login() {
      Events
        .login(this.password)
        .then(this.handleToken)
        .catch(this.handleError);
    },
    handleToken(response) {
      if (response.token) {
        this.$router.push({ path: 'authorize', query: response });
      } else {
        this.error = true;
      }
    },
    handleError() {
      this.error = true;
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 1em;
}
button {
  color: #999999;
  background: #333333;
}
p {
  color: red;
}
</style>
