/* eslint-disable @typescript-eslint/no-empty-object-type */
// @typescript-eslint/no-explicit-any
import { AxiosError } from "axios";
import { instance, next } from "../base";

export const kycStart = async (body: Pick<{
  merchant: string | number
}, "merchant">) => {
  const { data } = await instance()
    .post(`/kyc/start_kyc/`, body)
    .catch((e: AxiosError<{ message: string }, {}>) => next(e));
  return data
};

export const kycApi = async (body: Pick<{
  business_name: string,
  industry: string,
  phone_number: string,
  business_address: string,
  business_location: string,
  expected_transaction_volume: string,
  business_description: string
}, "business_name" | "industry">) => {
  const { data } = await instance()
    .post(`/kyc/business-details/`, body)
    .catch((e: AxiosError<{ message: string }, {}>) => next(e));
  return data
};
// export const kycDocument = async (body: Pick<{
//   merchant: string | number
//   cac_reg_number: string | number
//   cac_document: string // the should be a pdf document
//   memorandum_and_article_association: string // the should be a pdf document
// }, "merchant" | "cac_reg_number">) => {
//   const { data } = await instance()
//     .post(`/kyc/business-documents/`, body)
//     .catch((e: AxiosError<{ message: string }, {}>) => next(e));
//   return data
// };

export const kycDocument = async (formData: FormData) => {
  const { data } = await instance()
    .post("/kyc/business-documents/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  return data;
};