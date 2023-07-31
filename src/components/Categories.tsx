import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, Button, Card, Alert } from 'react-bootstrap';

interface Quote {
    text: string;
    author: string;
}

const Categories: React.FC = () => {
    const loveWord: string = 'love';
    const lifeWord: string = 'life';
    const inspirationWord: string = 'inspiration';
    const fateWord: string = 'fate';
    const peaceWord: string = 'peace';
    const believeWord: string = 'believe';

    const [loveArray, setLoveArray] = useState<Quote[]>([]);
    const [lifeArray, setLifeArray] = useState<Quote[]>([]);
    const [inspirationArray, setInspirationArray] = useState<Quote[]>([]);
    const [fateArray, setFateArray] = useState<Quote[]>([]);
    const [peaceArray, setPeaceArray] = useState<Quote[]>([]);
    const [believeArray, setBelieveArray] = useState<Quote[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [value, setValue] = useState<string>("");
    const [randomAuthor, setRandomAuthor] = useState<string>("");

    useEffect(() => {
        axios.get<Quote[]>('https://type.fit/api/quotes')
            .then(response => {
                const data: Quote[] = response.data;
                const loveFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(loveWord.toLowerCase()));
                const lifeFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(lifeWord.toLowerCase()));
                const inspirationFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(inspirationWord.toLowerCase()));
                const fateFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(fateWord.toLowerCase()));
                const peaceFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(peaceWord.toLowerCase()));
                const believeFilter: Quote[] = data.filter(item => item.text.toLowerCase().includes(believeWord.toLowerCase()));

                setLoveArray(loveFilter);
                setLifeArray(lifeFilter);
                setInspirationArray(inspirationFilter);
                setFateArray(fateFilter);
                setPeaceArray(peaceFilter);
                setBelieveArray(believeFilter);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    const getRandomQuote = (quotes: Quote[]) => {
        if (quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }
        return null;
    };

    const getLoveClickValue = () => {
        const randomQuote = getRandomQuote(loveArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    const getLifeClickValue = () => {
        const randomQuote = getRandomQuote(lifeArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    const getInspirationClickValue = () => {
        const randomQuote = getRandomQuote(inspirationArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    const getFateClickValue = () => {
        const randomQuote = getRandomQuote(fateArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    const getPeaceClickValue = () => {
        const randomQuote = getRandomQuote(peaceArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    const getBelieveClickValue = () => {
        const randomQuote = getRandomQuote(believeArray);
        if (randomQuote) {
            setValue(randomQuote.text);
            setRandomAuthor(randomQuote.author.split(',')[0]);
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">{value}</Card.Title>
                <Card.Title className="text-center">{randomAuthor}</Card.Title>
                <ListGroup>
                    <ListGroup.Item><Button onClick={getLoveClickValue}>{loveWord.toUpperCase()}</Button></ListGroup.Item>
                    <ListGroup.Item><Button onClick={getLifeClickValue}>{lifeWord.toUpperCase()}</Button></ListGroup.Item>
                    <ListGroup.Item><Button onClick={getInspirationClickValue}>{inspirationWord.toUpperCase()}</Button></ListGroup.Item>
                    <ListGroup.Item><Button onClick={getFateClickValue}>{fateWord.toUpperCase()}</Button></ListGroup.Item>
                    <ListGroup.Item><Button onClick={getPeaceClickValue}>{peaceWord.toUpperCase()}</Button></ListGroup.Item>
                    <ListGroup.Item><Button onClick={getBelieveClickValue}>{believeWord.toUpperCase()}</Button></ListGroup.Item>
                </ListGroup>
                {error !== null && (
                    <Alert variant="danger" dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            {error}
                        </p>
                    </Alert>
                )}
            </Card.Body>
        </Card>
    );
}

export default Categories;
