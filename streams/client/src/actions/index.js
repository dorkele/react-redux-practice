import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    ADD_COMMENT,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    // do some programmatic navigation to
    // get the user back to the root route
    history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
};

export const addComment = (id, comments) => async (dispatch, getState) => {
    const { userId } = getState().auth;

    console.log("form values but comments: ", comments);
    console.log("userId: ", userId);

    const response = await streams.patch(`/streams/${id}`, comments);

    console.log("response.data: ", response.data);
    dispatch({ type: ADD_COMMENT, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
    history.push("/");
};
