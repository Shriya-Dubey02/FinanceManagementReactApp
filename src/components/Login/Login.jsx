import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="regisBody">
       <div className="main">
           
           <h1>Login</h1>
           <form>

                 <label for="first">
                       Enter Username:
                 </label>
                 <input type="text" 
                        id="first" 
                        name="first" 
                        placeholder="Enter email id"/>

                      

                 <label for="password">
                       Enter Password:
                 </label>
                 <input type="password"
                        id="password" 
                        name="password"
                        placeholder="Password here"/>

                 <div className="wrap">
                      <button type="submit"><Link to={"/"}>
                             Login
                      </Link> </button>
                 </div>
           </form>
           <p className="registerButton">Not a user?
                 <Link to={"/Register"}
                    className="registerButton">
                       Register
                </Link>
           </p>
         
     </div>
     </div>
    
  )
}

export default Login
