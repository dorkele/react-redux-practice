import axios from "axios";
import secrets from "./secrets.json";

//this method will create an instance of axios client with a couple
// of default properties
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID " + secrets.KEY,
    },
});
