import { configureStore } from '@reduxjs/toolkit';
import ClickeventReducer from "../features/modal/Clickevent";

export const store = configureStore({
  reducer: {
    ClickeventReducer,
  },
});
