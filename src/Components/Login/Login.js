import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { authenticateUser } from '../../Services/getData';
import './Login.css';
import { LoginContext } from '../../Contexts/Contexts';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect( () => {
        const logIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        console.log("Inside useEffect", localStorage);
        console.log(logIn)
        if(logIn){
            loginContext.setValidationRes('success');
            navigate("/home");
        }
    }, []);
    

    const validateUser = (event) => {
        event.preventDefault();
        
        authenticateUser(username, password).then(data => {
            loginContext.setValidationRes(data);
            if(data === 'success'){
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
                navigate("/home");
            } else {
                localStorage.setItem('isLoggedIn', JSON.stringify(false));
                setLoginError('Invalid Credentials');
            }
        });
    };

  return (
    <div>
        <Navbar/>
        <div className='login-container'>
                <img src='/images/login_img.png' alt="Image Text" />
                <div className="form-container">
                    <h2 style={{fontFamily: 'sans-serif'}}>Login</h2>
                    <h4 style={{color: '#DC143C', fontFamily: 'sans-serif'}}>{loginError}</h4>
                    <form>
                        <div className="p-input-icon-left">
                            <i className="pi pi-user" />
                            <InputText className='input-field-txt' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div><br />
                        <span className="p-input-icon-left">
                            <i className="pi pi-lock" />
                            <InputText className='input-field-txt' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                        </span><br />
                        <Button label="Submit" type='submit' onClick={ validateUser } style={{width:"100%", marginTop:"1rem"}} />
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login