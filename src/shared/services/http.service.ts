import { BackendErrorsInterface } from "src/shared/types/backendErrors.interface";

export class HttpService {
  async post<R>(
    url: string,
    data?: any
  ): Promise<{
    result?: R;
    error?: { status: number; msg?: BackendErrorsInterface };
  }> {
    const fetched = await fetch(url, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });

    let body: any;

    try {
      body = await fetched.json();
    } catch (e) {}

    if (fetched.status === 200) {
      return { result: body };
    } else {
      return { error: { status: fetched.status, msg: body?.errors } };
    }
  }
}

export const httpService = new HttpService();
