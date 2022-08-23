import React from 'react';
import './topbar.css';
import { Link } from "react-router-dom";

const Topbar = () =>{
  return (
    <div className="top">
      <div className="topLeft">
        <button>
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button>
          <i className="fa-brands fa-instagram"></i>
        </button>
        <button>
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
      <div className="topCenter">
        <ul className="topCenterList">
          <li className="topCenterItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="home">HOME</Link>
          </li>
          <li className="topCenterItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="setting">ABOUT</Link>
          </li>
          <li className="topCenterItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="write">WRITE</Link>
          </li>
          <li className="topCenterItem">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="contact">CONTACT</Link>
          </li>
        </ul>

      </div>
      <div className="topRight">
      {/* <img 
        className="profile"
        src="/images/react.jpg" 
        alt="Profile" /> */}
      <button className="logInOut">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="login">Log in</Link>
      </button>
      <form className="searchForm">
        <input 
          type="search" 
          placeholder="Search..."
          className="searchBar"
        />
        <button className="searchButton">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      </div>
    </div>
  )
}
export default Topbar;