// purpose of this file is to create a context object and export it.
// separate file bc we will import the context obj only into the
// component that we care about

import React from "react";

// capital C form component we created
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
    state = { language: "english" };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    onLanguageChange: this.onLanguageChange,
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
