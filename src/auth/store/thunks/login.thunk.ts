import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "src/auth/services/auth.service";
import { LoginRequestInterface } from "src/auth/types/loginRequest.interface";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (request: LoginRequestInterface, { rejectWithValue }) => {
    const { result, error } = await authService.login(request);

    if (!result) {
      return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
    }

    authService.setSession(result.user.token);

    return result;
  }
);
