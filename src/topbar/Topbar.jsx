import React from 'react';
import './topbar.css';

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
          <li className="topCenterItem">HOME</li>
          <li className="topCenterItem">ABOUT</li>
          <li className="topCenterItem">CONTACT</li>
          <li className="topCenterItem">WRITE</li>
          <li className="topCenterItem">LOGOUT</li>
        </ul>

      </div>
      <div className="topRight">
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