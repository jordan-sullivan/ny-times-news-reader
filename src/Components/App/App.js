import './App.css';
import logo from '../../logo.png';
import { useEffect, useState } from "react";
import { fetchTopStories } from "../../apiCalls"
import Loading from '../Loading/Loading';
import Nav from "../Nav/Nav"
import { Route, Switch} from 'react-router-dom';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import Filter from '../Filter/Filter';
import Stories from '../Stories/Stories';

const App = () => {
  const [articles, setArticles] = useState([])
  const [section, setSection] = useState("arts");
  const [currentArticle, setCurrentArticle] = useState({})
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleFetch = () => {
    fetchTopStories(section)
      .then((data) => {
        console.log("DATA", data.results)
        setArticles(data.results)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
  handleFetch()
  }, [setSection])


  return (
    <div>
      <Nav /> 
      {error ? <Error /> : 
      <Switch>
        <Route exact path='/'> 
      <Filter 
        section={section}
        setSection={setSection}
      />
      <ArticleContainer
        articles={articles}
      />
      </Route>
        <Route exact path='/article/:id' render={({ match }) => <Stories id={ match.params.id } articles={articles}/>}>
        </Route>
      </Switch>
      }
    </div>
  )
}

export default App;
