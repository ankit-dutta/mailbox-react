import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteSentMessage, fetchSentMail } from "../../store/mail-actions";

const SentMail = () =>{

    const sentData = useSelector((state)=> state.compose.sentData);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchSentMail());
    },[dispatch])

    const deleteMessageHandler = (id) => {
        dispatch(deleteSentMessage(id));
      };

    // console.log(sentData)

    const sentList  = sentData.map((data)=>{
        return (
            <>
            <Container>
                <Row xs={3} className = 'bg-light border p3'>
                    <Col>
                      <div>
                        To:{data.To}
                      </div>
                    </Col>

                    <Col>
                      <div>
                        Message:{data.message}
                      </div>
                    </Col>

                    <Col>
                        <Button
                            onClick={() => deleteMessageHandler(data.id)}
                            variant="danger"
                            className="deletebtn"
                        >
                            Delete
                        </Button>
                    </Col>

                </Row>
            </Container>
            </>
        )
    })
    return(
        <>
         {sentList}
        </>
    )
}

export default SentMail;