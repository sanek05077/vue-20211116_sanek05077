import { createApp } from './vendor/vue.esm-browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const App = {
  data() {
    return {
      emails,
      search: '',
    };
  },
  computed: {
    filteredEmails() {
      if (!this.emails) {
        return null;
      }

      const emailsWithData = emails.map((email) => ({
        email,
        is_matched: false,
      }));

      const filteredEmailsWithData = emailsWithData.map(({ email }) => {
        return {
          email,
          is_matched: this.search !== ''
            ? email.toLowerCase().includes(this.search.toLowerCase())
            : false
        };
      });
      return filteredEmailsWithData;
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
