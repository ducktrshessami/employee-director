import React from "react";

export default function Employee({ image, name, phone, email, dob }) {
    return (
        <li className="row">
            <div className="col-2 m-auto">
                <img className="employee-img" alt={name} src={image}/>
            </div>
            <div className="col-2 m-auto">{name}</div>
            <div className="col-3 m-auto">{phone}</div>
            <div className="col-3 m-auto">
                <a target="_blank" rel="noreferrer" href={"mailto:" + email}>{email}</a>
            </div>
            <div className="col-2 m-auto">{dob}</div>
        </li>
    );
};
