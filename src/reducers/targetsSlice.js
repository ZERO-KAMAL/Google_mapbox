import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targets: [],
};

export const targetsSlice = createSlice({
  name: "targets",
  initialState,
  reducers: {
    addTarget: (state, action) => ({
      ...state,
      targets: [action.payload, ...state.targets],
    }),
    removeTarget: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTarget, removeTarget } = targetsSlice.actions;

export default targetsSlice.reducer;
