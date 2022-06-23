import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

export interface HttpResponseInterface<R> {
  result?: R;
  error?: { status: number; msg?: BackendErrorsInterface };
}
