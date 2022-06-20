import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "src/features/auth/services/auth.service";
import { persistanceService } from "src/shared/services/persistance.service";

export const getCurrentUserThunk = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    const token = persistanceService.get("accessToken");

    if (!token) return rejectWithValue({});

    authService.setSession(token);

    const { result, error } = await authService.getCurrentUser();

    if (!result) {
      return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
    }

    return result;
  }
);
