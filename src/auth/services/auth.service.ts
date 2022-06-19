import { httpService } from "src/shared/services/http.service";
import { environment } from "src/config/environment";
import { RegisterRequestInterface } from "src/auth/types/registerRequest.interface";
import { AuthResponseInterface } from "src/auth/types/authResponse.interface";
import { LoginRequestInterface } from "src/auth/types/loginRequest.interface";
import { persistanceService } from "src/shared/services/persistance.service";

export class AuthService {
  api = environment.apiUrl;

  register(request: RegisterRequestInterface) {
    const url = environment.apiUrl + "/users";

    return httpService.post<AuthResponseInterface>(url, request);
  }

  login(request: LoginRequestInterface) {
    const url = environment.apiUrl + "/users/login";

    return httpService.post<AuthResponseInterface>(url, request);
  }

  getCurrentUser() {
    const url = environment.apiUrl + "/user";

    return httpService.get<AuthResponseInterface>(url);
  }

  setSession(token: string) {
    persistanceService.set("accessToken", token);

    httpService.setPersistenceHeader("Authorization", `Token ${token}`);
  }
}

export const authService = new AuthService();
