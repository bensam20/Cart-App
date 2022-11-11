import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <center>
        <div className="form-container">
            <form action="/home">
                <div className="p-input-icon-left">
                    <i className="pi pi-user" />
                    <InputText className='input-field-txt' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div><br />
                <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                    <InputText className='input-field-txt' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </span><br />
                <Button label="Submit" aria-label="Submit" type='submit' />
            </form>
        </div>
        </center>
    </div>
  )
}

export default Login