
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slide from './Components/slide/Slide';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Account from './Components/login/Account';
import Footer from './Components/Footer/Footer';
import CartShow from './Components/Cart/CartShow';
import Information from './Components/User/Information';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Kiểm tra xem trạng thái đăng nhập đã được lưu trữ trong Local Storage hay chưa
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserId = localStorage.getItem('userId');
    if (storedIsLoggedIn === 'true' && storedUserId !== null) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleLogin = (id) => {
    setUserId(id);
    setIsLoggedIn(true);
    localStorage.setItem('userId', id);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    // Xóa trạng thái đăng nhập khỏi Local Storage khi đăng xuất
    localStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');
  };
  return (
    <div className="App overflow-hidden">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} userId={userId}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route axact path="/account" element={<Account isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
          <Route axact path="/product/cart/:id" element={<CartShow />} />
          <Route axact path="/information/:id" element={<Information userId={userId} />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
