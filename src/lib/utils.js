import placeholderImage from '../assets/placeholder.jpg';

function cleanEvents(eventList) {
  /* eslint-disable no-param-reassign */
  return eventList.map((event) => {
    event.title = event.title ? event.title : 'No Title';
    event.priceLabel = event.price ? `Price: ${event.price}` : '';
    event.image = event.image ? event.image : placeholderImage;
    return event;
  });
  /* eslint-enable no-param-reassign */
}

export default cleanEvents;
