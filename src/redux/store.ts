import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import gameReducer from "./user/gameSlice";

export const store = configureStore({
  reducer: { user: userReducer,
    game: gameReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
