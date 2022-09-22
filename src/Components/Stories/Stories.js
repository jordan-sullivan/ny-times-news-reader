import React, { useEffect } from 'react';
import "../stories.css"

const Stories = ({articles, id}) => {

    const idNum = parseInt(id)
    const selectedArticle = articles.find((article, index) => {
        return index === idNum
    })
    console.log("selected article", selectedArticle)

    let selectedArticleImage = selectedArticle.multimedia ? <img src={selectedArticle.multimedia[1].url} 
        alt={selectedArticle.multimedia[1].caption} className='article-img'/> : null
    return(
        <div className='article-details-container'>
            <h2 className='article-details-text'>{selectedArticle.title}</h2>
            <p className='article-details-text'>{selectedArticle.abstract}</p>
            {selectedArticleImage}
            <p className='article-details-text'>{selectedArticle.byline}</p>
            <button className='article-link-btn'>
                <a style={{textDecoration: 'none', color: 'white'}} href={selectedArticle.url} target="_blank">Read More</a>
            </button>
        </div>
    )
}

export default Stories
