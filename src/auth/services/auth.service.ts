import { httpService } from "src/shared/services/http.service";
import { environment } from "src/config/environment";
import { RegisterRequestParamsInterface } from "src/auth/types/registerRequestParams.interface";
import { AuthResponseInterface } from "src/auth/types/authResponse.interface";

export class AuthService {
  api = environment.apiUrl;

  register(request: RegisterRequestParamsInterface) {
    const url = environment.apiUrl + "/users";

    return httpService.post<AuthResponseInterface>(url, request);
  }
}

export const authService = new AuthService();
