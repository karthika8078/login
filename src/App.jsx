

// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import LoginPage from './component/LoginPage';
import ForgotPassword from './component/ForgotPassword';
import SignUp from './component/SignUp';


import './App.css';

function App() {
  return (
   
      <Routes>

<Route path="/" element={<Navbar />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/signup" element={<SignUp />} />
       
      </Routes>
   
  );
}

export default App;



