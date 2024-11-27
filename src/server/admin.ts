/* eslint-disable @typescript-eslint/no-empty-object-type */
// @typescript-eslint/no-explicit-any
import { AxiosError } from "axios";
import { instance, next } from "./base";

export const login = async (body: Pick<{email: string, password: string}, "email" | "password">) => {
    const { data } = await instance()
      .post(`/main/login/`, body)
      .catch((e: AxiosError<{ message: string }, {}>) => next(e));
    return data.data
  };
export const signUp = async (body: Pick<IAdmin, "email" | "password">) => {
    const { data,  } = await instance()
      .post(`/main/onboarding/`, body)
      .catch((e: AxiosError<{ message: string }, {}>) => next(e));
    return data.data
  };
export const otp = async (body: Pick<IAdmin, "email" | "otp">) => {
    const { data,  } = await instance()
      .post(`/main/verify_email/`, body)
      .catch((e: AxiosError<{ message: string, }, {}>) => next(e));
    return data.data
  };