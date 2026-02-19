import { type AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";

export class ApiClient {
  /**
   * GET request
   */
  static async get<TResponse = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await axiosInstance.get<TResponse>(url, config);
    return response.data;
  }

  /**
   * POST request
   */
  static async post<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await axiosInstance.post<TResponse>(url, data, config);
    return response.data;
  }

  /**
   * PUT request
   */
  static async put<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await axiosInstance.put<TResponse>(url, data, config);
    return response.data;
  }

  /**
   * PATCH request
   */
  static async patch<TResponse = unknown, TData = unknown>(
    url: string,
    data?: TData,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await axiosInstance.patch<TResponse>(url, data, config);
    return response.data;
  }

  /**
   * DELETE request
   */
  static async delete<TResponse = void>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await axiosInstance.delete<TResponse>(url, config);
    return response.data;
  }
}

// Convenience exports
export const api = {
  get: ApiClient.get,
  post: ApiClient.post,
  put: ApiClient.put,
  patch: ApiClient.patch,
  delete: ApiClient.delete,
};
