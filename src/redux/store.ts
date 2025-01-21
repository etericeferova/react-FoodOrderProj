import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./slices/mealsSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
