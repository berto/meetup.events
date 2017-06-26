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
        <span v-if="submittedUrl">Thank you for your suggestion!</span>
        <span v-if="addedUrl">Event Added!</span>
      </fieldset>
    </form>
    <hr class="uk-divider-icon">
    <form class="event-form uk-container" v-on:submit.prevent="addEvent">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Enter Event Info</legend>
        <div class="uk-margin">
          <input class="uk-input" type="text" v-model="title" name="title" placeholder="Title" required>
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="url" v-model="url" name="url" placeholder="Event URL">
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="url" v-model="image" name="image-url" placeholder="Image URL">
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="date" v-model="date" name="date" placeholder="URL Link" required>
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="text" v-model="location_name" name="location-name" placeholder="Location Name" required>
        </div>
        <div class="uk-margin">
          <input class="uk-input" type="text" v-model="address" name="address" placeholder="Address">
        </div>
        <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" v-model="description" name="description" placeholder="Description" required></textarea>
        </div>
        <div class="uk-margin">
          <label for="start">Start: </label>
          <input class="uk-input uk-form-width-small" type="time" v-model="start_time" name="start-time" placeholder="Start Time" required>
          <label for="end">End: </label>
          <input class="uk-input uk-form-width-small" type="time" v-model="end_time" name="end-time" placeholder="End Time">
          <label for="price">Price: </label>
          <input class="uk-input uk-form-width-small" type="number" v-model="price" name="price" placeholder="Price">
        </div>
        <button class="uk-button uk-button-default">Submit Event</button>
        <span v-if="submittedEvent">Thank you for your suggestion!</span>
        <span v-if="addedEvent">Event Added!</span>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-restricted-syntax */
const urlForm = {
  meetup_url: '',
};
const eventForm = {
  title: '',
  url: '',
  image: '',
  date: '',
  location_name: '',
  address: '',
  description: '',
  start_time: '',
  end_time: '',
  price: '',
};
const messages = {
  submittedUrl: false,
  addedUrl: false,
  submittedEvent: false,
  addedEvent: false,
};

export default {
  name: 'addEvent',
  data() {
    return Object.assign({}, urlForm, eventForm, messages);
  },
  methods: {
    addEvent() {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.events/api/v1/events';
      const form = this.createForm();
      const settings = this.createSettings(form);
      fetch(url, settings)
        .then(data => data.json())
        .then((response) => {
          this.clearForm();
          if (response.pending) {
            this.submittedEvent = true;
          } else {
            this.addedEvent = true;
          }
        });
    },
    createForm() {
      const form = [];
      for (const key in eventForm) {
        if (Object.prototype.hasOwnProperty.call(eventForm, key)) {
          form.push(`${encodeURIComponent(key)}=${encodeURIComponent(this[key])}`);
        }
      }
      return form.join('&');
    },
    clearForm() {
      for (const key in eventForm) {
        if (Object.prototype.hasOwnProperty.call(eventForm, key)) {
          this[key] = '';
        }
      }
    },
    addEventURL() {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.events/api/v1/events/url';
      const form = `${encodeURIComponent('url')}=${encodeURIComponent(this.meetup_url)}`;
      const settings = this.createSettings(form);
      fetch(url, settings)
        .then(data => data.json())
        .then((response) => {
          this.meetup_url = '';
          if (response.pending) {
            this.submittedUrl = true;
          } else {
            this.addedUrl = true;
          }
        });
    },
    createSettings(body) {
      const token = localStorage.getItem('session');
      return {
        method: 'Post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
        body,
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
