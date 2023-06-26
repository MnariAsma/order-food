import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Aceuil from './components/pages/aceuil';
import Menu from './components/pages/Menu';
import PlanbMenu from './components/Meals/PLANB/PlanBMenu';
import PappadamMenu from './components/Meals/PappadamMenu';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Aceuil/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Pappadam' element={<PappadamMenu/>}/>
      <Route path='/PlanB' element={<PlanbMenu/>}/>
      <Route path="/Menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    {/* <CartProvider>
      Brows
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
     
    <NavBar/>
    <Depot/> */}
    
     </>

  );
}

export default App;
