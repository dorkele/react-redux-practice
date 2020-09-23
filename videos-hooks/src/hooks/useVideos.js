import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", { params: { q: term } });
        setVideos(response.data.items);
    };

    //convention of react is to return an array,
    //javascript community convention to return an object with properties
    return [videos, search];
};

export default useVideos;
