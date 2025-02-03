import React from 'react'
function indexPage() {
  return (
    <div>

<header class="header">
      <nav>
        <div class="nav__bar">
          <div class="logo">
            <img src="{}" alt="logo" />
          </div>
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
        <button class="btn nav__btn">Register</button>
      </nav>
      <div class="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Simple Way<br /> to Manage<span> Personal Finances</span>.</h1>
      </div>
    </header>

    <h1>HELLO</h1>

    </div>
  )
}

export default indexPage
