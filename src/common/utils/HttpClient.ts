/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { API_ROOT } from '../config'
import { auth } from '../auth/auth.helper'

export const api = axios.create({
  baseURL: API_ROOT,

  headers: {
    'Content-Type': `application/json`,
  },
})

addInterceptorsToAnApi({
  axiosInstance: api,
})

function addInterceptorsToAnApi({
  axiosInstance,
}: {
  axiosInstance: AxiosInstance,
}) {
  axiosInstance.interceptors.request.use(attachAuthTokenInterceptor)
  axiosInstance.interceptors.response.use(null, axiosResponseErrorInterceptor)
}

function attachAuthTokenInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers && auth.getToken()) {
    config.headers.Authorization = `Bearer ${auth.getToken()}`
  }

  return config
}

// shorten version of the interceptor from Best By
function axiosResponseErrorInterceptor(error: any) {
  const {
    response: {
      // @ts-ignore
      status,
    } = {},
  } = error

  if (status === 401) {
    auth.removeToken()
    window.location.reload()
  }

  return Promise.reject(error)
}
