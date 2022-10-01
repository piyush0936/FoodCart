import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Cart from '../components/Cart/Cart';
import UserAuth from '../components/UserAuthentication/UserAuth';

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UserAuth />}></Route>
          <Route path='/cards' element={<Cards />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default routes;
