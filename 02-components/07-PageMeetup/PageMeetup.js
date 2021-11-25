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
    };
  },

  watch: {
    meetupId: {
      deep: true,
      immediate: true,
      handler(meetupId) {
        if (meetupId) {
          return fetchMeetupById(meetupId).then(data => {
            this.meetup = data;
          })
            .catch(error => console.log(error))
        }
      },
    },
  },
  template: `
    <div class="page-meetup">
    <template v-if="meetup">
      <meetup-view :meetup="meetup"></meetup-view>
    </template>
    <ui-container v-else>
      <ui-alert>error</ui-alert>
    </ui-container>

      <ui-container>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>




    </div>`,
});
