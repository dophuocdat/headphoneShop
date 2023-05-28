
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slide from './Components/slide/Slide';
import Home from './Components/Home/Home';
import { useEffect } from 'react';
import Account from './Components/login/Account';
import Footer from './Components/Footer/Footer';
import CartShow from './Components/Cart/CartShow';

function App() {
 
  return (
    <div className="App overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route axact path="/account" element = {<Account/>} />
          <Route axact path="/product/cart/:id" element = {<CartShow/>} />
        </Routes>
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
