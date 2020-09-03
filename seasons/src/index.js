import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    //particular to JavaScript - automatically and instantly called before anything else
    constructor(props) {
        // we have to super!
        super(props);
        // this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: "" };
        window.navigator.geolocation.getCurrentPosition(
            //if it succeeds, the first argument:
            (position) => {
                // we called setState!!!!!!!
                this.setState({ lat: position.coords.latitude });
            },
            //if it fails, the second:
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
