/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
// import SelectReact from "@/components/Select";
import { countryCodes } from "@/data/countryCode";
import Checkbox from "@/components/Checkbox";
import InputField from "@/components/Input";
import Button from "@/components/Button";
import SelectInput from "@/components/Select";
import { useMutation } from "react-query";
import { signUp } from "@/server/admin";
// import Image from "next/image";
import { toast } from "react-toastify";

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
    { value: "not_for_profit", label: "None Profit" },
];

const formattedCountryCodes = countryCodes.map((item) => ({
    value: item.codeAbbr,
    label: `${item.flag} ${item.country} (${item.codeAbbr})`
}));

const page = () => {
    const router = useRouter();
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [activeTab, setActiveTab] = useState<string>("one");
    const refS = useRef<HTMLInputElement>(null);
    const ref = useRef<HTMLInputElement>(null);

    // / Define mutation using React Query
    const mutation = useMutation(signUp, {
      retry: false,
      onSuccess: (data) => {
        // Handle successful login
        toast.success(data?.message ||  "Created successfully!");
        console.log("successful:", data);
        if (data) {
          
        }
        // router.push("/verify-email"); 
      },
      onError: (error) => {
        // Handle errors (e.g., invalid credentials)
        console.log( error, ' error')
        console.log( error, ' error test')
        // @ts-ignore
        toast.error(error?.message ||  "Failed!");

        // @ts-ignore
        formik.setErrors({ api: error?.message });
      },
    });

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
                mutation.mutate(values, {onSuccess: (data) => {
                    console.log(data, 'onSuccess data')
                    if (data?.status_code) {
                        router.push("/verify-email"); 
                    }
                    localStorage.setItem("email", values.email);
                  }})
                  setSubmitting(false); 
            } catch (error) {
                // @ts-ignore
                setErrors({ api: `An error occurred. Please try again later. ${error?.message}` });
            } finally {
                setSubmitting(false); // Ensure that the submitting state is always set back to false
            }
        },
    });

    return (
        <div className='flex items-start flex-1 h-screen'>

            <div className='flex flex-col items-center justify-between flex-1 h-full w-full overflow-y-scroll'>
                <div className="flex items-center justify-center min-h-screen w-full max-w-[23rem] mx-auto">
                    <div className=" w-full max-w-[23rem] mx-auto">
                        <div className='text-center relative flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
                            <img
                                loading="lazy"
                                src="/auth-payfix.svg" className="mb-20" alt="payfixy" />
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
                                {tabs.map((tab: { name: string }, idx: number) => {
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

                                    <div className="mb-4">
                                        <label htmlFor="business_type" className="block text-sm font-medium text-gray-700">Business Type</label>
                                        <SelectInput
                                            name="business_type"
                                            value={formik.values.business_type}
                                            setValue={(value) => formik.setFieldValue("business_type", value)}
                                            options={optionBizTypes}
                                            placeholder="Select a business type"
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.business_type && formik.errors.business_type}
                                        />

                                    </div>
                                    <div className="mb-4">
                                        <SelectInput
                                        label="Country"
                                            name="country" // Formik field name for country
                                            value={formik.values.country} // Current country value from Formik
                                            setValue={(value) => formik.setFieldValue("country", value)} // Update value in Formik
                                            options={formattedCountryCodes} // Use formatted country codes as options
                                            placeholder="Select a country"
                                            onBlur={formik.handleBlur} // Pass Formik's onBlur
                                            error={formik.touched.country && formik.errors.country} // Validation error
                                        />

                                    </div>


                                    <div className="neue my-2">
                                        {formik.values.business_type && <div onClick={() => refS.current?.click()} className={`${formik.values.business_type == 'for_profit' ? "!border !border-[#A51D21] bg-[#FDF4F4] " : ""} neue flex items-center cursor-pointer pl-4 border border-[#D9DDE3] hover:border-red-600 rounded-lg my-3`}>
                                            <label htmlFor="bordered-radio-1" className="w-full py-2 mx-4 text-sm font-medium text-gray-900 cursor-pointer">
                                                <div className="flex items-center justify-between text-[#003E51]">
                                                    <div>
                                                        <div className="w-full text-sm font-semibold">For Profit business (FPB)</div>
                                                        <div className="w-full text-[10px] font-normal">For sole traders, startups, small to medium businesses and enterprises.</div>
                                                    </div>


                                                </div>
                                            </label>
                                            <input ref={refS} type="radio" value={"for_profit"} checked={formik.values.business_type == "for_profit"} onChange={() => formik.setFieldValue("business_type", "for_profit")} className="cursor-pointer  w-4 h-4 border-[#D9DDE3] mr-5" />
                                        </div>}

                                        {formik.values.business_type && <div onClick={() => ref.current?.click()} className={`${formik.values.business_type == 'not_for_profit' ? "!border !border-[#A51D21] bg-[#FDF4F4]" : ""} neue flex items-center cursor-pointer pl-4 border border-[#D9DDE3] hover:border-red-600 rounded-lg my-3`}>
                                            <label htmlFor="bordered-radio-2" className="w-full py-2 mx-4 text-sm font-medium text-gray-900 cursor-pointer">
                                                <div className="flex items-center justify-between text-[#003E51]">
                                                    <div>
                                                        <div className="w-full text-sm font-semibold">Not-For-Profit business (NFPB)</div>
                                                        <div className="w-full text-[10px] font-normal">For NGOs, i.e Non profit organizations, church, crowd funding, etc.</div>
                                                    </div>
                                                </div>
                                            </label>
                                            <input {...{ ref }} type="radio" required value={"not_for_profit"} checked={formik.values.business_type === "not_for_profit"} onChange={() => formik.setFieldValue("business_type", "not_for_profit")} className="cursor-pointer w-4 h-4 border-[#D9DDE3] mr-5" />
                                        </div>}
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
                                        error={formik.touched.business_name && formik.errors.business_name}
                                    />

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
                                        error={formik.touched.first_name && formik.errors.first_name}
                                    />

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
                                        error={formik.touched.last_name && formik.errors.last_name}
                                    />

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
                                        error={formik.touched.email && formik.errors.email}
                                    />

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
                                        error={formik.touched.password && formik.errors.password}
                                    />

                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            label="I acknowledge that I have read and do hereby accept the terms and conditions in the Payfixy's Terms of Use and Privacy Policy."
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                        />
                                    </div>


                                    <Button type="submit"
                                        disabled={mutation.isLoading}
                                        isLoading={mutation.isLoading}>
                                        {mutation.isLoading ? "Creating Account..." : "Create an Account"}
                                    </Button>
                                </>}





                            <div className="flex items-center justify-center text-xs text-[#2A2A29] leading-[16px] font-medium mt-4">Already have an account? <Link href="/login" className="text-[#A51D21]"> Sign in</Link> </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex items-center flex-1 h-screen overflow-hidden bg-[#A51D21]'>
                <img

                    src="/login.svg" alt="" className="h-" />
            </div>
        </div>
    )
}

export default page