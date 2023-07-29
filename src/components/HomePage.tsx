import { Button, Card  } from 'react-bootstrap';
import axios from 'axios';
import {useState} from "react";

export default function Categories() {
    let [randomQuote, setRandomQuote] = useState("");
    let [randomAuthor, setRandomAuthor] = useState("");

    const getNewQuote = () => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                const data = response.data;
                let randIndex = Math.floor(Math.random() * data.length);
                setRandomQuote(data[randIndex].text)
                setRandomAuthor(data[randIndex].author.split(',')[0])
            })
            .catch(error => {
                console.error('An error occurred while retrieving categories.', error);
            });
    };

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{randomQuote}</Card.Title>
                <Card.Text>
                    {randomAuthor}
                </Card.Text>
                <Button variant="primary" onClick={getNewQuote}>Get Quotes</Button>
            </Card.Body>
        </Card>
    );
}