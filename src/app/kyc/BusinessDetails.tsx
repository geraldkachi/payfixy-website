"use client"
import React from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectInput from '@/components/Select';
import Button from '@/components/Button';
import Textarea from '@/components/TextArea';

const optionIndustryTypes: Option[] = [
    { value: "retail", label: "Retail" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
];

const optionLocations: Option[] = [
    { value: "new_york", label: "New York" },
    { value: "san_francisco", label: "San Francisco" },
    { value: "los_angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
];

const optionTransactionVolumes: Option[] = [
    { value: "less_than_1000", label: "Less than $1,000" },
    { value: "1000_to_5000", label: "$1,000 - $5,000" },
    { value: "5000_to_10000", label: "$5,000 - $10,000" },
    { value: "more_than_10000", label: "More than $10,000" },
];


const BusinessDetails = () => {
    const formik = useFormik({
        initialValues: {
            trading_Business_name: "",
            industry_category: '',
            phone_number: '',
            business_address: '',
            business_location: '',
            expected_transaction: "",
            business_description: ""
        },
        validationSchema: Yup.object({
            trading_Business_name: Yup.string()
                .required("Business name is required"),
            industry_category: Yup.string()
                .required("Industry category is required"),
            phone_number: Yup.string()
                .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
                .required("Phone number is required"),
            business_address: Yup.string()
                .required("Business address is required"),
            business_location: Yup.string()
                .required("Business location is required"),
            expected_transaction: Yup.string()
                .required("Expected transaction volume is required"),
             business_description: Yup.string()
        .min(10, "Description must be at least 10 characters")
        .max(300, "Description must not exceed 300 characters")
        .required("Business description is required"),
        }),

        onSubmit: async (values, { setSubmitting, setErrors }) => {


            try {
                const response = await fetch('https://payfixy-website-5.onrender.com/main/onboarding/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Business details successful', data);
                    // router.push("/"); // Redirect on success
                } else {
                    const errorData = await response.json();
                    // @ts-ignore
                    setErrors({ api: errorData.message || 'Sign up failed' });
                }
            } catch (error) {
                // @ts-ignore
                setErrors({ api: `An error occurred. Please try again later. ${error}` });
            } finally {
                setSubmitting(false); // Ensure that the submitting state is always set back to false
            }
        },
    });
    return (
        <div>
            <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Business Details</h1>
            <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Select account type</p>


            <div className="grid md:grid-cols-6 gap-4">
                <div className="md:col-span-4">
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <InputField
                            id="trading_Business_name"
                            name="trading_Business_name"
                            label="Trading/Business Name"
                            placeholder="Enter business name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trading_Business_name}
                            error={formik.touched.trading_Business_name && formik.errors.trading_Business_name}
                        />
                       <SelectInput
                        //  id="industry_category"
                        name="industry_category"
                        label="Industry/Category"
                        options={optionIndustryTypes}
                        value={formik.values.industry_category}
                        setValue={(value) => formik.setFieldValue("industry_category", value)}
                        onBlur={formik.handleBlur}
                        error={formik.touched.industry_category && formik.errors.industry_category}
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
                            // id="expected_transaction"
                            name="expected_transaction"
                            label="Expected Transaction Volume (Monthly)"
                            options={optionTransactionVolumes}
                            value={formik.values.expected_transaction}
                            setValue={(value) => formik.setFieldValue("expected_transaction", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.expected_transaction && formik.errors.expected_transaction}
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
                        {/* {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>} */}
                        <div className="col-span-f items-end self-end">
                        <Button type="submit"
                                        disabled={formik.isSubmitting}
                                        isLoading={formik.isSubmitting}>
                                        {formik.isSubmitting ? "Save & Continue" : "Save & Continue"}
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