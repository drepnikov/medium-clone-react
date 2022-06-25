import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "src/features/auth/store/reducer";
import { feedReducer } from "src/shared/components/feed/store/reducer";

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
