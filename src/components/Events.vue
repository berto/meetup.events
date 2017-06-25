<template>
  <div uk-grid>
    <div class="uk-animation-slide-left-small uk-width-1-1@s uk-width-1-3@l uk-width-1-2@m" v-for="(event, index) in events">    
      <div class="uk-card uk-card-default">    
        <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img class="uk-border-circle" width="40" height="40" v-bind:src="event.image">
            </div>
            <div class="uk-width-expand">
              <h3 class="uk-card-title uk-margin-remove-bottom">
                <a v-bind:href="event.url" target="_blank">
                  {{event.title}}
                </a>
              </h3>
              <p class="uk-text-meta uk-margin-remove-top">
              <time datetime="2016-04-01T19:00">
                {{event.start_time | moment("dddd, MMMM Do YYYY")}}
                <br>
                {{event.start_time | moment("h:mm a")}}
                {{event.end_time ? "-" : "" }}
                {{event.end_time | moment("h:mm a") }} 
              </time>
              </p>
            </div>
          </div>
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            {{event.price}}
          </div>
        </div>
        <div class="uk-card-body">
          <p class="location">{{event.location_name ? event.location_name : "No Location Provided"}}</p>
          <p>{{event.address}}</p>
        </div>
        <div class="uk-card-footer">
          <a href="#" v-bind:uk-toggle="`target: #${index}`" class="uk-button uk-button-text">Description</a>
        </div>
        <div v-bind:id="index" uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <p v-html="event.description"> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cleanEvents from '../lib/utils';

export default {
  name: 'today',
  data() {
    return {
      events: [],
    };
  },
  created() {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.events/api/v1/events';
    fetch(url)
      .then(data => data.json())
      .then((events) => {
        this.events = cleanEvents(events);
      });
  },
};

</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
}
a, .location {
  color: black;
}
p {
  margin: 0;
}
.uk-card {
  margin-top: 1em;
  height: 50vh;
  overflow: scroll;
}
</style>
