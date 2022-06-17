import { CurrentUserInterface } from "src/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
