import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const userDetails = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
  }
  return (
    <div className='login py-5'>
      <div className="container">
        <div className="in-login mt-5" style={{textAlign: 'center'}}>
          <h4>My Account</h4>
          <p>Welcome <b>{userDetails.name}</b>! (Not {userDetails.name}? <Link to="/" onClick={handleLogout}>Logout</Link>)</p>
        </div>
      </div>
    </div>
  )
}

export default Login
