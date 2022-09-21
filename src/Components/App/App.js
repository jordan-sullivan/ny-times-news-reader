import './App.css';
import { useEffect, useState } from "react";
import { fetchTopStories } from "../../apiCalls"

const App = () => {
  const [stories, setStories] = useState([])
  const [currentArticle, setCurrentArticle] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      <Nav setArticles={setArticles} setSectionTag={setSectionTag} setIsLoading={setIsLoading} />
      <Switch>
        <Route
          exact path="/nyt-reader/"
          render={() =>
            <main>
              {isLoading ? <Loading /> : <Articles stories={stories} currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />}
            </main>
          }
        />

        <Route
          exact path="/nyt-reader/:article"
          render={({ match }) => {
            const article = parseInt(match.params.article)
            return (
              <div>
                <ArticleDetail currentArticle={currentArticle} />
              </div>)
          }}
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
