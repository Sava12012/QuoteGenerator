import React, { useState } from "react";
import './RandomQuote.css'
import twitter from '../assets/twitter.png'
import reload from '../assets/reload.png'

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        text: "Difficult increase the nearer",
        author: "Johann Wolfgang von Goethe"
    });
    return (
        <div className='container'>
            <div className='quote'>{quote.text}</div>
            <div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='author'>{quote.author}</div>
                    <div className={icons}>
                        <img src={reload} alt=""/>
                        <img src={twitter} alt=""/>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default RandomQuote;