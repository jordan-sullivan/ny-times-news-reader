import './App.css';
import logo from '../../logo.png';
import { useEffect, useState } from "react";
import { fetchTopStories } from "../../apiCalls"
import Loading from '../Loading/Loading';
import Nav  from "../Nav/Nav"
import Article from "../Article/Article"
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import Stories from '../Stories/Stories';
import StoriesContainer from '../StoriesContainer/StoriesContainer';
import { Route, Switch} from 'react-router-dom';

const App = () => {
  const [stories, setStories] = useState([])
  const [sectionTag, setSectionTag] = useState("arts");
  const [currentArticle, setCurrentArticle] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleFetch = () => {
    fetchTopStories(sectionTag)
      .then((data) => {
        console.log("DATA", data.results)
        setStories(data.results)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
  handleFetch()
  }, [setSectionTag])


  return (
    <div className="App">
      <Nav setStories={setStories} setSectionTag={setSectionTag} setIsLoading={setIsLoading} />
      <Switch>
        <Route
          exact path="/nyt-reader/"
          render={() =>
            <main>
              {isLoading ? <Loading /> : <Article stories={stories} currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />}
            </main>
          }
        />

        <Route
          exact path="/nyt-reader/loading"
          render={() => <img src={logo} className="App-logo" alt="logo" />
          }
        />

      </Switch>
    </div>
  );
}

export default App;
