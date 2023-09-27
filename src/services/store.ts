import { configureStore } from "@reduxjs/toolkit";
import { baseApiQuery } from "./baseApiQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    [baseApiQuery.reducerPath]: baseApiQuery.reducer,
    // topology: topologySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApiQuery.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export * from "./topology";
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
