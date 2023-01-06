import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchReceivedMail } from "../../store/mail-actions";

import './Inbox.css';


const Inbox = () =>{
    const receivedData = useSelector((state)=>state.compose.receivedData);
    const dispatch = useDispatch();

    console.log(receivedData , 'receivedData')

    useEffect(()=>{
        // console.log('useEffect CAlled')
        dispatch(fetchReceivedMail());
    },[dispatch])


    const receivedmessages = receivedData.map((data)=>{
        // console.log(data , 'inbox data')

        const url = `/inbox/${data.message}`;

        return(
            <>
      <div>
        {/* <Container> */}
          <Row xs={3} className="bg-light border p-3">
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
                
                variant="danger"
                className="deletebtn"
              >
                Delete
              </Button>
            </Col>
          </Row>
        {/* </Container> */}
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
        


          

<Container>
        <Row className="justify-content-md-evenly">
            <Col md='auto' sm = {1}>
               <div className="compose-mail">
                    <Link to = '/compose-mail'><Button className="composemail-btn">Compose</Button></Link>
                </div>
            </Col>


            <Col sm={10}>  {receivedmessages}</Col>
        </Row>
</Container>      
         
        </>
    )
}

export default Inbox;