import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import dataReducer from './dataSlice';
export const store = configureStore({
  reducer: {
      user: userReducer,
      data: dataReducer,
  },
});

export default store; // run dev complaining about no default export