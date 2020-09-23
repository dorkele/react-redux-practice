import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null} */}
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};