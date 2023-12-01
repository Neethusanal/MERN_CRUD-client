import React, { useState } from 'react'
import "./Login.css";
const Login = () => {
    const [values ,setValues]=useState({
        email:'',
        password:''
    })
    
  return (
    <div>
<div class="login-form">
  <form>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
         <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
      </div>
      <div class="input-field">
   
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
      </div>
     
    </div>
    <div class="action">
     
      <button>Sign in</button>
    </div>
  </form>
</div>


    </div>
  )
}

export default Login