import React from "react";
import '../ArticleContainer/articleContainer.css'
import Article from "../Article/Article";
import { Link } from "react-router-dom";

const ArticleContainer = ({ articles }) => {

    const articleCards = articles.map((article, index) => {
        return (
            <Link to={`/article/${index}`} style={{textDecoration: 'none', color: 'black', fontFamily: 'Lora'}} 
            className='article-card' key={index}>
                <Article
                    title={article.title}
                    abstract={article.abstract}
                    multimedia={article.multimedia}
                />
            </Link>
        )
    })

        return (
            <div className='articles-container'>{articleCards}</div>
        )
}

export default ArticleContainer