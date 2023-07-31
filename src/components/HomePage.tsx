import { Alert, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';

interface Quote {
    text: string;
    author: string;
}

const HomePage: React.FC = () => {
    const [randomQuote, setRandomQuote] = useState<string>('');
    const [randomAuthor, setRandomAuthor] = useState<string>('');
    const [error, setError] = useState<string>('');

    const getNewQuote = async () => {
        try {
            const response = await axios.get<Quote[]>('https://type.fit/api/quotes')
            const data: Quote[] = response.data;
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex].text);
            setRandomAuthor(data[randIndex].author.split(',')[0]);
        } catch (error: any) {
            setError(error.message);
        }
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
            {error && (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {error}
                    </p>
                </Alert>
            )}
        </Card>
    );
};

export default HomePage;
