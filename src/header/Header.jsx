/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">
          DevChase
        </span>
      </div>
      <img 
        className="headerImg" src="/images/headerImage.jpg" alt="Header Image"
      />
    </div>
  )
}

export default Header;