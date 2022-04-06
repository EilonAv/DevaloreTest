import { createSlice } from "@reduxjs/toolkit";

export const petReducer = createSlice({
  name: "petReducer",
  initialState: {
    petName: "",
    petType: "",
  },
  reducers: {
    setPet: (state, action) => {
      state.petName = action.payload.name;
      state.petType = action.payload.type;
    },
  },
});

export const { setPet } = petReducer.actions;

export default petReducer.reducer;
