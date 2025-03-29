import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "../slice/counterSlics"

export const store = configureStore({
    reducer: {
        counter: counterSlices,
    }
})