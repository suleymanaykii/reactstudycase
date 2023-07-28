import { useState } from "react";

export default function App() {
    let [randomQuote, setRandomQuote] = useState("");

    const getNewQuote = () => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex].text)
        }
        fetchData();
    };

    return (
        <div>
            <h1>Random Quotes {randomQuote}</h1>
            <button onClick={getNewQuote}>Click For Random Quotes</button>
        </div>
    );
}
