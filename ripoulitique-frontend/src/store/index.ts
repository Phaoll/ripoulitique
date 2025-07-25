import { configureStore } from "@reduxjs/toolkit";

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create the store
export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});
