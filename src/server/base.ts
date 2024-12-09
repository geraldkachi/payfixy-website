/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// // @ts-ignore
// import jwt_decode from "jwt-decode";

// // Utility function to decode and get the expiry time of the token
// const getTokenExpiryTime = (token: string): number | null => {
//   try {
//     const decoded: any = jwt_decode(token);
//     return decoded?.exp ? decoded.exp * 1000 : null; // exp is in seconds, convert to milliseconds
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return null;
//   }
// };

// // Function to check if the token is expired or will expire in less than 10 minutes
// const isTokenExpiringSoon = (token: string): boolean => {
//   const expiryTime = getTokenExpiryTime(token);
//   if (!expiryTime) return false;
//   const currentTime = Date.now();
//   return (expiryTime - currentTime) <= 10 * 60 * 1000; // 10 minutes in milliseconds
// };

// export const getToken = (): string | null => {
//   return typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
// };
// export const instance = (
//   baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://payfixy-website-5.onrender.com/"  
// ) => {
//   const token = getToken();
//   const base =  axios.create({
//     baseURL,
//     timeout: 1500000,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && {
//         Authorization: `Bearer ${token}`,
//       }),
//     },
//   });

//   // Request interceptor
//   base.interceptors.request.use(
//     // @ts-ignore//+
//     (config: AxiosRequestConfig) => {
//       const token = getToken();//+
//       if (token && isTokenExpiringSoon(token)) {
//         // If the token is expiring soon, refresh it before making the request//+
//         return refreshAuthToken().then((newToken) => {
//           if (config.headers) {//+
//             config.headers.Authorization = `Bearer ${newToken}`;//+
//           }//+
//           return config;//+
//         });//+
//       }//+
//       // If no token or token is fine, continue with the request//+
//       if (token && config.headers) {//+
//         config.headers.Authorization = `Bearer ${token}`;
//       }//+
//       return config;//+
//     },//+
//     (error) => Promise.reject(error)
//   );//


//   // Response interceptor
//   base.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     async (error: AxiosError) => {
//       const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
//       if (
//         error.response?.status === 401 && // Check for expired token
//         !originalRequest._retry
//       ) {
//         originalRequest._retry = true;
//         const refreshToken = localStorage.getItem("refresh_token");
//         console.log(refreshToken, "refreshToken")
//         if (refreshToken) {
//           try {
//             // Attempt to refresh token
//             const { data } = await axios.post(`${baseURL}/refresh`, {
//               refresh_token: refreshToken,
//             });

//             console.log(data, 'refresh token')

//             // Store new access token
//             localStorage.setItem("authToken", data.access_token);

//             // Update original request with new token
//             originalRequest.headers = {
//               ...originalRequest.headers,
//               Authorization: `Bearer ${data.access_token}`,
//             };

//             // Retry the original request
//             return base(originalRequest);
//           } catch (refreshError) {
//             console.error("Refresh token failed:", refreshError);
//             // Handle token refresh failure (e.g., log out user)
//             localStorage.removeItem("authToken");
//             localStorage.removeItem("refresh_token");
//             return Promise.reject(refreshError);
//           }
//         }
//       }

//       // For other errors, reject promise with the error
//       return Promise.reject(error);
//     }
//   );

//   return base;
// };

// // export const getToken = () => cookies.load("access");

// // Refresh token function
// const refreshAuthToken = async (): Promise<string> => {
//   const refreshToken = localStorage.getItem("refresh_token");
//   if (!refreshToken) throw new Error("No refresh token available");

//   try {
//     const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/refresh`, {
//       refresh_token: refreshToken,
//     });

//     const { data } = response;
//     localStorage.setItem("authToken", data.access_token); // Store the new token
//     return data.access_token;
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//     throw new Error("Failed to refresh token");
//   }
// };

//   console.log('const', getToken())

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



import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// @ts-ignore
import jwt_decode from "jwt-decode";

// Utility function to decode and get the expiry time of the token
const getTokenExpiryTime = (token: string): number | null => {
  try {
    const decoded: any = jwt_decode(token);
    return decoded?.exp ? decoded.exp * 1000 : null; // exp is in seconds, convert to milliseconds
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// Function to check if the token is expiring soon
const isTokenExpiringSoon = (token: string): boolean => {
  const expiryTime = getTokenExpiryTime(token);
  if (!expiryTime) return false;
  const currentTime = Date.now();
  return (expiryTime - currentTime) <= 10 * 60 * 1000; // 10 minutes in milliseconds
};

export const getToken = (): string | null => {
  return typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
};

// Function to refresh the auth token
const refreshAuthToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("refresh_token");
  if (!refreshToken) throw new Error("No refresh token available");

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/refresh`, {
      refresh_token: refreshToken,
    });

    const { data } = response;
    localStorage.setItem("authToken", data.access_token); // Store the new token
    return data.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw new Error("Failed to refresh token");
  }
};

// Function to handle token refresh at regular intervals
const startTokenRefreshTimer = () => {
  const token = getToken();
  if (token) {
    const expiryTime = getTokenExpiryTime(token);
    if (expiryTime) {
      const timeLeft = expiryTime - Date.now();
      const refreshTime = timeLeft - 30 * 1000; // Refresh 30 seconds before expiry (9:30 mins)

      if (refreshTime > 0) {
        setTimeout(() => {
          refreshAuthToken().then(() => {
            startTokenRefreshTimer(); // Restart the timer after refreshing token
          }).catch((error) => {
            console.error("Failed to refresh token:", error);
          });
        }, refreshTime);
      }
    }
  }
};

// Start the token refresh process once the token is set
export const instance = (
  baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://payfixy-website-5.onrender.com/"
) => {
  const token = getToken();
  const base = axios.create({
    baseURL,
    timeout: 1500000,
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });

  // Request interceptor to handle token expiration check and refresh
  base.interceptors.request.use(
    // @ts-ignore//+
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && isTokenExpiringSoon(token)) {
        // Refresh the token if it's expiring soon
        return refreshAuthToken().then((newToken) => {
          if (config.headers) {
            config.headers.Authorization = `Bearer ${newToken}`;
          }
          return config;
        });
      }
      // Otherwise, continue with the current token
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor to handle 401 errors (token expired)
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
            // Attempt to refresh the token
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
      return Promise.reject(error);
    }
  );

  // Start the token refresh timer as soon as the instance is created
  startTokenRefreshTimer();

  return base;
};
