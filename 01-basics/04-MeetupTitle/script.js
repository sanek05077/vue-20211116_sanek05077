import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const App = {
  data() {
    return {
      meetupName: null,
    };
  },
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
  watch: {
    meetupName: {
      deep: true,
      immediate: true,
      handler(meetupId) {
        if (meetupId >= 1) {
          const results = this.fetchMeetupById(meetupId).then(data => {
            console.log(data.title)

          });
        }
      },
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;


