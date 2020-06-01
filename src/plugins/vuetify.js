import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4285F4",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#ff4444",
        info: "#33b5e5",
        success: "#00C851",
        warning: "#ffbb33",
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
