import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { fetchTopTen, fetchMostShared } from "./apiCalls"

const App = () => {
  const [stories, setStories] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchMostShared()
      .then((data) => {
        console.log("DATA", data.results)
        setStories(data.results)
      })
      .catch(() => {
        setError(true);
      });
  }, []);

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
