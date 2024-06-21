import React, { useState } from 'react'
import './LoginModal.css'
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function LoginModal({ login, setLogin }) {
    const navigate = useNavigate();
    const [account, setAccount] = useState(false);
    const handleAccount = (event) => {
        event.preventDefault();
        setAccount(!account);
    }


    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(user));
        setUser("");
        setAccount(!account);
    }

    const [auth, setAuth] = useState({
        email: '',
        password: ''
    })

    const handleAuth = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData.email === auth.email && userData.password === auth.password) {
            navigate('/login')
            localStorage.setItem("loggedIn", true);
            setLogin(false);
        } else {
            alert("Not Found")
        }
    }

    return (
        <>
            <div className={login ? 'login-modal' : 'd-none'} >
                <div className="small-login">
                    <FaTimes style={{ position: 'absolute', right: '2rem', top: '2rem', cursor: 'pointer' }} onClick={() => setLogin(false)} />
                    <div className="container">
                        <div className={account ? 'd-none' : 'in-login'}>
                            <h3 style={{ textAlign: 'center' }}>Login</h3>
                            <form onSubmit={handleAuth}>
                                <div className="mb-3">
                                    <input type="email" name="email" value={auth.email} onChange={(e)=> setAuth({...auth, [e.target.name]: e.target.value})} id="" className='form-control' placeholder='Email' />
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="password" value={auth.password} onChange={(e)=> setAuth({...auth, [e.target.name]: e.target.value})} id="" className='form-control' placeholder='Password' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-dark form-control'>Login</button>
                                </div>
                                <button className='btn btn-light form-control' onClick={handleAccount}>Create Account</button>
                            </form>
                        </div>
                        <div className={account ? 'account' : 'd-none'}>
                            <h3 style={{ textAlign: 'center' }}>Create Account</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" name="name" value={user.name} onChange={(e)=> setUser({...user, [e.target.name]: e.target.value})} id="" className='form-control' placeholder='First Name' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="lastName" value={user.lastName} id="" onChange={(e)=> setUser({...user, [e.target.name]: e.target.value})} className='form-control' placeholder='Last Name' />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" value={user.email} onChange={(e)=> setUser({...user, [e.target.name]: e.target.value})} id="" className='form-control' placeholder='Email' />
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="password" value={user.password} onChange={(e)=> setUser({...user, [e.target.name]: e.target.value})} id="" className='form-control' placeholder='Password' />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='btn btn-light w-100'>Create Account</button>
                                </div>
                                    <button className='btn btn-dark w-100' onClick={handleAccount}>Login</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginModal
