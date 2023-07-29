import axios from 'axios';
import {useState} from "react";

export default function Categories() {
    let [randomQuote, setRandomQuote] = useState("");

    const getNewQuote = () => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                const data = response.data;
                let randIndex = Math.floor(Math.random() * data.length);
                setRandomQuote(data[randIndex].text)
            })
            .catch(error => {
                console.error('Kategoriler alınırken bir hata oluştu:', error);
            });
    };

    return (
        <div>
            <h1>Random Quotes {randomQuote}</h1>
            <button onClick={getNewQuote}>Click For Random Quotes</button>
        </div>
    );
}