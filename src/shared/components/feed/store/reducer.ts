import { createSlice } from "@reduxjs/toolkit";
import { FeedStateInterface } from "src/shared/components/feed/types/feedState.interface";
import { getFeedThunk } from "src/shared/components/feed/store/thunks/getFeed.thunk";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeedThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getFeedThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const feedReducer = feedSlice.reducer;
