import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Directory from "./components/Directory";

export default function App() {
  const [searchValue, setSearch] = useState("");

  return (
    <div>
      <Header/>
      <Searchbar onChange={event => setSearch(event.target.value)}/>
      <Directory query={searchValue}/>
    </div>
  );
}
