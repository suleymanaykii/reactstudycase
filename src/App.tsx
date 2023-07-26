import { useEffect, useState } from "react";

export default function App() {
    const [quotes, setQuotes] = useState([]);
    let [setRandomQuote] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            console.log(randIndex);
        }

        fetchData();
    }, []);

    const getNewQuote = () => {

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random());
        console.log('randIndex');
        console.log(quotes[randIndex]);
    };

    return (
        <div>
            <h1>Random Quotes</h1>
            <ul>
                {quotes.map(({ author, text }, index) => (
                    <li key={index}>
                        "{text}" ~{author}
                    </li>
                ))}
            </ul>
            <button onClick={getNewQuote}>Click For Random Quotes</button>
        </div>
    );
}
