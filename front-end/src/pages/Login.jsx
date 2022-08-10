import React from 'react';
import { useRef, useState, useEffect } from 'react';
import Form from '../components/sign-in/Form'

var userIsRegistered = false;

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    },[])

    useEffect(() =>{
        setErrMsg('');
    },[user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSucess(true)
    }


    return (
        <>
            {sucess ? (
                <section>
                    <h1>You are logged in </h1>
                    <br />
                    <p>
                        <a href="#">Go to home</a>
                    </p>
                </section>
            ):(
                <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) =>{
                            setUser(e.target.value)
                        }}
                        value={user}
                        required
                        />
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        placeholder="password" 
                        id="password"
                        onChange={(e) =>{
                            setPwd(e.target.value)
                        }}
                        value={pwd}
                        required
                        />
                
                    <button type="submit">Log In</button>
                </form>
                <p>Need an Account ? <br/>
                    <span className='line'>
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </section>
            )}
            
        </>
        
    );
  }
  
  export default Login;
  