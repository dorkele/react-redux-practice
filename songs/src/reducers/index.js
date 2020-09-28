import { combineReducers } from "redux";
const songsReducer = () => {
    return [
        { title: "mirrorball", duration: "4:05" },
        { title: "peace", duration: "3:13" },
        { title: "hoax", duration: "2:45" },
        { title: "invisible string", duration: "5:00" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
