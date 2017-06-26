<template>
  <div>
    <h1 class="title"> Add Event </h1>
    <form class="uk-container" v-on:submit.prevent="addEventURL">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Submit Meetup URL</legend>
        <div class="uk-margin">
          <input class="uk-input" type="url" v-model="meetup_url" name="meetup_url" placeholder="https://www.meetup.com/<meetup-group>/events/<event-id>/" required>
        </div>
        <button class="uk-button uk-button-default">Submit Event</button>
      </fieldset>
    </form>
    <hr class="uk-divider-icon">
    <form class="uk-container" v-on:submit.prevent="addEvent">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Enter Event Info</legend>
        <div class="uk-margin">
          <input class="uk-input" type="text" name="title" placeholder="Title" required>
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="url" name="url" placeholder="Event URL">
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="url" name="image-url" placeholder="Image URL">
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
            <textarea class="uk-textarea" rows="5" name="description" placeholder="Description" required></textarea>
        </div>
        <div class="uk-margin">
          <label for="start">Start: </label>
          <input class="uk-input uk-form-width-small" type="time" name="start-time" placeholder="Start Time" required>
          <label for="end">End: </label>
          <input class="uk-input uk-form-width-small" type="time" name="end-time" placeholder="End Time">
          <label for="price">Price: </label>
          <input class="uk-input uk-form-width-small" type="number" name="price" placeholder="Price">
        </div>
        <button class="uk-button uk-button-default">Submit Event</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addEvent',
  data() {
    return {
      meetup_url: '',
      title: '',
      event_url: '',
      image_url: '',
      date: '',
      location_name: '',
      address: '',
      description: '',
      start_time: '',
      end_time: '',
      price: '',
    };
  },
  methods: {
    addEvent() {
      console.log('event');
    },
    addEventURL() {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.events/api/v1/events/url';
      const settings = this.createSettings();
      fetch(url, settings)
        .then(data => data.json())
        .then(() => {
          this.$router.push({ path: '/' });
        });
    },
    createSettings() {
      const form = `${encodeURIComponent('url')}=${encodeURIComponent(this.meetup_url)}`;
      const token = localStorage.getItem('session');
      return {
        method: 'Post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
        body: form,
      };
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
  margin-bottom: 1em;
}
.title {
  text-align: center;
  margin-top: 1em;
}
</style>
