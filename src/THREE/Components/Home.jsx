import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Read from './Read';
import PageNotFOund from './PageNotFOund';
import Add from './Add';
import Edit from './Edit';
const Home = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/add' element={<Add />} />
                <Route exact path='/read' element={<Read />} />
                <Route exact path='/edit/:id' element={<Edit />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/*' element={<PageNotFOund />} />
            </Routes>
        </>
    );
};

export default Home;
