import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Signup.css';

const Signup =() =>{
   const [isLogin, setIsLogin] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
  
    const formSubmitHandler = (e) =>{
        e.preventDefault();

        
        let url;
       if(isLogin){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5_fGuAHEjwOyBmThyEGH3o1KY4lz_T9k`

       }else{
        url =  `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5_fGuAHEjwOyBmThyEGH3o1KY4lz_T9k`

       }

       const enteredEmail = emailRef.current.value;
        const enteredPass = passwordRef.current.value;

        if(!isLogin){
            const enteredConfirmPass = confirmPassRef.current.value;
            if(enteredPass !== enteredConfirmPass){
                alert("Password did not match");
                return;
            }

            //POST REQUEST FOR SIGNED UP
            axios.post(url,{
                email : enteredEmail,
                password: enteredPass,
                returnSecureToken: true,
            }).then((response)=>{
                if(response.status === 200){
                    const token = response.data.idToken;
                    const email = response.data.email;
                    localStorage.setItem('token',token);
                    localStorage.setItem('email',email);

                    console.log("User successfully Signed up");
                    // alert("logged In")
                }
            }).catch((error)=>{
                alert("Authentication Failed");
            })
        }
      

      

    }

    const switchLoginHandler = () =>{
        setIsLogin((prevState)=> !prevState)
    }

    return (
        <>
        
       <center >
        
       <div className='form-container'>
       <h3>{isLogin ? "Login" : "Signup"}</h3>
        <Form onSubmit={formSubmitHandler}>
            {/* <input type='text' /> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control  type="email" placeholder="Enter email" ref={emailRef} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label className="w-25 p-2" >Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" ref = {passwordRef} required />
            </Form.Group>

          {!isLogin && <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Confirm Password</Form.Label> */}
                <Form.Control  type="password" placeholder="Confirm Password" ref={confirmPassRef} required />
            </Form.Group>}
          
            <Button variant="primary" type='submit' className = "signup-btn" >
            {isLogin ? "Login" : "Signup"}
            </Button>
            {isLogin && <p className="forgot">Forgot Password</p>}

        </Form>

        <br />
      

        </div>
        <br />

        <Card className="p-1 w-25">
              <p>
                {isLogin
                  ? "Dont have an account? "
                  : "Already have an account?"}
                <span onClick={switchLoginHandler}>
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
            </Card>
        </center>

       

        </>
     )
}

export default Signup;