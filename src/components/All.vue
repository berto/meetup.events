<template>
  <div class="uk-container">
    <div class="uk-grid-collapse uk-child-width-1-1 uk-text-center" v-for="event in events" uk-grid>    
      <div class="uk-card uk-card-hover uk-card-body">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img v-bind:src="event.image">
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      <a target="_blank" v-bind:href="event.url">
                        {{event.title}}
                      </a>
                    </h3>
                    <p class="uk-text-meta location uk-margin-remove-top">{{event['location-name']}}</p>
                    <p class="uk-text-meta uk-margin-remove-top">{{event.address}}</p>
                    <p class="uk-text-meta uk-margin-remove-top">{{event.time}}</p>
                </div>
                <div class="uk-width-auto">
                  {{event.priceLabel}} 
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import events from '../assets/events.json';
import cleanEvents from '../lib/utils';

export default {
  name: 'main',
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.events = cleanEvents(events);
    // fetch('../assets/events.json').then(data => data.json())
    //   .then((events) => {
    //     this.events = events;
    //   });
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
}
</style>
