// src/features/ride/findRideSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commutes: [],
};

const findRideSlice = createSlice({
  name: "findRide",
  initialState,
  reducers: {
    addCommute(state, action) {
      state.commutes.push({ ...action.payload, status: "Requested" });
    },
    deleteCommute(state, action) {
      state.commutes.splice(action.payload, 1);
    },
    updateRideStatus(state, action) {
      const { index, newStatus } = action.payload;
      if (state.commutes[index]) {
        state.commutes[index].status = newStatus;
      }
    },
  },
});

export const { addCommute, deleteCommute, updateRideStatus } =
  findRideSlice.actions;
export default findRideSlice.reducer;
