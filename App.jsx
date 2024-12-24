import React from 'react';
import './App.css';
const App = () => (
  <div className="page">
  
  <header class="navbar">
    <div class="logo">MOHADDES</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  </header>

  
  <section id="home" class="hero">
    <h1>Welcome to Our React Website </h1>
    <p>Md.Mohaddes Ali</p>
    <p>BSc in CSE</p>
    <p>City University</p>
  </section>

  
  <section id="about" class="about">
    <h2>About Us</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit eos non nulla sint autem rem eius optio natus quis ex perferendis, libero quia. Illo enim hic necessitatibus fugit maiores.</p>
  </section>

 
  <section id="services" class="services">
    <h2>Our Services</h2>
    <div class="service">
      <h3>Web Design</h3>
      <p>Creative and user-friendly designs.</p>
      <p>Web Developer</p>
      <p>Video Content Creator</p>
      <p>Photo Grapher</p>
    </div>
    <div class="service">
      <h3>Branding</h3>
      <p>Building your unique online identity.</p>
      <p>Id 2125702027</p>
    </div>
    <div class="service">
      <h3>Support</h3>
      <p>Reliable and prompt customer support.</p>
      <p>Home Town Rangpur</p>
    </div>
  </section>

 
  <section id="contact" class="contact">
    <h2>Contact Us</h2>
    <p>Email: mohaddes.info@gmail.com</p>
    <p>Phone: +8801571319708</p>
  </section>

  <footer>
    <p>&copy; 2024 copyright@mohaddes. All rights reserved.</p>
  </footer>
  </div>
);
export default App;
