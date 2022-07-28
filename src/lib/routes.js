import MainMenu from "../pages/MainMenu"
import Highscore from "../pages/Highscore"
import Game from "../pages/Game"


export default {
  root: "mainMenu", // Sets the main menu as the first / default page to open
  routes: [
    {
      path: "mainMenu", // path to access the page
      component: MainMenu, // Page
    },
    {
      path: "highScore", 
      component: Highscore, 
    },
    {
      path: "game", 
      component: Game,
    },
  ],
};

/* The way you split out the files is good.Good Idea to put this page in lib */