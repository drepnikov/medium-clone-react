import { HttpRequestInterface } from "src/shared/services/http/types/httpRequest.interface";
import { HttpResponseInterface } from "src/shared/services/http/types/httpResponse.interface";

/**
 * Из-за реализации метода setPersistenceHeader, HttpService обязан использоваться в качестве синглтона
 */

export class HttpService {
  private persistanceHeaders: { [key: string]: string } = {};

  private async request<R>({
    url,
    data,
    headers,
    method,
  }: HttpRequestInterface): Promise<HttpResponseInterface<R>> {
    let headersToSend = { ...headers, "content-type": "application/json" };

    if (this.persistanceHeaders) {
      headersToSend = { ...headersToSend, ...this.persistanceHeaders };
    }

    const fetched = await fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: headersToSend,
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

  async post<R>(url: string, data?: any) {
    return this.request<R>({ url, data, method: "POST" });
  }

  async get<R>(url: string) {
    return this.request<R>({ url, method: "GET" });
  }

  setPersistenceHeader(header: string, headerValue: string) {
    this.persistanceHeaders[header] = headerValue;
  }
}

export const httpService = new HttpService();
