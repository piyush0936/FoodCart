import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import CartItem from '../components/CartItem/CartItem';
import UserAuth from '../components/UserAuthentication/UserAuth';

const RouteFile = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UserAuth />}></Route>
          <Route path='/cards' element={<Cards />}></Route>
          <Route path='/cart/:id' element={<CartItem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteFile;
