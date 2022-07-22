import { Lightning, Colors, Utils } from "@lightningjs/sdk";
import styles from "../styles";

export default class Navbar extends Lightning.Component {
  static selectedTextHighlightStyles = {
    highlight: true,
    highlightOffset: 2,
    highlightColor: 0xffc09d7b,
  };

  static _template() {
    return {
      w: 1920,
      h: 60,
      rect: true,
      color: 0xff4a4a4a,
      flex: {
        alignItems: "center",
        paddingTop: styles.spacing.small,
        paddingRight: styles.spacing.large,
        paddingBottom: styles.spacing.small,
        paddingLeft: styles.spacing.large,
      },
      Text: {
        text: {
          text: "Snake",
          fontSize: 40,
          lineHeight: styles.fontSizes.large.lineHeight,
          textColor: Colors("green").get(),
        },
        flexItem: {
            marginRight: 20
        },
      },
      Icon: {
        w: 50,
        h: 50,

        texture: {
          type: Lightning.textures.ImageTexture,
          src: Utils.asset("images/snake.png"),
        },
      },
      Greeting: {
        text: {
            textColor: 0xfff6f6f6,
            text: "Good Morning FX",
            fontSize: 30
        },
        flexItem: {
            marginLeft: 100
        }
      }
    };
  }

  _setup() {
    const day = new Date();
    var hr = day.getHours();
    let greeting;
    if (hr >= 0 && hr < 12) {
        greeting = "Good Morning FX";
    } else if (hr == 12) {
        greeting = "Good Night FX";
    } else if (hr >= 12 && hr <= 17) {
        greeting = "Good Afternoon FX";
    } else {
        greeting = "Good Evening FX";
    }

    this.tag("Greeting").patch({
        text: greeting
    })
  }
}
