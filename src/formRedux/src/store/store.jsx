import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slicer/formSlice";

export const store = configureStore({
    reducer: {
      form: formSlice,
    },
  });
