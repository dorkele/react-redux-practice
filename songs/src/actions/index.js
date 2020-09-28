// Action creator
export const selectSong = (song) => {
    // return an action, we have to have type property
    // and optionally payload
    return {
        type: "SONG_SELECTED",
        payload: song,
    };
};
