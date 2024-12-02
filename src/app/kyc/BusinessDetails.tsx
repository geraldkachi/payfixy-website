/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectInput from '@/components/Select';
import Button from '@/components/Button';
import useAppStore from '@/utils/appStore';
import { toast } from "react-toastify";
import { useMutation } from 'react-query';
import { kycApi } from '@/server/kyc/kyc';
import { optionIndustryTypes, optionLocations, optionTransactionVolumes } from '@/utils/data';


interface Option {
    value: string;
    label: string;
}
// const optionTransactionVolumes: Option[] = [
//     { value: "less_than_1000", label: "Less than $1,000" },
//     { value: "1000_to_5000", label: "$1,000 - $5,000" },
//     { value: "5000_to_10000", label: "$5,000 - $10,000" },
//     { value: "more_than_10000", label: "More than $10,000" },
// ];


const BusinessDetails = () => {
    const { count, increment } = useAppStore();
    const noOfSteps = 5
    // const arrayOfSteps = [...Array(noOfSteps)];
    const completedSteps = count + 1;
  
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
            <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Business Details</h1>
            <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Select account type</p>


                {/* stepper */}
            <div className="text-[#94A0B4] flex flex-col items-start justify-start my-3">
                <div className="stepper-div flex items-center my-3">

                {Array(noOfSteps)
                            .fill(0)
                            .map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 w-10 rounded-sm mx-1 ${
                                index + 1 <= count ? "bg-[#A73636]" : "bg-gray-300"
                                } cursor-pointer`}
                                onClick={() => handleStepClick(index)}
                            />
                            ))}
                </div>
                <p className="stepper-count text-[#94A0B4] text-xs">
                  Step <span className={`completed-count text-[#272848] dark:text-[#ffffff]`}>{completedSteps}</span> of {noOfSteps}
                </p>
              </div>


            <div className="grid md:grid-cols-6 gap-4">
                <div className="md:col-span-4">
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            id="business_name"
                            name="business_name"
                            label="Trading/Business Name"
                            placeholder="Enter business name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.business_name}
                            error={formik.touched.business_name && formik.errors.business_name}
                        />
                        <SelectInput
                            //  id="industry"
                            name="industry"
                            label="Industry/Category"
                            options={optionIndustryTypes}
                            value={formik.values.industry}
                            setValue={(value) => formik.setFieldValue("industry", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.industry && formik.errors.industry}
                        />
                        <InputField
                            id="phone_number"
                            name="phone_number"
                            label="Phone Number"
                            placeholder="Enter phone number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone_number}
                            error={formik.touched.phone_number && formik.errors.phone_number}
                        />
                        <InputField
                            id="business_address"
                            name="business_address"
                            label="Business Address"
                            placeholder="Enter business address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.business_address}
                            error={formik.touched.business_address && formik.errors.business_address}
                        />
                        <SelectInput
                            // id="business_location"
                            name="business_location"
                            label="Business Location"
                            options={optionLocations}
                            value={formik.values.business_location}
                            setValue={(value) => formik.setFieldValue("business_location", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.business_location && formik.errors.business_location}
                        />

                        <SelectInput
                            // id="expected_transaction_volume"
                            name="expected_transaction_volume"
                            label="Expected Transaction Volume (Monthly)"
                            options={optionTransactionVolumes}
                            value={formik.values.expected_transaction_volume}
                            setValue={(value) => formik.setFieldValue("expected_transaction_volume", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.expected_transaction_volume && formik.errors.expected_transaction_volume}
                        />

                        <div className="col-span-full">

                            <InputField
                                id="business_description"
                                name="business_description"
                                label="Business Description"
                                placeholder="Enter business description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.business_description}
                                error={
                                    formik.touched.business_description && formik.errors.business_description
                                }
                                multiline
                                className="input text pl-2 pr-3 py-2"
                                style={{ height: "120px" }}
                            />

                        </div>
                        {/* @ts-ignore */}
                        {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>}
                        <div className="col-span-full w-full flex items-center md:justify-between">
                            <div className='hidden md:block'></div>
                            <Button type="submit" className='md:w-max px-10 md:px-14'
                                disabled={mutation.isLoading}
                                isLoading={mutation.isLoading}
                                onClick={() => increment()}
                                >
                                {mutation.isLoading ? "Save & Continue" : "Save & Continue"}
                            </Button>

                        </div>
                    </form>
                </div>
                <div className="md:col-span-2"></div>
            </div>
        </div>
    )
}

export default BusinessDetails