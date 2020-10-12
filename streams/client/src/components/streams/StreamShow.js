import React from "react";
// flv is about downloading the video stream and converting it to
// some file that can actually be played inside of this normal HTML
// video player
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }
    // import flv library into our file
    // create a video element and return it from our react comp
    // need to get a reference to that element
    // create a player and pass a reference to the video element off
    // to that player
    //  <script src="flv.min.js"></script>
    // <video id="videoElement"></video>
    // <script>
    //     if (flvjs.isSupported()) {
    //         var videoElement = document.getElementById('videoElement');
    //         var flvPlayer = flvjs.createPlayer({
    //             type: 'flv',
    //             url: 'http://example.com/flv/video.flv'
    //         });
    //         flvPlayer.attachMediaElement(videoElement);
    //         flvPlayer.load();
    //         flvPlayer.play();
    //     }
    // </script>
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${id}.flv`,
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }

        const { title, description } = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{ width: "100%" }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
