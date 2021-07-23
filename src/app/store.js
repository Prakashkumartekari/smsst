import { configureStore } from '@reduxjs/toolkit';
import ClickeventReducer from "../features/modal/Clickevent";
import authReducer from "../features/serverReducer/authreducer";
import storageReducer from "../features/serverReducer/storageReducer";

export const store = configureStore({
  reducer:{ ClickeventReducer, authReducer, storageReducer},
});
