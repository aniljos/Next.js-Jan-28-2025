'use client'

import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(evt: FormEvent<HTMLFormElement>){

        evt.preventDefault();

        if(!username || !password){
           setMessage("Enter the credentials");
        }
        else{
            // API call to validate the creds
            setMessage("");
        }

    }

    function handleUsernameChange(evt: ChangeEvent<HTMLInputElement>){
        
        const value = evt.target.value;
        setUsername(value)
       
    }

    return (
        <div>
            <h3>Login</h3>
            <p>Signin to the application here...</p>

            {message ? <div className="alert alert-danger">Enter the credentials</div> : null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange}/>
                    {/* <span>You entered {username}</span> */}
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" value={password} 
                                                                onChange={evt => setPassword(evt.target.value)}/>
                </div>

                <br />

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}