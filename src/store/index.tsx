import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./feature";
import { UseSelector } from "react-redux";
const store = configureStore({
    reducer: {
        auth: authSlice
    }
});
export default store;