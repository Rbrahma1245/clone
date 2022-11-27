import React from 'react';
import './App.css';
import RootLayout from './Screen/RootLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from './Screen/Destination/Destination';
import About from './Screen/About/About';
import Search from './Screen/Search/Search';
import NearBy from './Screen/NearBy/NearBy';
import Footer from './Features/Footer';
import Header from './Features/Header';
import Page404 from './Screen/Page404';
import SignUP from './Forms/SignUp/SignUP';
import Login from './Forms/Login/Login';
import Details from './Screen/Destination/Details';
import Logout from './Forms/Logout/Logout';



function App() {
  return (
    <div className="App">

      <Header />


      <Routes>

        <Route path="/" element={<RootLayout />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/nearby" element={<NearBy />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinations/:blogId" element={<Details />} />
        <Route path="*" element={<Page404 />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
