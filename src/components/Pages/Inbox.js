import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchReceivedMail } from "../../store/mail-actions";

import './Inbox.css';


const Inbox = () =>{
    const receivedData = useSelector((state)=>state.compose.receivedData);
    const dispatch = useDispatch();

    // console.log(receivedData , 'receivedData')

    useEffect(()=>{
        // console.log('useEffect CAlled')
        dispatch(fetchReceivedMail());
    },[dispatch])

    const mailDeleteHandler = () =>{
      console.log("delete");
    }


    const receivedmessages = receivedData.map((data)=>{
        // console.log(data , 'inbox data')

        const url = `/inbox/${data.message}`;

        return(
            <>
      <div>
        <Container className="inb-container">
          <Row xs={3}  className="bg-light border-bottom p-3 ">
            <Col xs={1}>
              <div className={data.read ? "read" : "status"}></div>
            </Col>

            <Link to={{ pathname: url, state: data }}>
              <Col>
                <div>From:{data.From}</div>
              </Col>
            </Link>

            <Col xs={3}>
              <div>Message:{data.message}</div>
            </Col>
            <Col>
              <Button
                 onClick = {mailDeleteHandler}
                variant="danger"
                className="deletebtn"
              >
               <i class="fa fa-trash" aria-hidden="true"></i>

              </Button>
            </Col>
          </Row>
        </Container>
      </div>

            </>
        )
    })
    return(
        <>

        {/* search bar */}
         {/*           
          <div class="input-group mb-3">
			<input type="text" class="form-control"/>
			<div class="input-group-append"><button class="btn btn-primary"><i class="fas fa-search"></i></button></div>
		  </div> */}
        
        <div>
          <h1><u><strong>INBOX</strong></u></h1>
        </div>

          


   

       
            <Col > 
                <div className="mt-5 ">
                   {receivedmessages}
                </div>
              </Col>
      
     
         
        </>
    )
}

export default Inbox;