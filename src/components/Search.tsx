import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Row, Col, Card} from 'react-bootstrap';

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
                    setError('No quotation found for the search term.');
                    setRandomQuote(null); // Let's set it to null if the quote is not found
                }
            })
            .catch(error => {
                setError(error);
                setRandomQuote(null); //  Let's set it to null in case of error
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
                                              placeholder="Aranacak kelimeyi girin"
                                              value={keyword}
                                              onChange={handleKeywordChange} />
                            </Col>
                            <Col xl={3}>
                                <Button onClick={handleSearchClick}>Search</Button></Col>
                        </Row>

                        <Card.Title>
                            {randomQuote !== null && ( // null kontrolü ekleyelim
                                <div className="quote-container">
                                    <p className="quote">{randomQuote}</p>
                                </div>
                            )}
                            {error && <p className="error text-danger">{error}</p>}
                        </Card.Title>
                    </Form.Group>
                </Form>
            </Card.Body>
         </Card>
    );
};
export default Search;
