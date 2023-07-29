import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Categories from '../components/Categories';
import Search from '../components/Search';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search" element={<Search />} />
        </Routes>
        );
};

export default Main;
