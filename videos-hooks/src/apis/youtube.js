import axios from "axios";
import secrets from "./secret.json";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: secrets.KEY,
    },
});
