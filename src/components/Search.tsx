import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [randomQuote, setRandomQuote] = useState(null);
    const [error, setError] = useState('');
    let quotes: any;
    let randomIndex: number;
    let matchingQuotes: any;
    let randomQuoteText: null;

    const handleKeywordChange = (event: any) => {
        setKeyword(event.target.value);
    };

    const handleSearchClick = () => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                quotes = response.data;
                matchingQuotes = quotes.filter((item: any) => item.text.toLowerCase().includes(keyword.toLowerCase()));
                if (matchingQuotes.length > 0) {
                    randomIndex = Math.floor(Math.random() * matchingQuotes.length);
                    randomQuoteText = matchingQuotes[randomIndex].text;
                    setRandomQuote(randomQuoteText);
                    setError('');
                } else {
                    setError('Aranan kelimeye uygun alıntı bulunamadı.');
                    setRandomQuote(null); // Alıntı bulunamazsa null olarak ayarlayalım
                }
            })
            .catch(error => {
                setError(error);
                setRandomQuote(null); // Hata durumunda da null olarak ayarlayalım
            });
    };

    return (
        <div className="container">
            <h1>Search</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Aranacak kelimeyi girin"
                    value={keyword}
                    onChange={handleKeywordChange}
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
            {randomQuote !== null && ( // null kontrolü ekleyelim
                <div className="quote-container">
                    <p className="quote">{randomQuote}</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};
//test
export default Search;
