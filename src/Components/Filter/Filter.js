import React from 'react';
import './Filter.css'

const Filter = ({ section, setSection }) => {

    const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate','science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
    
    const buttons = sections.map((section, index) => {
        return <button key={index} onClick={() => setSection(section)}>{section}</button>
    })

    return (
        <section>{buttons}</section>
    )
}

export default Filter;