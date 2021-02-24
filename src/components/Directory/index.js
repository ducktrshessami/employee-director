import React from "react";
import "./index.css";

export default function Directory({ children }) {
    return (
        <ul className="directory my-5 mx-auto text-center">
            <li className="row py-2">
                <strong className="col-2 m-auto">Name</strong>
                <strong className="col-2 m-auto">Image</strong>
                <strong className="col-3 m-auto">Phone</strong>
                <strong className="col-3 m-auto">Email</strong>
                <strong className="col-2 m-auto">DOB</strong>
            </li>
            {children}
        </ul>
    );
};

export { default as Employee } from "./Employee";
