import React from "react";
import './ArticleContainer.css'

const ArticleContainer = ({ stories, selectedArticle, setCurrentArticle }) => {

    const storyCard = stories.map((story) => {
        let keyId = story.short_url.slice(-7)
        return <Article
            story={story} key={keyId} id={keyId} setCurrentArticle={setCurrentArticle} />
    })

    return (
        <div className="articleContainer">
            {storyCard}
        </div>
    )
}

export default ArticleContainer