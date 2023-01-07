import { React, Fragment } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import './Mailbox.css';

const Mailbox = () =>{

    const history = useHistory();

    const receivedData = useSelector((state)=>state.compose.receivedData);
    const unread = receivedData.reduce((acc,val)=>
        (val.read === false ? acc + 1 : 0),
        0
    )


    return(
   

    <>
 

  

    <div>
        <ul  className="side-list">
            <li>
               <NavLink  to={'/compose-mail'}><Button className={'compose-btn'}>Compose</Button></NavLink>
            </li>
            <br/>
            <li>
               <NavLink className={'side-content'} to = 'inbox'>inbox <span className="unread">{unread}</span></NavLink>
            </li>
            
            <li>
               <NavLink className={'side-content'}  to={'/sent'}>Sent</NavLink>
            </li>

            <li>
               <NavLink className={'side-content'}  to={'/sent'}>Starred</NavLink>
            </li>

            <li>
               <NavLink className={'side-content'}  to={'/sent'}>Drafts</NavLink>
            </li>

            <li>
               <NavLink className={'side-content'}  to={'/sent'}>Archive</NavLink>
            </li>

        </ul>
    </div>
    
    </>
    )
}

export default Mailbox;