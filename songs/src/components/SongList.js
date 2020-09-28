import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
    render() {
        // this. props === {songs: state.songs}
        return <div>Song List</div>;
    }
}
//state - all our data from the store
const mapStateToProps = (state) => {
    return { songs: state.song };
};

export default connect(mapStateToProps)(SongList);
