import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authreducer";
import composeReducer from "./composeReducer";

const store = configureStore ({
    reducer:{
        auth: authreducer,
        compose: composeReducer
    }
});

export default store;