import { AuthStateInterface } from "src/auth/types/authState.interface";
import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "src/auth/store/thunks/register.thunk";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";
import { loginThunk } from "src/auth/store/thunks/login.thunk";

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
    builder
      // register
      .addCase(registerThunk.pending, (state) => {
        state.isSubmitting = true;
        state.validationErrors = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.currentUser = action.payload?.user || null;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isSubmitting = false;
        state.validationErrors = action.payload as BackendErrorsInterface;
      })

      // login
      .addCase(loginThunk.pending, (state) => {
        state.isSubmitting = true;
        state.validationErrors = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.currentUser = action.payload?.user || null;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isSubmitting = false;
        state.validationErrors = action.payload as BackendErrorsInterface;
      });
  },
});

export const authReducer = authSlice.reducer;
