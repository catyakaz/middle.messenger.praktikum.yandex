import { queryStringify, RequestData } from './queryStringify';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: METHODS;
  data?: unknown
  headers?: Record<string, string>
  timeout?: number
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
  get = (url: string, options:OptionsWithoutMethod = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options: OptionsWithoutMethod  = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options: OptionsWithoutMethod  = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options: OptionsWithoutMethod  = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: Options) => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000,
    } = options;

    const query = method === METHODS.GET ? queryStringify(data as RequestData) : '';

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url + query);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, <string>value);
      });

      xhr.onload = () => {
        if (xhr.status >= 300) {
          reject(xhr);
        } else {
          resolve(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
