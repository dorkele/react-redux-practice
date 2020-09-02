import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
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
