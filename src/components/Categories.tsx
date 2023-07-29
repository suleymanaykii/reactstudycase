import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ListGroup, Button, Card} from 'react-bootstrap';
let loveWord: string = 'love';
let lifeWord: string = 'life';
let inspirationWord: string = 'inspiration';
let fateWord: string = 'fate';
let peaceWord: string = 'peace';
let believeWord: string = 'believe ';

export default function Categories() {
    const [loveArray, setLoveArray] = useState<any[]>([]);
    const [lifeArray, setLifeArray] = useState<any[]>([]);
    const [inspirationArray, setInspirationArray] = useState<any[]>([]);
    const [fateArray, setFateArray] = useState<any[]>([]);
    const [peaceArray, setPeaceArray] = useState<any>([]);
    const [believeArray, setBelieveArray] = useState<any>([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                const data: any = response.data;
                const loveFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(loveWord.toLowerCase()))
                const lifeFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(lifeWord.toLowerCase()))
                const inspirationFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(inspirationWord.toLowerCase()))
                const fateFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(fateWord.toLowerCase()))
                const peaceFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(peaceWord.toLowerCase()))
                const believeFilter: any = data.filter((item: any) => item.text.toLowerCase().includes(believeWord.toLowerCase()))
                setLoveArray(loveFilter);
                setLifeArray(lifeFilter);
                setInspirationArray(inspirationFilter);
                setFateArray(fateFilter);
                setPeaceArray(peaceFilter);
                setBelieveArray(believeFilter);
            })
            .catch(error => {
                console.error('An error occurred while retrieving categories.', error);
            });
    }, []);
    const getLoveClickValue = () => {
        let index = Math.floor(Math.random() * loveArray.length);
        setValue(loveArray[index].text)
    };
    const getLifeClickValue = () => {
        let index = Math.floor(Math.random() * lifeArray.length);
        setValue(lifeArray[index].text)
    };
    const getInspirationClickValue = () => {
        let index = Math.floor(Math.random() * inspirationArray.length);
        setValue(inspirationArray[index].text)
    };
    const getFateClickValue = () => {
        let index = Math.floor(Math.random() * fateArray.length);
        setValue(fateArray[index].text)
    };
    const getPeaceClickValue = () => {
        let index = Math.floor(Math.random() * peaceArray.length);
        setValue(peaceArray[index].text)
    };
    const getBelieveClickValue = () => {
        let index = Math.floor(Math.random() * believeArray.length);
        setValue(believeArray[index].text)
    };


    return (
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">{value}</Card.Title>
                    <ListGroup>
                        <ListGroup.Item><Button onClick={getLoveClickValue}>{loveWord.toUpperCase()}</Button></ListGroup.Item>
                        <ListGroup.Item><Button onClick={getLifeClickValue}>{lifeWord.toUpperCase()}</Button></ListGroup.Item>
                        <ListGroup.Item><Button onClick={getInspirationClickValue}>{inspirationWord.toUpperCase()}</Button></ListGroup.Item>
                        <ListGroup.Item><Button onClick={getFateClickValue}>{fateWord.toUpperCase()}</Button></ListGroup.Item>
                        <ListGroup.Item><Button onClick={getPeaceClickValue}>{peaceWord.toUpperCase()}</Button></ListGroup.Item>
                        <ListGroup.Item><Button onClick={getBelieveClickValue}>{believeWord.toUpperCase()}</Button></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
    );
}