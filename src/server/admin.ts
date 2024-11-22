import { AxiosError } from "axios";
import { instance, next } from "./base";

export const login = async (body: Pick<{email: string, password: string}, "email" | "password">) => {
    const { data } = await instance()
      .post(`/main/login/`, body)
      .catch((e: AxiosError<{ message: string }, any>) => next(e));
    return data
  };
export const signUp = async (body: Pick<{
    email: string,
     password: string
    first_name : string,
    last_name : string,
    country: string,
    business_type: string,
    business_name: string,
    
}, "email" | "password">) => {
    const { data } = await instance()
      .post(`/main/onboarding/`, body)
      .catch((e: AxiosError<{ message: string }, any>) => next(e));
    return data
  };