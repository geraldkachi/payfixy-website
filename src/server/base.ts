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
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });
};

// export const getToken = () => cookies.load("access");
export const getToken = () =>
typeof window !== "undefined"
  ? window.localStorage.getItem("access")
  : null;;


  console.log('const', getToken)

export const next = (e: AxiosError<{ message: string }>) => {
    console.log(e, "next")
    console.log(e?.message, "next message")
    console.log(e?.response?.data?.error , "next message")
  throw new Error(
    // e.response ? e?.message : e?.response?.data?.error 
    e.response?.data ? e.response.data.message : "Something went wrong"
  );
};
