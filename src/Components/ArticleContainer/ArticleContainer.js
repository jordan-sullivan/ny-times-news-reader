import React from "react";
import './articleContainer.css'
import Article from "../Article/Article";
import { Link } from "react-router-dom";

const ArticleContainer = ({ stories, selectedArticle, setCurrentArticle }) => {

    const storyCard = stories.map((story) => {
        let keyId = story.short_url.slice(-7)
        return <Article
            story={story} key={keyId} id={keyId} setCurrentArticle={setCurrentArticle} />
    })

    return (
        <Link to="nty-reader/">
            <div className="articleContainer">
                {storyCard}
            </div>
        </Link>
    )
}

export default ArticleContainer