import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function Categories() {
    const [loveArray, setLoveArray] = useState<any[]>([]);
    const [lifeArray, setLifeArray] = useState<any[]>([]);
    const [inspirationArray, setInspirationArray] = useState<any[]>([]);
    const [fateArray, setFateArray] = useState<any[]>([]);
    const [loveClickValue, setLoveClickValue] = useState("");
    const [lifeClickValue, setLifeClickValue] = useState("");

    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
            .then(response => {
                const data: any = response.data;
                const loveWord: string = 'love';
                const lifeWord: string = 'life';
                const inspirationWord: string = 'inspiration';
                const fateWord: string = 'fate';
                const loveFilter:any = data.filter((item: any) => item.text.toLowerCase().includes(loveWord.toLowerCase()))
                const lifeFilter:any = data.filter((item: any) => item.text.toLowerCase().includes(lifeWord.toLowerCase()))
                const inspirationFilter:any = data.filter((item: any) => item.text.toLowerCase().includes(inspirationWord.toLowerCase()))
                const fateFilter:any = data.filter((item: any) => item.text.toLowerCase().includes(fateWord.toLowerCase()))
                setLoveArray(loveFilter);
                setLifeArray(lifeFilter);
                setInspirationArray(inspirationFilter[0].text);
                setFateArray(fateFilter[0].text);
            })
            .catch(error => {
                console.error('Kategoriler alınırken bir hata oluştu', error);
            });
    }, []);
    const getLoveClickValue = () => {
        let randIndex = Math.floor(Math.random() * loveArray.length);
        setLoveClickValue(loveArray[randIndex].text)
    };
    const getLifeClickValue = () => {
        let randIndexLife = Math.floor(Math.random() * lifeArray.length);
        setLifeClickValue(lifeArray[randIndexLife].text)
    };


    return (
        <div>
            {inspirationArray}-{fateArray}--------------------
            <button onClick={getLoveClickValue}>Love</button>
            <button onClick={getLifeClickValue}>Life</button>
            {loveClickValue}-----------------------------------{lifeClickValue}
        </div>
    );
}