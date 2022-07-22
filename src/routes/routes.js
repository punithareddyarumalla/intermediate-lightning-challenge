import Game from "../pages/Game";
import Highscore from "../pages/Highscore";
import MainMenu from "../pages/MainMenu";

export default {
  root: "mainmenu",
  routes: [
    {
      path: "mainmenu",
      component: MainMenu,
    },
    {
      path: "game",
      component: Game,
    },
    {
      path: "highscore",
      component: Highscore,
    },
  ],
};
