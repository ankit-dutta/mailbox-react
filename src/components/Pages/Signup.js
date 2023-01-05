import axios from 'axios';
import React, { useState , useRef} from 'react'
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../store/authreducer';
import './Signup.css';

const Signup =() =>{
   const history = useHistory();
   const dispatch = useDispatch()

   const [isLogin, setIsLogin] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
  
    const formSubmitHandler = (e) =>{
        e.preventDefault();

        
        let url;
       if(isLogin){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`

       }else{
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`

       }

       const enteredEmail = emailRef.current.value;
        const enteredPass = passwordRef.current.value;

        if(!isLogin){
            const enteredConfirmPass = confirmPassRef.current.value;
            if(enteredPass !== enteredConfirmPass){
                alert("Password did not match");
                return;
            }
        }

            //POST REQUEST FOR SIGNED UP
            axios.post(url,{
                email: enteredEmail,
                password: enteredPass,
                returnSecureToken: true,
            }).then((response)=>{
                if(response.status === 200){
                    const token = response.data.idToken;
                    const email = response.data.email;
                    localStorage.setItem('token',token);
                    localStorage.setItem('email',email);
                    dispatch(authActions.login({
                        token,
                        email
                    }))

                    console.log("User successfully Signed up");
                    history.replace('/welcome');
                    // alert("logged In")
                }
            }).catch((error)=>{
                alert("Authentication Failed");
                console.log(error)
            })








    // const enteredEmail = emailRef.current.value
    //   const enteredPassword = passwordRef.current.value
    //   // const enteredCnfrmPassword = confrmPasswordRef.current.value
    //   // console.log(enteredEmail , enteredCnfrmPassword, enteredPassword);

    // //   setIsLoading(true)
    //   let url;

    //   if(isLogin){
    //     url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`
    //   } else{
    //     url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`
    //   }
      
    //      fetch(url,{
    //       method:"POST",
    //       body:JSON.stringify({
    //         email:enteredEmail,
    //         password:enteredPassword,
    //         returnSecureToken: true
    //       }),
    //       headers:{
    //         'Content-Type' : 'application/json'
    //       }
    //      }).then(res =>{
    //     //   setIsLoading(false)
    //       if(res.ok){
    //         console.log("successfully registered")
    //         return res.json();
  
    //       }else{
    //       return  res.json().then(data =>{
    //         console.log(data)
    //         let errorMessage = 'Authentication failed';
    //         if(data && data.error && data.error.message){
    //           errorMessage = data.error.message
    //         }

    //           throw new Error(errorMessage);

    //         })
    //       }
    //      }).then(data => {
    //       console.log(data)
    //       localStorage.setItem("email", enteredEmail);

    //       console.log('succesfully login')
    //       // authctx.login(data.idToken)
    //     //   dispatch(authActions.login(data.idToken))
    //        history.push("/welcome")
    //      }).catch(err =>{
    //         alert(err.message)
    //      })
      

      

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