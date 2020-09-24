import React, { useEffect, useState } from "react";
import "./App.css";
import Amplify, { API } from "@aws-amplify/api";

Amplify.configure();

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getSearchResults = async () => {
      const searchResult = await API.get("spotifyAPI", "/search/foo");
      setResult(searchResult.success);
    };
    getSearchResults();
  }, [setResult]);
  return (
    <div className="App">
      <p>{result}</p>
    </div>
  );
}

export default App;
