import { createSlice } from "@reduxjs/toolkit";


const composeSlice = createSlice({
  name: "compose",
  initialState: {sent: {}, sentData: [], receivedData: []},
  reducers:{
    compose(state,action){
        state.sent = {
            mail : action.payload.mail,
            message : action.payload.message,
        };
        // console.log(state.sent);
    },
    fetchSentData(state,action){
      state.sentData = action.payload;
      // console.log(state.sentData , 'sent data');
    },
    fetchReceivedData(state, action){
      state.receivedData = action.payload;
      console.log(state.receivedData , "received data composeRed");
    },
    onRead(state, action){
      const id = action.payload;
      const existing = [...state.receivedData];
      existing.forEach((ele, index)=>{
        if(ele.id === id){
          existing[index].read = true
        }
      });

      state.receivedData = existing;
    }
  }
})

export const composeActions = composeSlice.actions;

export default composeSlice.reducer