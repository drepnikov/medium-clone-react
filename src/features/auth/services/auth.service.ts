import { httpService } from "src/shared/services/http/http.service";
import { config } from "src/environment/config";
import { RegisterRequestInterface } from "src/features/auth/types/registerRequest.interface";
import { AuthResponseInterface } from "src/features/auth/types/authResponse.interface";
import { LoginRequestInterface } from "src/features/auth/types/loginRequest.interface";
import { persistanceService } from "src/shared/services/persistance/persistance.service";

export class AuthService {
  api = config.apiUrl;

  register(request: RegisterRequestInterface) {
    const url = config.apiUrl + "/users";

    return httpService.post<AuthResponseInterface>(url, request);
  }

  login(request: LoginRequestInterface) {
    const url = config.apiUrl + "/users/login";

    return httpService.post<AuthResponseInterface>(url, request);
  }

  getCurrentUser() {
    const url = config.apiUrl + "/user";

    return httpService.get<AuthResponseInterface>(url);
  }

  setSession(token: string) {
    persistanceService.set("accessToken", token);

    httpService.setPersistenceHeader("Authorization", `Token ${token}`);
  }
}

export const authService = new AuthService();
