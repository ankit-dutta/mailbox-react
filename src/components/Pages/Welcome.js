import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () =>{
    return(
        <>
       
       <div>
            <h1>Welcome to your mailbox!!</h1>
            <Link to='/compose-mail' variant="success" >
                Go to MailBox
            </Link>
       </div>
        </>
    )
}


export default Welcome;