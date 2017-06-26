import placeholderImage from '../assets/placeholder.jpg';

function cleanEvents(eventList) {
  /* eslint-disable no-param-reassign */
  return eventList.reduce((events, event) => {
    event.title = event.title ? event.title : 'No Title';
    event.priceLabel = event.price ? `Price: ${event.price}` : '';
    event.image = event.image ? event.image : placeholderImage;
    if (!event.pending) {
      events.push(event);
    }
    return events;
  }, []);
  /* eslint-enable no-param-reassign */
}

export default cleanEvents;
