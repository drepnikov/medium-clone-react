import { AuthStateInterface } from "src/features/auth/types/authState.interface";
import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "src/features/auth/store/thunks/register.thunk";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";
import { loginThunk } from "src/features/auth/store/thunks/login.thunk";
import { getCurrentUserThunk } from "src/features/auth/store/thunks/getCurrentUser.thunk";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoggedIn: null,
  validationErrors: null,
  currentUser: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearBackendErrors(state) {
      state.validationErrors = null;
    },
  },
  extraReducers: (builder) => {
    builder
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

      // ---

      .addCase(loginThunk.pending, (state) => {
        state.isSubmitting = true;
        state.validationErrors = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.currentUser = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isSubmitting = false;
        state.validationErrors = action.payload as BackendErrorsInterface;
      })

      // ---

      .addCase(getCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.currentUser = action.payload.user;
      })
      .addCase(getCurrentUserThunk.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
      });
  },
});

export const { clearBackendErrors } = authSlice.actions;

export const authReducer = authSlice.reducer;
