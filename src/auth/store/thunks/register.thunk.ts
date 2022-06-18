import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "src/auth/services/auth.service";
import { persistanceService } from "src/shared/services/persistance.service";
import { RegisterRequestInterface } from "src/auth/types/registerRequest.interface";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (request: RegisterRequestInterface, { rejectWithValue }) => {
    const { result, error } = await authService.register(request);

    if (result) {
      persistanceService.set("accessToken", result.user.token);

      return result;
    }

    return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
  }
);