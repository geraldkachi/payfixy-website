import { AxiosError } from "axios";
import { instance, next } from "./base";

export const login = async (body: Pick<{email: string, password: string}, "email" | "password">) => {
    const { data } = await instance()
      .post(`/main/login/`, body)
      // @ts-ignore
      .catch((e: AxiosError<{ message: string }, any>) => next(e));
    return data
  };
export const signUp = async (body: Pick<IAdmin, "email" | "password">) => {
    const { data } = await instance()
      .post(`/main/onboarding/`, body)
      // @ts-ignore
      .catch((e: AxiosError<{ message: string }, any>) => next(e));
    return data
  };