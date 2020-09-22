import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("");
    console.log("i run with every render");

    useEffect(() => {
        // method #1 for async await with useEffect
        const search = async () => {
            await axios.get("hjdhsk");
        };
        search();

        // method #2 IFEE
        // (async () => {
        //     await axios.get("hkhdslia");
        // })();

        //method #3 promises
        // axios.get("hjskla").then((response) => {
        //     console.log(response.data);
        // });
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
