import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Setting from './pages/setting/Setting';
import SignUp from './pages/signUp/SignUp';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Header from './components/header/Header';
import Contact from './pages/contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Header/>}/>
        <Route path="home" element={<Home />}/>
        <Route path="post" element={<Single />} />
        <Route path="write" element={<Write />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<SignUp/>}/>
        <Route path="setting" element={<Setting/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

