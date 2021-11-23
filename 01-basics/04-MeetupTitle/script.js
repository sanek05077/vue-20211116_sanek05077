import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = {
  data() {
    return {
      meetupName: null,
      title: null,
    };
  },
  watch: {
    meetupName: {
      deep: true,
      immediate: true,
      handler(meetupId) {
        if (meetupId) {
          return fetchMeetupById(meetupId).then(data => {
            this.title = data.title;
          });
        }
      },
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;


