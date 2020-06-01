import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#4285F4",
        // secondary: "#424242",
        // accent: "#82B1FF",
        // error: "#ff4444",
        // info: "#33b5e5",
        // success: "#00C851",
        // warning: "#ffbb33",
        primary: "#DCE5F0",
        secondary: "#99ADCC",
        accent: "#899BB7",
        darkBlue: "#2D345A", // Dark blue
        lightBlue: "#6696C1", // Light blue
        selected: "#3A48AA", // Selected blue
        iconColor: "#A36950", // Icon color?
      },
      dark: {
        primary: colors.blue.lighten3,
      },
      mega: {
        primary: "#DCE5F0",
        secondary: "#99ADCC",
        accent: "#899BB7",
        color1: "#2D345A",
        color2: "#6696C1",
        color3: "#3A48AA",
        color4: "#A36950",
      },
    },
  },
});
