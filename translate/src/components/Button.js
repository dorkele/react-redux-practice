import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
//import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
    renderSubmit(language) {
        return language === "english" ? "Submit" : "Voorleggen";
    }
    // hooking up context type to class based comp.
    // special name
    // static contextType adds a property to class
    // another syntax Button.contextType = LanguageContext after creating
    // the class
    // static contextType = LanguageContext;

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
