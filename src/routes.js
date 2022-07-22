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
            widgets: ["Navbar"]
        },
        {
            path: "game",
            component: Game,
            widgets: ["Navbar"]
        },
    ]
};