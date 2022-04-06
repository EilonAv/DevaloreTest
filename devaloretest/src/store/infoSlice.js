import { createSlice } from "@reduxjs/toolkit";

export const infoReducer = createSlice({
  name: "infoReducer",
  initialState: {
    name: "",
    age: "",
  },
  reducers: {
    setInfo: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      
    },
  },
});

export const { setInfo } = infoReducer.actions;

export default infoReducer.reducer;
