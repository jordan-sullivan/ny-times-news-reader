import React from "react";
import "../Article/article.css"


const Article = ({ title, abstract, multimedia, byline }) => {
    let images = multimedia ? <img src={multimedia[1].url} alt={multimedia[1].caption} className='article-img'/> : null
   
    return (
        <div className="holder">
            <article className="art-holder">
                <h2 className='article-card-text'>{title}</h2>
           {images}
                <p className='article-card-text'>{abstract}</p>
                <p className="byline">{byline}</p>
            </article>
        </div>
    )
}

export default Article;

