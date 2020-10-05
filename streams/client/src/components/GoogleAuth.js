import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        // we have to give callback as 2nd arg
        window.gapi.load("client:auth2", () => {
            // returns promise
            window.gapi.client
                .init({
                    clientId:
                        "577052830159-f4qe84oj1e9i743a1buan7tg1ues40mg.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>BO</div>;
        } else if (this.state.isSignedIn) {
            return <div>signed in</div>;
        } else {
            return <div>not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
