import React from "react";
import "./index.css";

export default function Search({ onChange }) {
    return (
        <div className="searchbar w-100 p-3 text-center">
            <input type="text" placeholder="Search" onChange={onChange}></input>
        </div>
    );
};
