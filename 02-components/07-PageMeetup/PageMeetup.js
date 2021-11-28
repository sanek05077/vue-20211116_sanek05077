import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupView from './MeetupView.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      loader: false,
      error: '',
    };
  },

  watch: {
    meetupId: {
      deep: true,
      immediate: true,
      handler(meetupId) {
        this.loader = true;
        if (meetupId) {
          return fetchMeetupById(meetupId)
            .then(data => {
              if (data) {
                this.meetup = data;
                this.loader = false;
              }
            })
            .catch((error) => {
              this.meetup = null;
              this.loader = false;
              this.error = error.message;
            });
        }
      },
    },
  },
  template: `
    <div class="page-meetup">
      <ui-container v-if="loader">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>
      <template v-else>
        <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>
        <ui-container v-else>
          <ui-alert>{{ error }}</ui-alert>
        </ui-container>
      </template>

    </div>`,
});
