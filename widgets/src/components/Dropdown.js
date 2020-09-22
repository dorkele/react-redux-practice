import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // it should only run once bc we want to make sure we set up an event
    // listener one time!
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            } else {
                setOpen(false);
            }
        };
        document.body.addEventListener("click", onBodyClick);
        return () => {
            //we need d´this cleanup for when we toggle the whole component
            //so that we remove the eventlistener as well
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                onClick={() => {
                    onSelectedChange(option);
                }}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {/* ovaj dio isto prilagoditi da se mijenja
            <div style={{ color: `${selected.value}` }}>
                This text is {selected.value}.
            </div> */}
        </div>
    );
};

export default Dropdown;
