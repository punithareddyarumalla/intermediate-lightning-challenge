import { Utils, Router } from "@lightningjs/sdk";
import colors from "./lib/colors";
import routes from "./routes";
import Navbar from "./widgets/Navbar"

export default class App extends Router.App {
  _setup() {
    Router.startRouter(routes);
  }

  static _template() {
    return {
      ...super._template(),
      w: 1920,
      h: 1080,

      color: 0xff333333,
      rect: true,
      Widgets: {
        Navbar: {
          type: Navbar
        }
      }
    };
  }

  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static colors() {
    return colors;
  }
}
