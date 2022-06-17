import { useAppSelector } from "src/shared/store/hooks/store.hook";

export const useIsSubmittingSelector = () =>
  useAppSelector((state) => state.auth.isSubmitting);

export const useValidationErrorsSelector = () =>
  useAppSelector((state) => state.auth.validationErrors);

export const useIsLoggedInSelector = () =>
  useAppSelector((state) => state.auth.isLoggedIn);
