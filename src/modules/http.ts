/* eslint-disable no-use-before-define */
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'

const RETRY_COUNT: number = 3
const DEFAULT_DELAY: number = 1000

class HttpClient {
	private readonly axiosInstance: AxiosInstance

	constructor (baseURL: string) {
		this.axiosInstance = axios.create({
			baseURL,
			headers: {
				'Content-Type': 'application/json'
			}
		})

		// Adding Retry options to the queries
		axiosRetry(this.axiosInstance, {
			retries: RETRY_COUNT,
			retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000)
		})

		// Interceptors can be added for global request/response handling
		this.axiosInstance.interceptors.response.use(
			this.handleSuccessResponse,
			this.handleErrorResponse
		)
	}

	private readonly handleSuccessResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
		await new Promise(resolve => setTimeout(resolve, DEFAULT_DELAY))
		return response
	}

	private readonly handleErrorResponse = (error: any): any => {
		if (error.response) {
			// The request was made and the server responded with a status code
			const status = error.response.status

			if (status >= 500 && status < 600) {
				return Promise.reject(error)
			} else {
				return Promise.reject(error)
			}
		}
	}

	public async get<T>(url: string, config?: AxiosRequestConfig) {
		return await this.axiosInstance.get<T>(url, config)
	}

	public async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
		return await this.axiosInstance.post<T>(url, data, config)
	}

	public async put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
		return await this.axiosInstance.put<T>(url, data, config)
	}

	public async delete<T>(url: string, config?: AxiosRequestConfig) {
		return await this.axiosInstance.delete<T>(url, config)
	}
}

export default HttpClient
