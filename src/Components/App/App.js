import './App.css';
import { useEffect, useState } from "react";
import { fetchTopStories } from "../../apiCalls"

const App = () => {
  const [stories, setStories] = useState([])
  const [error, setError] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState({})

  useEffect(() => {
    fetchTopStories()
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
    </div>
  );
}

export default App;
