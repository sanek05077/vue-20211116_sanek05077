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
      filter: {
        search: '',
      },
    };
  },
  computed: {
    filteredEmails() {
      if (!this.emails) {
        return null;
      }

      const searchFilter = (email) =>
        [email]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());
      return this.emails.filter(
        (email) =>
          searchFilter(email)
      );
    },
  },
};

const app = createApp(App);

const vm = app.mount('#app');
