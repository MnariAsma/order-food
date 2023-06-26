import { useState } from 'react';
import React from 'react';
import Cart from '../../Cart/Cart';
import MealsSummary from '../MealsSummary';
import CartProvider from '../../../store/CartProvider';
import PlanBHeader from './PanBHeader'
import PlanB from './PLAnB';


function PlanbMenu() {
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
      <PlanBHeader onShowCart={showCartHandler} />
      <main>
      <MealsSummary />
      <PlanB />
      </main>
    </CartProvider>

  );
}

export default PlanbMenu;
