import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "userdetails",
  initialState: null,

  reducers: {
    addetails: (state, action) => {
      return action.payload;
    },

    removedetails: () => {
      return null;
    },
  },
});

export const { addetails, removedetails } = userslice.actions;

export default userslice.reducer;