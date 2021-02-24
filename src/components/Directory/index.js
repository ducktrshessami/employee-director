import React, { Component } from "react";
import getUsers from "../../utils/rug";
import Employee from "./Employee";
import "./index.css";

export default class Directory extends Component {
    state = {
        employees: [],
        sorted: false
    }

    componentDidMount() {
        getUsers(10)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                else {
                    let employees = res.data.results;
                    employees.map(employee => employee.toString = function() {
                        return this.name.first;
                    });
                    this.setState({
                        employees: employees,
                        sorted: false
                    });
                }
            })
            .catch(console.error);
    }

    render() {
        return (
            <ul className="directory my-5 mx-auto text-center">
                <li className="row py-3">
                    <strong className="col-2 m-auto">Image</strong>
                    <strong className="col-2 m-auto">Name</strong>
                    <strong className="col-3 m-auto">Phone</strong>
                    <strong className="col-3 m-auto">Email</strong>
                    <strong className="col-2 m-auto">DOB</strong>
                </li>
                {this.state.employees.map(data => <Employee
                    key={data.login.uuid}
                    image={data.picture.medium}
                    name={`${data.name.first} ${data.name.last}`}
                    phone={data.phone}
                    email={data.email}
                    dob={data.dob.date}
                />)}
            </ul>
        );
    }
}
