/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import cookies from "react-cookies";
// import { decrytData, encryptData } from "../helper";
// import { addDays } from "date-fns";

export const instance = (
//   baseURL = process.env.NEXT_PUBLIC_BACKEND_URL,
  baseURL = 'https://payfixy-website-5.onrender.com'
  
) => {
  const token = getToken();
  return axios.create({
    baseURL,
    timeout: 1500000,
    headers: {
      "Content-Type": "application/json",
      // withCredentials: true,
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });
};

export const getToken = () => cookies.load("access");

export const next = (e: AxiosError<{ message: string }>) => {
    console.log(e, "next")
    console.log(e?.message, "next message")
  throw new Error(
    e.response?.data ? e.response.data.message : "Something went wrong"
  );
};
