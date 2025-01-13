import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbarHome" href="#">Budget Buddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
              <li className="nav-item">
              <Link className="navbar-brand" to="/analysis">Analysis</Link>
              </li>
              <li className="nav-item">
               <Link className="navbar-brand" to="/budgets">Budgets</Link>
              </li>
              <li className="nav-item">
                <a href="#">Accounts</a>
              </li>
              <li className="nav-item">
                <a href="#">Categories</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
  

  <nav className="navbarBackground2">
    <div className="container-fluid">
      <p className="DateDay">January, 2025</p>
      
    </div>
  </nav>
    </div>
  )
}

export default Navbar
