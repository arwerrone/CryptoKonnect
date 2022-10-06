import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className='bg-gray-300'>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">Crypto Konnect</span>
            </div>
            <div className="media-icons">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/arwerrone/CryptoKonnect">
                <i className="fab fa-github"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Crypto Konnect</li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Upcoming Events</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Quick Links</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>

            <ul className="box">
              <li className="link_name">Legal</li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2022
              <span> </span><a href="/">Crypto Konnect</a>
              All rights reserved
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
