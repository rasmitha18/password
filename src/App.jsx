import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>My name is {name}</h2>
      <h2>hello {name}</h2>
    </div>
  );
}

export default App;