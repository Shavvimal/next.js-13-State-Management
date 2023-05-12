// Global store to bring in Slices and API's
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { contractApi } from "./contractsAPI";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    contractApi: contractApi.reducer,
  },
  // Add the middleware for the API
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(contractApi.middleware);
  },
});

// React redux is typed but doesn't know schema for the store or the dispatcher
// Total state of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
