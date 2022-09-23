import React from 'react';
import './Filter.css'

const Filter = ({ section, setSection }) => {

    const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'movies', 'opinion', 'politics', 'realestate','science', 'sports', 'technology', 'theater', 'travel', 'upshot', 'us', 'world']
    const buttons = sections.map((section, index) => {
        return <button  className='filter-btn' key={index} onClick={() => setSection(section)}>{section}</button>
    })

    return (
        <section className="buttons-box">{buttons}</section>
    )
}

export default Filter;