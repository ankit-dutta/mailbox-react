import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authreducer";

const store = configureStore ({
    reducer:{
        auth: authreducer
    }
});

export default store;