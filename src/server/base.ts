/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// export const getToken = 
// typeof window !== "undefined"
//   ? window.localStorage.getItem("authToken")
//   : null;;
// Retrieve token from localStorage
export const getToken = (): string | null => {
  return typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
};
export const instance = (
  baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://payfixy-website-5.onrender.com/"  
) => {
  const token = getToken();
  const base =  axios.create({
    baseURL,
    timeout: 1500000,
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });

  // Request interceptor
  base.interceptors.request.use(
    // @ts-ignore
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  base.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
      if (
        error.response?.status === 401 && // Check for expired token
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          try {
            // Attempt to refresh token
            const { data } = await axios.post(`${baseURL}/refresh`, {
              refresh_token: refreshToken,
            });

            // Store new access token
            localStorage.setItem("authToken", data.access_token);

            // Update original request with new token
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${data.access_token}`,
            };

            // Retry the original request
            return base(originalRequest);
          } catch (refreshError) {
            console.error("Refresh token failed:", refreshError);
            // Handle token refresh failure (e.g., log out user)
            localStorage.removeItem("authToken");
            localStorage.removeItem("refresh_token");
            return Promise.reject(refreshError);
          }
        }
      }

      // For other errors, reject promise with the error
      return Promise.reject(error);
    }
  );

  return base;
};

// export const getToken = () => cookies.load("access");


  console.log('const', getToken())

export const next = (e: AxiosError<{ message: string }>) => {
    console.log(e, "next")
    console.log(e, "next message")
    console.log(e?.response , "next message")
  throw new Error(
    // e.response ? e?.message : e?.response?.data?.error 
    // @ts-ignore
    e.response ? e?.response?.data?.error : "Something went wrong"
  );
};

