import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <span class="logo_name">Crypto Konnect</span>
            </div>
            <div class="media-icons">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/arwerrone/CryptoKonnect">
                <i class="fab fa-github"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Crypto Konnect</li>
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
            <ul class="box">
              <li class="link_name">Quick Links</li>
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

            <ul class="box">
              <li class="link_name">Legal</li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
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
