import './App.css';
import React, { useState } from "react";

function App() {
  const [co,setCo] = useState(false);

  const verif = () => {
    const password = document.getElementById("password").value;
    password === '1234' ? setCo(true) : setCo(false);
  }

  return (
    <div className="App">
      <form>
        <h1>Formulaire</h1>
        <h2>{co ? "Connecté" : "Non connecté"}</h2>
        <label>
          Login :
          <input type="text" name="login" />
        </label>
        <label>
          Password :
          <input type="password" name="password" id='password' style={{borderColor : co ? "green" : "red"}}/>
        </label>
        <input type="button" value="Envoyer" onClick={verif}/>
      </form>
    </div>
  );
}

export default App;
