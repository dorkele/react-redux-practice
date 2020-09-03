import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    //particular to JavaScript - automatically and instantly called before anything else
    constructor(props) {
        // we have to super!
        super(props);
        this.state = { lat: null };
    }

    // React says we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            //if it succeeds, the first argument:
            (position) => console.log(position),
            //if it fails, the second:
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
