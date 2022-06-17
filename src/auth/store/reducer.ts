import { AuthStateInterface } from "src/auth/types/authState.interface";
import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "src/auth/store/thunks/register.thunk";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  validationErrors: null,
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state) => {
      state.isSubmitting = true;
      state.validationErrors = null;
    });

    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.isSubmitting = false;
      state.currentUser = action.payload?.user || null;
      state.isLoggedIn = true;
    });

    builder.addCase(registerThunk.rejected, (state, action) => {
      state.isSubmitting = false;
      state.validationErrors = action.payload as BackendErrorsInterface;
    });
  },
});

export const authReducer = authSlice.reducer;
