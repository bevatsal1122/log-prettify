export default class decorator {

    static consoleLog({
        text, styledText
    }) {
        console.log(`%c ${text}`, styledText);
    }

    static mod({text = "",
    margin = "0px",
    marginTop = "0px",
    marginBottom = "0px",
    marginLeft = "0px",
    marginRight = "0px",
    padding = "0px",
    paddingTop = "0px",
    paddingLeft = "0px",
    paddingRight = "0px",
    fontSize = "12.5px",
    color = "white",
    backgroundColor = "default"}) {
        if (margin !== "0px")
        {
            marginTop = (marginTop !== "0px" ? marginTop : margin);
            marginBottom = (marginBottom !== "0px" ? marginBottom : margin);
            marginLeft = (marginLeft !== "0px" ? marginLeft : margin);
            marginRight = (marginRight !== "0px" ? marginRight : margin);
        }
        if (padding !== "0px")
        {
            paddingTop = (paddingTop !== "0px" ? paddingTop : padding);
            paddingLeft = (paddingLeft !== "0px" ? paddingLeft : padding);
            paddingRight = (paddingRight !== "0px" ? paddingRight : padding);
        }
        let styledText = `color: ${color}; background-color: ${backgroundColor}; font-size: ${fontSize}; margin: ${margin}; padding: ${padding}; margin-left: ${marginLeft}; margin-right: ${marginRight}; margin-top: ${marginTop}; margin-bottom: ${marginBottom}; padding-left: ${paddingLeft}; padding-right: ${paddingRight}; padding-top: ${paddingTop};`;

        this.consoleLog({text, styledText});
    }

    static success(text) {
        let styledText = `color: green; font-size: 14px; margin: 2px; padding: 2px;`;
        this.consoleLog({text: "✔ SUCCESS", styledText: "color: green; background-color: black; font-size: 14px; padding-right: 5px;"});
        this.consoleLog({text, styledText});
    }

    static warn(text) {
        let styledText = `color: yellow; font-size: 14px; margin: 2px; padding: 2px;`;
        this.consoleLog({text: "⚠️ Warning", styledText: "color: yellow; background-color: black; font-size: 14px; padding-right: 5px;"});
        this.consoleLog({text, styledText});
    }

    static danger(text) {
        let styledText = `color: red; font-size: 15px; margin: 2.5px; padding: 2px;`;
        this.consoleLog({text: "❌ DANGER", styledText: "color: red; background-color: black; font-size: 14px; padding-right: 5px;"});
        this.consoleLog({text, styledText});
    }

}
