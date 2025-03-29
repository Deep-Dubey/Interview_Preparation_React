import { createSlice } from "@reduxjs/toolkit";

// Create a form slice
const formSlice = createSlice({
  name: "form",
  initialState: { name: "", email: "" },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

// Export actions
export const { setName, setEmail, resetForm } = formSlice.actions;
export default formSlice.reducer;
