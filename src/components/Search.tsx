import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

interface Quote {
    text: string;
    author: string;
}

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('');
    const [randomQuote, setRandomQuote] = useState<string | null>(null);
    const [randomAuthor, setRandomAuthor] = useState<string>("");
    const [error, setError] = useState<string>('');

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleSearchClick = () => {
        axios.get<Quote[]>('https://type.fit/api/quotes')
            .then(response => {
                const quotes: Quote[] = response.data;
                const matchingQuotes = quotes.filter(item => item.text.toLowerCase().includes(keyword.toLowerCase()));
                if (matchingQuotes.length > 0) {
                    const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
                    setRandomQuote(matchingQuotes[randomIndex].text);
                    setRandomAuthor(matchingQuotes[randomIndex].author.split(',')[0])
                    setError('');
                } else {
                    setError('No quotation found for the search term.');
                    setRandomQuote(null); // Let's set it to null if the quote is not found
                }
            })
            .catch(error => {
                setError('An error occurred while fetching quotes.');
                setRandomQuote(null); // Let's set it to null in case of an error
            });
    };

    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3 mt-3 m-3">
                        <Row>
                            <Col xl={3}>
                                <Form.Control className="mb-3" type="text"
                                              placeholder="Enter search word"
                                              value={keyword}
                                              onChange={handleKeywordChange} />
                            </Col>
                            <Col xl={3}>
                                <Button onClick={handleSearchClick}>Search</Button></Col>
                        </Row>
                        <Card.Title className="mt-3">
                            {randomQuote !== null && (
                                <Card.Title className="quote-container">
                                    {randomQuote}
                                </Card.Title>
                            )}
                        </Card.Title>
                        {randomQuote !== null && (
                        <Card.Title className="quote-container">
                            {randomAuthor}
                        </Card.Title>
                        )}
                        {error && (
                            <Alert variant="danger" dismissible>
                                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                <p>
                                    {error}
                                </p>
                            </Alert>
                        )}
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Search;
