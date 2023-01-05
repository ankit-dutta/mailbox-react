import { createSlice } from "@reduxjs/toolkit";


const composeSlice = createSlice({
  name: "compose",
  initialState: {sent: {}, sentData: [], receivedData: []},
  reducers:{
    compose(state,action){
        state.sent = {
            mail : action.payload.mail,
            message: action.payload.message,
        };
        console.log(state.sent);
    },
  }
})

export const composeActions = composeSlice.actions;

export default composeSlice.reducer