import React from "react";
//import Accordion from "./components/Accordion";
import Search from "./components/Search";

//it can go inside or outside the component bc it is a static array
// that will not change over time
const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favourite JS library among engeneers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};
