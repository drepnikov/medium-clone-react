import { createAsyncThunk } from "@reduxjs/toolkit";
import { feedService } from "src/shared/components/feed/services/feed.service";

export const getFeedThunk = createAsyncThunk(
  "feed/getFeed",
  async (request: { url: string }, { rejectWithValue }) => {
    const { result, error } = await feedService.getFeed(request.url);

    if (!result) {
      return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
    }

    return result;
  }
);
