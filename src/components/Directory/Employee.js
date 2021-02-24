import React from "react";

function zero(n) {
    return n < 10 ? `0${n}` : `${n}`;
}

function formatDate(date) {
    return `${zero(date.getMonth() + 1)}-${zero(date.getDate())}-${date.getFullYear()}`;
}

export default function Employee({ image, name, phone, email, dob }) {
    return (
        <li className="row py-2">
            <div className="col-2 m-auto">
                <img className="employee-img" alt={name} src={image}/>
            </div>
            <div className="col-2 m-auto">{name}</div>
            <div className="col-3 m-auto">{phone}</div>
            <div className="col-3 m-auto">
                <a target="_blank" rel="noreferrer" href={"mailto:" + email}>{email}</a>
            </div>
            <div className="col-2 m-auto">{formatDate(new Date(dob))}</div>
        </li>
    );
};
