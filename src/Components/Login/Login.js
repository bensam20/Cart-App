import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { authenticateUser } from '../../Services/getData';
import './Login.css';
import { LoginContext } from '../../Contexts/Contexts';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'primereact/image';
import Navbar from '../Navbar/Navbar';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();

    const validateUser = (event) => {
        event.preventDefault();
        authenticateUser().then(data => {
            if(data.username === username && data.password === password){
                loginContext.setValidationRes('success');
                navigate("/home");
            }else{
                loginContext.setValidationRes('failed');
            }
        });
    };

  return (
    <div>
        <Navbar/>
        <div className='login-container'>
                <Image imageClassName='login_img' src='/images/login_img.png' alt="Image Text" />
                <div className="form-container">
                    <h2 style={{fontFamily: 'sans-serif'}}>Login</h2>
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