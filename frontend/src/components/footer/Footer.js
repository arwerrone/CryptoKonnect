import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-300">
        <div className="container">
          <div className="social">
            <span className="text-4xl">Crypto Konnect</span>
            <div className="icon">
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
          <div className="link">
            <ul className="col">
              <li>Crypto Konnect</li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Upcoming Events</a>
              </li>
            </ul>
            <ul className="col">
              <li>Quick Links</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>

            <ul className="col">
              <li>Legal</li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">License Agreement</a>
              </li>
              <li></li>
            </ul>
            <p>Copyright 2022 Crypto Konnect</p>
          </div>
        </div>
      </footer>
    );
  }
}
