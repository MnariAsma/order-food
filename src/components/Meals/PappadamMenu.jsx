import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Layout/Header'
import Meals from './Meals';
import Cart from '../Cart/Cart';
import MealsSummary from './MealsSummary';
import Pappadam from './Pappadam';
import CartProvider from '../../store/CartProvider';
import PappadamHeader from './PappadamHeader';


function PappadamMenu() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (

     <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <PappadamHeader onShowCart={showCartHandler} />
      <main>
      <MealsSummary />
      <Pappadam />
      </main>
    </CartProvider>

  );
}

export default PappadamMenu;
