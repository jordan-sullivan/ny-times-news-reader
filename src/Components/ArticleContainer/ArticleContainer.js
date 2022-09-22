import React from "react";
import './articleContainer.css'
import Article from "../Article/Article";
import { Link } from "react-router-dom";

const ArticleContainer = ({ articles }) => {

    const articleCards = articles.map((article, index) => {
        return <Article
            article={article.title} 
            key={index} 
            abstract={article.abstract} 
            byLine={article.byline}
            multimedia={article.multimedia} />
    })

    return (
        <Link to="nty-reader/">
            <div className="articleContainer">
                {articleCards}
            </div>
        </Link>
    )
}

export default ArticleContainer