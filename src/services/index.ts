import { HEADERS, HEADERS_MULTIPLE_PART } from '@/constants/api';
import { request } from '@umijs/max';

const api = {
  get: <T = any, D = any>({
    endpoint,
    params,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'GET',
      headers: headers || HEADERS,
      params: {
        ...params,
      },
      ...(options || {}),
    });
  },

  post: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'POST',
      headers: headers || HEADERS,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  put: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'PUT',
      headers: headers || HEADERS,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  patch: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'PATCH',
      headers: headers || HEADERS,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  delete: <T = any, D = any>({
    endpoint,
    params,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'DELETE',
      headers: headers || HEADERS,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  postFormData: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'POST',
      headers: headers || HEADERS_MULTIPLE_PART,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  putFormData: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'PUT',
      headers: headers || HEADERS_MULTIPLE_PART,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },

  patchFormData: <T = any, D = any>({
    endpoint,
    params,
    body,
    options,
    headers,
  }: {
    endpoint: string;
    params?: D;
    body?: any;
    options?: { [key: string]: any };
    headers?: any;
  }) => {
    return request<T>(endpoint, {
      method: 'PATCH',
      headers: headers || HEADERS_MULTIPLE_PART,
      data: body,
      params: {
        ...params,
      },
      withCredentials: true,
      ...(options || {}),
    });
  },
};

export { api };
