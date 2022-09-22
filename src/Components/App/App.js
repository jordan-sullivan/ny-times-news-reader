import './App.css';
import logo from '../../logo.png';
import { useEffect, useState } from "react";
import { fetchTopStories } from "../../apiCalls"
import Loading from '../Loading/Loading';
import Nav from "../Nav/Nav"
import Article from "../Article/Article"
import { Route, Switch} from 'react-router-dom';
import Articles from './Articles';
import Filter from './Filter';

const App = () => {
  const [articles, setArticles] = useState([])
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
    <div>
      <Nav /> 
      <Filter 
        section={section}
        setSection={setSectionTag}
      />
      <Articles
        articles={articles}
      />
    </div>
  )
}

export default App;
