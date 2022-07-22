import Game from "./pages/Game";
import Highscore from "./pages/Highscore";
import MainMenu from "./pages/MainMenu";

export default {
    root: "",
    routes: [
        {
            path: "mainMenu",
            component: MainMenu,
        },
        {
            path: "highscore",
            component: Highscore,
        },
        {
            path: "game",
            component: Game,
        },
    ]
};