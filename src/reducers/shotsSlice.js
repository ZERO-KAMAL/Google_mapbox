import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shots: [],
};

export const shotsSlice = createSlice({
  name: "targets",
  initialState,
  reducers: {
    addShots: (state, action) => ({
      ...state,
      shots: [action.payload, ...state.shots],
    }),
    removeShots: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addShots, removeShots } = shotsSlice.actions;

export default shotsSlice.reducer;
