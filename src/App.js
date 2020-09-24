import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { API } from "@aws-amplify/api";

Amplify.configure();

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getSearchResults = async () => {
      const searchResult = await API.get("spotifyAPI", "/search/foo");
      setResult(searchResult);
    };
    getSearchResults();
  }, [setResult]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
}

export default App;
