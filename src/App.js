import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Directory, { Employee } from "./components/Directory";

export default function App() {
  const [searchValue, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <Header/>
      <Searchbar onChange={event => setSearch(event.target.value)}/>
      <Directory>
        {employees.map(Employee)}
      </Directory>
    </div>
  );
}
