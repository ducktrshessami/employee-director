// https://randomuser.me/

import axios from "axios";

export default function getUsers(n = 1) {
    return axios.get("https://randomuser.me/api/?results=" + n);
};
