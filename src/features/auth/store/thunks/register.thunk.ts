import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "src/features/auth/services/auth.service";
import { RegisterRequestInterface } from "src/features/auth/types/registerRequest.interface";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (request: RegisterRequestInterface, { rejectWithValue }) => {
    const { result, error } = await authService.register(request);

    if (!result) {
      return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
    }

    authService.setSession(result.user.token);

    return result;
  }
);
