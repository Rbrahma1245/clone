import React, { createContext, useEffect, useState } from 'react';
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
// import Logout from './Forms/Logout/Logout';
import axios from 'axios'
import AuthService from './services/authService';
import Profile from './Components/Profile';
import { API } from './vars'
import qs from 'qs';




export const UserContext = createContext(null);
export const APIContext = createContext(null)


function App() {
  const loading = false;

  const [userInfo, setUserInfo] = useState('')
  const [APIData, setAPIData] = useState([]);



  useEffect(() => {
    fetchUserInfo(),
      fetchApiData()
  }, [])


  const fetchUserInfo = async () => {

    const access_token = localStorage.getItem("access_token");
    // console.log("Acess", access_token);
    if (access_token) {
      try {
        // alert('yes')
        const { data } = await AuthService.profile();
        setUserInfo(data)
      }
      catch (error) {
        localStorage.removeItem('access_token');
        location.replace('/');
        console.log(error)
      }
    }
  }



  const fetchApiData = async () => {
    const query = qs.stringify({
      populate: "*"
    })
    try {
      const { data } = await axios.get(API + `posts/?${query}`);
      setAPIData(data.data)
      // console.log(data.data)
    }
    catch (error) {
      console.log(error)
    }
  }





  return (
    loading ? <p>loading</p> : (

      <div className="App">

        <APIContext.Provider value={APIData} >
          <UserContext.Provider value={userInfo} >

            <Header />
            <Routes>
              <Route path="/" element={<RootLayout />} />
              <Route path="/destinations" element={<Destination />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/nearby" element={<NearBy />} />
              <Route path="/signup" element={<SignUP />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/destinations/:blogId" element={<Details />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />

          </UserContext.Provider>
        </APIContext.Provider>

      </div>
    ))
}


export default App;
