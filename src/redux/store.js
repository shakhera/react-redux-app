import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/Post";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // provide the advantage like caching,inboluation, bolling.....rtk query
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

//required for refetch
setupListeners(store.dispatch);
