import React, { useState, useEffect } from 'react';
import styles from '../styles/404.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from 'next/image'
const stringSimilarity = require("string-similarity");

function App() {
    const [suggestions, setSuggestions] = useState([])
    const pages = [
        "games/five-mysteries",
        "games/poly-story",
        "contacts",
        "about",
        "profile",
        "signup",
        "login",
        "edit-profile/avatar",
        "terms",
        "privacy"
    ]
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname.slice(1)
            let suggestionsTemp = []
            pages.forEach(page => {
                const similarity = stringSimilarity.compareTwoStrings(page, path)
                if (similarity > 0.3) {
                    suggestionsTemp.push({path : page, similarity : similarity})
                }
            })
            suggestionsTemp.sort((a, b) => b.similarity - a.similarity)
            setSuggestions(suggestionsTemp)
        }
    }, [])
    console.log(suggestions)
    return (
        <>
        <Navbar/>
        <h1 className={styles.title}>Page not found</h1>
        <div className={styles.suggestionList}>
            <h2 className={styles.suggestionListTitle}>Did you mean:</h2>
            {
                suggestions.map((suggestion, index) => 
                    <div key={"suggestion_" + index} className={styles.suggestionContener}>
                       <p>{parseInt(suggestion.similarity * 100)}%</p>
                        <div style={{width: suggestion.similarity * 100 + "%"}}>
                        </div>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <a href={`/${suggestion.path}`}>{suggestion.path}</a>
                    </div>
                )
            }
        </div>
        <div className={styles.imageContener}>
            <Image layout="fill" src="/img/illustrations/404.svg" />
        </div>
        <Footer/>
        </>
    );
}

export default App;