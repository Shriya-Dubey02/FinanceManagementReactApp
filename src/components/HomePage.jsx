import React from 'react'
import './css/Homepage.css'
import logo from './images/Untitled design.png'
import firstImage from "./images/firstimage.jpeg"
import treeGrowth from "./images/treeGrowth.jpeg"
import image from "./images/images.png"
import plant from "./images/plant.png"
import graph from "./images/graph.png"
import finance3 from "./images/finance1.jpg"
import fb from "./images/facebook.png"
import insta from "./images/instagram.png"
import twi from "./images/twitter.png"
import yt from "./images/youtube.png"
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <header class="headerss" style={{backgroundImage: `url(${firstImage})` }} >
      {/* <nav class="homeNav">
        <div class="nav__bars">
          
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Link to="/Register"><button class="btn nav__btns">Register</button></Link>
        
      </nav> */}

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brandss" href="#" to="/">BudgetBuddy</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <Link to="/register">Register</Link>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
      <div class="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Simple Way<br /> to Manage<span> Personal Finances</span>.</h1>
      </div>
    </header>


    <section class="section__container about__container" id="about">
      <div class="about__image">
        <img src={treeGrowth} alt="about" id="treeImage"/>
      </div>
      <div class="about__content">
        <p class="section__subheader">ABOUT US</p>
        <h2 class="section__header">Your Financial Growth, Our Priority.
        </h2>
        <p class="section__description">
          Designed to make every aspect of financial planning—whether it’s budgeting, saving, investing, or tracking expenses—seamless and stress-free. With user-friendly technology, personalized insights, and a dedication to your success, we ensure your financial journey is not just secure but also rewarding.
        </p>
        
      </div>
    </section>

    <section class="section__container room__container">
      
      <h2 class="section__header">What will you accomplish with Budget Buddy?</h2>
      <p class="section__subheader">I want to</p>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src={image}alt="room" class="plantImage" />
           
          </div>
          <div class="room__card__details">
            <h4>Feel organized about my finances</h4>
            <a href="" id="CardsAnchor">Enjoy Adulthood &rarr;</a>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={plant} alt="room" class="plantImage"/>
            
          </div>
          <div class="room__card__details">
            <h4>Be less stressed about money</h4>
            <a href="" id="CardsAnchor">Make Change &rarr;</a>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={graph} alt="room" class="plantImage" />
           
          </div>
          <div class="room__card__details">
            <h4>Feel confident with an irregular income</h4>
            <a href="" id="CardsAnchor">Create More Balance &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <section class="service" id="service" style={{backgroundImage: `url(${finance3})` }}>
      <div class="section__container service__container">
        <div class="service__content">
          <p class="section__subheader">SERVICES</p>
          <h2 class="section__header">Strive Only For The Best.</h2>
          <ul class="service__list">
            <li>
              <span><i class="ri-shield-star-line"></i></span>
              Account Aggregation
            </li>
            <li>
              <span><i class="ri-24-hours-line"></i></span>
             Simple Budgeting
            </li>
            <li>
              <span><i class="ri-headphone-line"></i></span>
              Basic Categorization
            </li>
            <li>
              <span><i class="ri-map-2-line"></i></span>
              Intuitive Interface
            </li>
          </ul>
        </div>
      </div>
    </section>

<br/><br/><br/>
    

    <footer class="footer" id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
         <img src={logo} alt="" />
          <p class="section__description">
            Your trusted finance management platform to track incomes,expenses and savings efficiently.
          </p>
          <Link to="/Register"><button class>Register Now</button></Link>

        </div>
    
        <div class="footer__col">
          <h4>OUR SERVICES</h4>
          <ul class="footer__links">
            <li>Efficient Money management</li>
            <li>Save and enjoy</li>
        
          </ul>
        </div>
        <div class="footer__col">
          <h4>CONTACT US</h4>
          <ul class="footer__links">
            <li><a href="#">budget@info.com</a></li>
          </ul>
          <div class="footer__socials">
            <img src={fb} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={yt} alt="youtube" />
            <img src={twi} alt="twitter" />
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default HomePage
