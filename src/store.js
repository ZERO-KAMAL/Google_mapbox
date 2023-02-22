import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterSlice";
import targetsSlice from "./reducers/targetsSlice";
import shotsSlice from "./reducers/shotsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    targets: targetsSlice,
    shots: shotsSlice,
  },
});
