import React, { useEffect, useState } from "react";
import "./App.css";
import Amplify, { API } from "@aws-amplify/api";

Amplify.configure();

const clientId = "1e831e30d05b48929899f656795c2a5f";
const scopes = "user-read-private user-read-email";
const redirectUri = `${window.location.href}`;

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const response = await fetch(API.get("spotifyAPI", "/authorize"));
      console.log(response);
    };
    getToken();
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Moshpit!</h1>
      </header>
      <main>
        {token && <div>You are logged in</div>}
        {!token && <div>You need to log in</div>}
      </main>
    </div>
  );
}
console.log(
  `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email`
);
export default App;
