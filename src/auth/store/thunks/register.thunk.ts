import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterRequestParamsInterface } from "src/auth/types/registerRequestParams.interface";
import { authService } from "src/auth/services/auth.service";
import { persistanceService } from "src/shared/services/persistance.service";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (request: RegisterRequestParamsInterface, { rejectWithValue }) => {
    const { result, error } = await authService.register(request);

    if (result) {
      persistanceService.set("accessToken", result.user.token);

      return result;
    }

    return rejectWithValue((error && error.msg) || "Неизвестная ошибка");
  }
);
