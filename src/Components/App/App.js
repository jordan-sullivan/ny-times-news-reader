import './App.css';
import { useEffect, useState } from "react";
import { fetchTopTen, fetchMostShared } from "../../apiCalls"

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
      NY Times Reader
    </div>
  );
}

export default App;
