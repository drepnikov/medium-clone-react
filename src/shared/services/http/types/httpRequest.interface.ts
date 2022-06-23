export interface HttpRequestInterface {
  url: string;
  method: string;
  data?: any;
  headers?: {
    [key: string]: string;
  };
}
