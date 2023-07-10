import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";

function App() {
  const [data, setData] = useState(0);

  const getData = async () => {
    await axios
      .get("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((res, err) => {
        if (err) console.log(err);
        else setData(res);
      });
  };

  useEffect(() => {
    if (data === 0) getData();
  }, [data]);

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
    </div>
  );
}

export default App;
