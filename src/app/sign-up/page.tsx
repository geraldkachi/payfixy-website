/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import SelectReact from "@/components/Select";
import { countryCodes } from "@/data/countryCode";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/Input";
import Button from "@/components/Button";
import Select, { StylesConfig } from "react-select";

interface Option {
    value: string;
    label: string;
}
const tabs = [
    { name: "one", title: "All Businesses" },
    { name: "two", title: "Businesses You Follow" },
] as { name: string; title: string }[];


const optionBizTypes: Option[] = [
    { value: "for_profit", label: "For Profit" },
    { value: "non_profit", label: "None Profit" },
];

const formattedCountryCodes = countryCodes.map((item) => ({
    value: item.codeAbbr,
    label: `${item.flag} ${item.country} (${item.codeAbbr})`
}));


const customStyles: StylesConfig<Option> = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#A51D21" : "#A51D21",
        boxShadow: state.isFocused ? "0 0 0 1px #A51D21" : "none",
        "&:hover": {
            borderColor: "#A51D21",
        },
        transition: "none",
        borderRadius: 4,
        padding: '0 20px',
        margin: 0,
        backgroundColor: '#ffffff',
        fontSize: 14,
        outline: 'none',
    }),
    menu: (base) => ({
        ...base,
        zIndex: 100,
    }),
};

