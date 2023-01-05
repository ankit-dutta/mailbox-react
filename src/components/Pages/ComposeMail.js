import { useRef, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";


import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { composeMail } from "../../store/mail-actions";


const ComposeMail = () =>{

    const dispatch = useDispatch();
    const emailInputRef = useRef();
    const [editortext, setEditorText] = useState('');

    const onEditerChange = (editorContent) =>{
        console.log(editorContent.blocks)

        let text = "";
        editorContent.blocks.forEach(letters => {
            text += `${letters.text}`;
        }) 
        setEditorText(text); // editor content will go in editortext variable;
        console.log(text , 'editor text');
    }  

    const composeSubmitHandler = (event) =>{
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        dispatch(composeMail(enteredEmail, editortext))

        setEditorText("")
        console.log("submit");

        event.target.reset();
    }

    return(
       <>
        <section>
           <center>

            <Form className="align-items-center" onSubmit={composeSubmitHandler}>
     
   
                    <Col xs="auto" sm = {7}>
                        
                        <InputGroup className="mb-2">
                            <InputGroup.Text>To:</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="" type="email"  ref={emailInputRef} />
                        </InputGroup>
                    </Col>

                    <Col xs="auto" sm = {7}>
                        <Form.Control className="mb-2" placeholder="Subject" />
                    </Col>



                    <Editor
                        //   editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        editorStyle={{
                            border: "1px solid #C0C0C0",
                            height: "10rem",
                            padding: "8px",
                            overflow: "hidden",
                            width:"60%"
                        }}

                        toolbarStyle = {{
                            width:"60%"
                        }}
                        onContentStateChange = {onEditerChange} //using onContentStateChange we get the typed content 
                    />;

                    <Button type="submit">Send</Button>

            </Form>


            </center>
        </section>
        </>
    )
}

export default ComposeMail;