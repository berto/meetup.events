<template>
  <form class="uk-container">
      <fieldset class="uk-fieldset">
  
          <legend class="uk-legend">Suggest An Event</legend>
  
          <div class="uk-margin">
              <input class="uk-input" type="text" name="title" placeholder="Title" required>
          </div>
  
          <div class="uk-margin">
              <input class="uk-input" type="url" name="url" placeholder="URL Link">
          </div>

          <div class="uk-margin">
              <input class="uk-input" type="date" name="date" placeholder="URL Link" required>
          </div>

          <div class="uk-margin">
              <input class="uk-input" type="text" name="location-name" placeholder="Location Name" required>
          </div>

          <div class="uk-margin">
              <input class="uk-input" type="text" name="address" placeholder="Address">
          </div>

          <div class="uk-margin">
              <input class="uk-input uk-form-width-small" type="time" name="start-time" placeholder="Start Time" required>
              <input class="uk-input uk-form-width-small" type="time" name="end-time" placeholder="End Time">
          </div>

          <div class="uk-margin">
              <input class="uk-input" type="number" name="price" placeholder="Price">
          </div>
  
          <button class="uk-button uk-button-default">Submit Event</button>
      </fieldset>
  </form>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
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
</style>
