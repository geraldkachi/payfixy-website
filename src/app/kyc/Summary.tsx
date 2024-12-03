"use client"

import { kycApi } from '@/server/kyc/kyc';
import useAppStore from '@/utils/appStore';
import { useFormik } from 'formik';
import React from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const Summary = () => {
  const { count, increment } = useAppStore();
  const noOfSteps = 5
  // const arrayOfSteps = [...Array(noOfSteps)];
  const completedSteps = count;
  const handleStepClick = (index: number) => {
    useAppStore.setState({ count: index })
  };


  const mutation = useMutation(kycApi, {
    retry: false,
    onSuccess: (data) => {
      increment()
      toast.success(data?.message ||  "Business Detail Created successfully!");
      console.log("successful:", data);
    },
    onError: (error: any) => {
        toast.error(error?.message || "Failed to Create Business Detail.");

      console.log( error, ' error')
      // @ts-ignore
      formik.setErrors({ api: error.response?.data?.message });
    },
  });

  const formik = useFormik({
    initialValues: {
        business_name: "",
        industry: '',
        phone_number: '',
        business_address: '',
        business_location: '',
        expected_transaction_volume: "",
        business_description: ""
    },
    validationSchema: Yup.object({
        business_name: Yup.string()
            .required("Business name is required"),
        industry: Yup.string()
            .required("Industry category is required"),
        phone_number: Yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
            .required("Phone number is required"),
        business_address: Yup.string()
            .required("Business address is required"),
        business_location: Yup.string()
            .required("Business location is required"),
            expected_transaction_volume: Yup.string()
            .required("Expected transaction volume is required"),
        business_description: Yup.string()
            .min(10, "Description must be at least 10 characters")
            .max(300, "Description must not exceed 300 characters")
            .required("Business description is required"),
    }),

    onSubmit: async (values, { setSubmitting, setErrors }) => {
        try {
            console.log(" values", values);
            mutation.mutate(values, {onSuccess: (data) => {
              console.log(data, 'onSuccess data')
            }})
            setSubmitting(false); // Stop form submission loading
    
          } catch (error) {
            // @ts-ignore
            setErrors({ api: `${error}. Please try again later.` });
          } finally {
            setSubmitting(false);
          }
    },
});


  return (
    <div>
      <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Summary</h1>
      <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Review details provided</p>
      {/* stepper */}
      <div className="text-[#94A0B4] flex flex-col items-start justify-start my-3">
        <div className="stepper-div flex items-center my-3">

          {Array(noOfSteps)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`h-1 w-10 rounded-sm mx-1 ${index + 1 <= count ? "bg-[#A73636]" : "bg-gray-300"
                  } cursor-pointer`}
                onClick={() => handleStepClick(index)}
              />
            ))}
        </div>
        <p className="stepper-count text-[#94A0B4] text-xs">
          Step <span className={`completed-count text-[#272848]`}>{completedSteps}</span> of {noOfSteps}
        </p>
      </div>

      <div className="grid md:grid-cols-6 gap-4">
        <div className="md:col-span-3">
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-1">

          </form>
        </div>
      </div>
    </div>
  )
}

export default Summary