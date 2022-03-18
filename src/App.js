import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users/Users";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <header>
        <div className="navbar">
          <img src={logo} height="10px" className="App-logo" alt="logo" />
          <div>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="search user..."
            />
          </div>
        </div>
        <hr />
      </header>
      <Users query={query} users={users} />
    </div>
  );
}

export default App;
