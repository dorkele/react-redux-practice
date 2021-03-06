import { combineReducers } from "redux";
// renaming the specifically named reducer to make it a bit clearer
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth: authReducer,
    // very particular key for redux-form
    form: formReducer,
    streams: streamReducer,
});
