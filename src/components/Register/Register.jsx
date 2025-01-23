import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { addUsers } from '../services/UserService';
import Popup from 'reactjs-popup';


function Register() {
    
    let[user,setUser]=useState(null);
    const submitHandler=(e)=>{
        e.preventDefault();

     
        addUsers({
            userName:e.target.userName.value,
            password:e.target.password.value,
            firstName:e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value
        }).then(data=>setUser(data));
    }

      
  return (
    <div class="container">
        <div class="row">
   < div className="regisBody">
     {/* Popup */}
   {user ? <div class="alert alert-primary alert-dismissible fade show container " role="alert">
                <strong> Welcome {user.firstName}</strong>  You Have Registered Successfully!!!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
            </div> : <></>}

      {/* Popup End */}
   
 <div className="main">

    

<h1>Registration</h1>
<form onSubmit={submitHandler}>

    <label for="first">
        Enter Username:
    </label>
    <input type="text" id="uname" name="userName" placeholder="Enter Username"/>



    <label for="password">
        Enter Password:
    </label>
    <input type="password" id="password" name="password" placeholder="Password here"/>


    <label for="password">
        Enter Email Id:
    </label>
    <input type="email" id="email" name="email" placeholder="Email here"/>

    <label for="password">
        Enter First Name:
    </label>
    <input type="text" id="fname" name="firstName" placeholder="Enter First Name"/>
    <label for="Fname">
        Enter Last Name:
    </label>
    <input type="text" id="lname" name="lastName" placeholder="Enter Last Name"/>

    <div className="wrap">
        <button type="submit"> Register </button>
    </div>
</form>


<p className="registerButton">Already registered?
    <Link to={"/Login"}  className="registerButton">
        Login
    </Link>
</p>

</div>
</div>
</div>
</div>



  )
}

export default Register;
