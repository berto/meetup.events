import { fetchJSON, postJSON, deleteJSON } from './fetchHelpers';

const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/' : 'https://api.meetup.events/';
const AUTH_URL = `${BASE_URL}auth/login`;
const API_URL = `${BASE_URL}api/v1/events`;
const offset = new Date().getTimezoneOffset() / 60;

function login(password) {
  return postJSON(AUTH_URL, { password });
}

function getAll() {
  return fetchJSON(`${API_URL}?offset=${offset}`);
}

function getUpcoming() {
  return fetchJSON(`${API_URL}/upcoming?offset=${offset}`);
}

function create(event) {
  console.log(event);
  return postJSON(API_URL, event);
}

function destroy(id) {
  return deleteJSON(`${API_URL}/${id}`);
}

function approve(id) {
  return postJSON(`${API_URL}/${id}/approve`);
}

function createURL(url) {
  return postJSON(`${API_URL}/url`, {
    url,
  });
}

export default {
  login,
  getAll,
  getUpcoming,
  create,
  createURL,
  destroy,
  approve,
};
