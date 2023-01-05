import axios from "axios";
import { Modal } from "react-bootstrap";
import { composeActions } from "./composeReducer";


export const composeMail = (mail, message) =>{
    return async (dispatch) => {
        const email = localStorage.getItem("email");
        const short = email.replace(/[^a-zA-Z0-9]/g , "");
        const sent = await axios.post(
            `https://mail-client-react-default-rtdb.firebaseio.com/${short}.json`,
            {
                sent:{To : mail, message, read: false}
            }
        );

        if(sent.status === 200){
            console.log(sent , 'sent -compose-mail');
            dispatch(composeActions.compose({
                mail:mail,
                message: message,
            }))
            console.log(mail,message ,"mail - message")
        }

        const shorts = mail.replace(/[^a-zA-Z0-9]/g, "");
        await axios.post(
            `https://mail-client-react-default-rtdb.firebaseio.com/${short}.json`,
            {
                inbox: {From:email,message,read:false},
            }
        )
    }
}