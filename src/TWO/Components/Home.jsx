import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Create from '../../TWO/Components/Create';
import Update from '../../TWO/Components/Update';
import Read from '../../TWO/Components/Read';

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color:#fff;
  text-decoration:none;
`;

const Home = () => {
    return (
        <>

            <Header position="static">
                <Toolbar>
                    <Tabs to="/">Home</Tabs>
                    <Tabs to="/read">All Users</Tabs>
                    <Tabs to="/create">Add Users</Tabs>
                </Toolbar>
            </Header>


            <Routes>
                <Route path="/" element={<Read />} />
                <Route path="/create" element={<Create />} />
                <Route path="/read" element={<Read />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </>
    );
};

export default Home;
