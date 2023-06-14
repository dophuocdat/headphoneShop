
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slide from './Components/slide/Slide';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Account from './Components/Logger/Account';
import Footer from './Components/Footer/Footer';
import CartShow from './Components/Cart/CartShow';
import Dashboard from './Components/User/Dashboard';
import axios from 'axios';
import SignUp from './Components/Logger/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

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
    console.log("first"+id);
    setUserId(id);
    setIsLoggedIn(true);
    localStorage.setItem('userId', id);
    localStorage.setItem('isLoggedIn', 'true');
    checkRole(id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    // Xóa trạng thái đăng nhập khỏi Local Storage khi đăng xuất
    localStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');
    axios.put(`http://localhost:8080/information/${userId}`).then((res) => {
   
    }).catch((err) => {
      console.error( err);
    }
    );
  };


  //check role
  const checkRole = (id) => {
    axios.get(`http://localhost:8080/information/${id}`).then((res) => {
      console.log(res.data);
      console.log(id);
      console.log(res.data.roles);
      setRole(res.data.roles);
    }).catch((err) => {
      console.error("role" + err);
    }
    );
  }



  return (
    <div className="App overflow-hidden">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} userId={userId} role={role} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route axact path="/account" element={<Account isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
          <Route axact path="/product/cart/:id" element={<CartShow />} />
          <Route axact path="/information/:id" element={<Dashboard userId={userId} role={role}/>} />
          <Route axact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
