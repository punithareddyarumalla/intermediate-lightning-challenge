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
          textColor: 0xff333333,
          text: "Snake",
          fontSize: 50,
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
    //   HomeLink: {
    //     text: {
    //       textColor: 0xfffafafa,
    //       text: "Home",
    //       fontSize: styles.fontSizes.large.size,
    //       lineHeight: styles.fontSizes.large.lineHeight,
    //       ...Navbar.selectedTextHighlightStyles,
    //       highlight: false,
    //     },
    //   },
    //   NegativeToggler: {
    //     flexItem: {
    //       marginLeft: styles.spacing.small,
    //     },
    //     text: {
    //       textColor: 0xff333333,
    //       text: "☀️",
    //       fontSize: styles.fontSizes.large.size,
    //       lineHeight: styles.fontSizes.large.lineHeight,
    //       ...Navbar.selectedTextHighlightStyles,
    //       highlight: false,
    //     },
    //   },
    };
  }
}
