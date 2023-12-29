import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Create from './Create';
import Read from './Read';
import Update from './Update';

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Create />} />
                <Route path="/create" element={<Create />} />
                <Route path="/read" element={<Read />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </div>
    );
};

export default Home;
