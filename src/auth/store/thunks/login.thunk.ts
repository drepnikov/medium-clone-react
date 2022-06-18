import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "src/auth/services/auth.service";
import { persistanceService } from "src/shared/services/persistance.service";
import { LoginRequestInterface } from "src/auth/types/loginRequest.interface";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (request: LoginRequestInterface, { rejectWithValue }) => {
    const { result, error } = await authService.login(request);

    if (result) {
      persistanceService.set("accessToken", result.user.token);

      return result;
    }

    return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
  }
);