const page = () => {
    const router = useRouter();
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [activeTab, setActiveTab] = useState<string>("one");

    // const tabOptionsBiz = tabs.map(tab => ({
    //     value: tab.name,
    //     label: tab.title,
    // }));

    const formik = useFormik({
        initialValues: {
            email: "",
            first_name: "",
            last_name: "",
            country: "",
            business_type: "",
            business_name: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            first_name: Yup.string()
                .min(2, "Must be at least 2 characters")
                .max(50, "Cannot exceed 50 characters")
                .required("First name is required"),
            last_name: Yup.string()
                .min(2, "Must be at least 2 characters")
                .max(50, "Cannot exceed 50 characters")
                .required("Last name is required"),
            country: Yup.string()
                .required("Country is required")
                .max(50, "Country name cannot exceed 50 characters"),
            business_type: Yup.string()
                .required("Business type is required")
                .max(100, "Business type cannot exceed 100 characters"),
            business_name: Yup.string()
                .required("Business name is required")
                .max(100, "Business name cannot exceed 100 characters"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            // termsAccepted: Yup.boolean().oneOf([true], "You must accept the terms").required("Terms acceptance is required"),
        }),

        onSubmit: async (values, { setSubmitting, setErrors }) => {
            console.log(values, "values submit");
        
            if (!termsAccepted) {
                // @ts-ignore
                setErrors({ api: "You must accept the Terms and Conditions." });
                setSubmitting(false);
                return;
            }
        
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
                    console.log('Signup successful', data);
                    router.push("/login"); // Redirect on success
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

    console.log(formik.values, 'values')

    return (
        <div className='flex items-start flex-1 h-screen'>

            <div className='flex flex-col items-center justify-between flex-1 h-full w-full overflow-y-scroll'>
                <div className="flex items-center justify-center min-h-screen w-full max-w-[23rem] mx-auto">
                    <div className=" w-full max-w-[23rem] mx-auto">
                        <div className='text-center relative flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
                            <img src="/auth-payfix.svg" className="mb-20" alt="payfixy" />
                        </div>
                        <h1 className="text-2xl leading-[32px] font-bold text-center text-gray-800 mb-2">Create account</h1>
                        <h1 className="text-xs leading-[16px] font-bold text-center text-gray-800 mb-6">Select account type</h1>
                        {/* @ts-ignore */}
                        {formik.errors.api && (
                            <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
                              {/* @ts-ignore */}
                                Error: {formik.errors.api}
                            </div>
                        )}
                        <form onSubmit={formik.handleSubmit} className="space-y-4 p-3 w-full max-w-[23rem] mx-auto overflow-y-scroll">

                            <div className="flex items-start h-full gap-0 px-0 md:mb-9 w-full whitespace-nowrap">
                                {tabs.map((tab:{ name: string}, idx: number) => {
                                    return (
                                        <button
                                            key={idx}
                                            className={`w-full h-[2px] text-sm md:text-[15px] font-medium font-pp cursor-pointer leading-[24px] py-2 text-center border-b-2 border-gray-203 outline-none ${tab.name === activeTab
                                                ? "!border-[#A73636] !text-[#A73636] leading-6"
                                                : "text-gray-103 !border-b !border-gray-200"
                                                }`}
                                                
                                            onClick={() => setActiveTab(tab.name)}
                                        >
                                            <span className="inset-0 z-0 bg-gradient-to- ">
                                                {/* {(tab.name)} */}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {activeTab == "one" &&
                                <>
                                    <div className="w-full">
                                        <label className=' mb-2'>Country</label>
                                        <Select
                                            id='country'
                                            options={formattedCountryCodes}
                                            name="country"
                                            value={formattedCountryCodes.find(option => option.value === formik.values.country) || null}
                                            // @ts-ignore
                                            onChange={(selectedOption) => formik.setFieldValue('country', selectedOption?.value || '')}
                                            onBlur={formik.handleBlur}
                                            styles={customStyles}
                                            placeholder="Country"
                                        // className="w-64"
                                        />
                                        {formik.touched.country && formik.errors.country ? (
                                            <div className="text-red-600 text-sm">{formik.errors.country}</div>
                                        ) : null}
                                    </div>

                                    <div className="w-full">
                                        <label className=' mb-2'>Business Type</label>
                                        <Select
                                            id="business_type"
                                            options={optionBizTypes}
                                            name="business_type"
                                            value={optionBizTypes.find(option => option.value === formik.values.business_type) || null}
                                            // @ts-ignore
                                            onChange={(selectedOption) => formik.setFieldValue('business_type', selectedOption?.value || '')}
                                            onBlur={formik.handleBlur}
                                            styles={customStyles}
                                            placeholder="Select a business type"
                                        />
                                        {formik.touched.business_type && formik.errors.business_type ? (
                                            <div className="text-red-600 text-sm">{formik.errors.business_type}</div>
                                        ) : null}
                                    </div>

                                    <Button
                                        type="button"
                                        // disabled={formik.isSubmitting}
                                        onClick={() => setActiveTab('two')}
                                        className={`w-full py-2 text-white rounded-lg bg-[#A51D21] hover:bg-red-600
                                            }`}
                                    >
                                        Continue
                                    </Button>
                                </>}


                            {activeTab !== 'one' &&
                                <>
                                    <InputField
                                        id="business_name"
                                        name="business_name"
                                        label="Trading/Business name"
                                        placeholder="Enter business name"
                                        type="text"
                                        required
                                        className={`${formik.touched.business_name && formik.errors.business_name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-red-500"
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.business_name}
                                    />
                                    {formik.touched.business_name && formik.errors.business_name && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.business_name}
                                        </div>
                                    )}

                                    <InputField
                                        id="first_name"
                                        name="first_name"
                                        label="First Name"
                                        placeholder="Enter your First Name"
                                        type="text"
                                        required
                                        className={`${formik.touched.first_name && formik.errors.first_name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-red-500"
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.first_name}
                                    />
                                    {formik.touched.first_name && formik.errors.first_name && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.first_name}
                                        </div>
                                    )}

                                    <InputField
                                        id="last_name"
                                        name="last_name"
                                        label="Last Name"
                                        placeholder="Enter your Last Name"
                                        type="text"
                                        required
                                        className={`${formik.touched.last_name && formik.errors.last_name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-red-500"
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.last_name}
                                    />
                                    {formik.touched.last_name && formik.errors.last_name && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.last_name}
                                        </div>
                                    )}

                                    <InputField
                                        id="email"
                                        name="email"
                                        label="Email address"
                                        placeholder="Enter your email"
                                        type="email"
                                        required
                                        className={`${formik.touched.email && formik.errors.email
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-red-500"
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.email}
                                        </div>
                                    )}

                                    <InputField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        required
                                        className={`${formik.touched.password && formik.errors.password
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.password}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            label="I acknowledge that I have read and do hereby accept the terms and conditions in the Payfixy's Terms of Use and Privacy Policy."
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                        />
                                    </div>


                                    <Button type="submit"
                                        disabled={formik.isSubmitting}
                                        isLoading={formik.isSubmitting}>
                                        {formik.isSubmitting ? "Creating Account..." : "Create an Account"}
                                    </Button>
                                </>}





                            <div className="flex items-center justify-center text-xs text-[#2A2A29] leading-[16px] font-medium mt-4">Already have an account? <Link href="/login" className="text-[#A51D21]"> Sign in</Link> </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex items-center flex-1 h-screen overflow-hidden'>
                <img src="/login.svg" alt="" className="h-" />
            </div>
        </div>
    )
}

export default page