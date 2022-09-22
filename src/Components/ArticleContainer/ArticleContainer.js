import React from "react";
import './articleContainer.css'
import Article from "../Article/Article";
import { Link } from "react-router-dom";

const ArticleContainer = ({ articles }) => {

    const articleCards = articles.map((article, index) => {
        let keyId = article.short_url.slice(-7)
        return <Article
            article={article.title} 
            key={index} 
            abstract={article.abstract} 
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