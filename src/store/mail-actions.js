import axios from "axios";
import { composeActions } from "./composeReducer";


export const composeMail = (mail, message) =>{
    return async (dispatch) => {
        const email = localStorage.getItem("email");
        const short = email.replace(/[^a-zA-Z0-9]/g , "");
        const sent = await axios.post(
            `https://mail-client-react-default-rtdb.firebaseio.com/${short}.json`,
            {
                sent:{To : mail, message, read: false},
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
            `https://mail-client-react-default-rtdb.firebaseio.com/${shorts}.json`,
            {
                inbox: {From: email, message, read:false},
            }
        )
    }
}

export const readMessage = (data) =>{
    return async (dispatch)=>{
        const readingData = async() =>{

            const email = localStorage.getItem('email');
            const short = email.replace(/[^a-zA-Z0-9]/g, "");
            const sent = await axios.put(
                `https://mail-client-react-default-rtdb.firebaseio.com/${short}/${data.id}/inbox.json`,
                {
                    From: data.From,
                    message: data.message,
                    read: true
                }
            );
            if(sent.status === 200){
                // console.log(sent.data);
                dispatch(composeActions.onRead(data.id))
            }
        }
        readingData();
    }
}

export const fetchSentMail = () =>{
    return async (dispatch) =>{
        const fetchData = async() =>{
            const email = localStorage.getItem('email');
            const mail = email.replace(/[^a-zA-Z0-9]/g, "");
            const response = await axios.get(`https://mail-client-react-default-rtdb.firebaseio.com/${mail}.json`

            );
            // console.log(response.data);

            let data = [];

            for(const key in response.data){
                if(response.data[key].sent){
                    data.push({
                        id:key,
                        To:response.data[key].sent.To,
                        message:response.data[key].sent.message,
                        read:response.data[key].sent.read,
                    })
                }
            }
            // console.log(data , 'data mailaction');
            return data;
        }
        const data = await fetchData();
        dispatch(composeActions.fetchSentData(data));
    }
}

export const fetchReceivedMail = () =>{
    return async (dispatch) =>{
        const fetchData = async () =>{
            const email = localStorage.getItem('email');
            const mail = email.replace(/[^a-zA-Z0-9]/g, "");
            const response = await axios.get(`https://mail-client-react-default-rtdb.firebaseio.com/${mail}.json`

            );
            // console.log(response.data , 'fetchreceived data');

            let data = [];

            for(const key in response.data){
                if(response.data[key].inbox){
                    data.push({
                        id:key,
                        From:response.data[key].inbox.From,
                        message:response.data[key].inbox.message,
                        read:response.data[key].inbox.read,
                    })
                }
            }
            // console.log(data , 'fetch receive data');
            return data;
        }
        const data = await fetchData();
        dispatch(composeActions.fetchReceivedData(data));
    
    }
}

export const deleteMessage = (id) =>{
    return async (dispatch) =>{
        const email = localStorage.getItem('email');
        const mail = email.replace(/[^a-zA-Z0-9]/g, "");
        const response = await axios.delete(
            `https://mail-client-react-default-rtdb.firebaseio.com/${mail}/${id}.json`,
        );

        if(response.status === 200){
            console.log(response , "delete");
            dispatch(composeActions.deleteInbox(id));
        }
    }
}

export const deleteSentMessage = (id)=>{
    return async(dispatch)=>{
        const email = localStorage.getItem("email");
        const mail = email.replace(/[^a-zA-Z0-9]/g, "");
        const response = await axios.delete(
            `https://mail-client-react-default-rtdb.firebaseio.com/${mail}/${id}.json`,

        )
        if(response.status === 200){
            console.log(response);
            dispatch(composeActions.deleteSentMail(id))
        }
    }
}