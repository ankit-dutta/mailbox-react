import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { readMessage } from "../../store/mail-actions";

import './MessageBox.css';

const MessageBox =()=>{
    const dispatch = useDispatch();
    const location  = useLocation();
    const history = useHistory()
    const data = location.state;
    console.log(data, "messgaebox data");
    console.log(location ,"messagebox location")

    const backHandler =() =>{
        history.replace('/inbox');
    }

    const messageReadHandler =() =>{
        dispatch(readMessage(data));
    }

    messageReadHandler();

    return(
        <>
        

            <div className="message-heading">
            <h2><i onClick={backHandler}  class="fa fa-arrow-left" aria-hidden="true"></i> Text Message</h2>
            </div>

            <div className="messagebox-container">
           

                <div className="message-name">
                    <h3>Mail id : <i>{data.From}</i></h3>
                </div>

                
                <div className="message">{data.message}</div>

             </div>
        </>
    )
}

export default MessageBox;