"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const tabs = [
        { name: "all", title: "All Businesses" },
        { name: "following", title: "Businesses You Follow" },
    ] as { name: any; title: string }[];

    const [activeTab, setActiveTab] = useState<"all" | "following">("all");


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            
            try {
                router.push('/dashboard')
                const response = await fetch("https://your-api-endpoint.com/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setErrors({ api: errorData.message || "Login failed" });
                    return;
                }

                const data = await response.json();
                console.log("Login successful", data);
                // Handle success (e.g., navigate to dashboard)
            } catch (error) {
                setErrors({ api: "An error occurred. Please try again later." });
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className='flex items-start flex-1 h-screen'>

            <div className='flex flex-col items-center justify-between flex-1 h-full w-full'>
                <div className="flex items-center justify-center min-h-screen w-full max-w-[23rem] mx-auto">
                    <div className=" w-full max-w-[23rem] mx-auto">
                        <div className='text-center relative flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
                            <img src="/auth-payfix.svg" className="mb-20" alt="payfixy" />
                        </div>
                        <h1 className="text-2xl leading-[32px] font-bold text-center text-gray-800 mb-2">Create account</h1>
                        <h1 className="text-xs leading-[16px] font-bold text-center text-gray-800 mb-6">Select account type</h1>
                        {formik.errors.api && (
                            <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
                                {formik.errors.api}
                            </div>
                        )}
                        <form onSubmit={formik.handleSubmit} className="space-y-4 p-3 w-full max-w-[23rem] mx-auto">

                            <div className="flex items-start h-full gap-0 px-0 md:mb-9 w-full whitespace-nowrap">
                                {tabs.map((tab, idx) => {

                                    return (
                                        <button
                                            key={idx}
                                            className={`w-full h-[2px] text-sm md:text-[15px] font-medium font-pp cursor-pointer leading-[24px] py-2 text-center border-b border-gray-203 outline-none ${tab.name === activeTab
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

                            {activeTab == "all" &&
                                <>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Country
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Business type
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="text"
                                            placeholder="Select"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.password && formik.errors.password && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className={`w-full py-2 text-white rounded-lg ${formik.isSubmitting
                                            ? "bg-red-500 cursor-not-allowed"
                                            : "bg-[#A51D21] hover:bg-red-400"
                                            }`}
                                    >
                                        {formik.isSubmitting ? "Continue..." : "Continue"}
                                    </button>

                                </>}
                               {activeTab !== 'all' && 
                               <>
                                     <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Trading/Business name
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            First name
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                                ? "border-red-500 focus:ring-red-500"
                                                : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {formik.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className={`w-full py-2 text-white rounded-lg ${formik.isSubmitting
                                            ? "bg-red-800 cursor-not-allowed"
                                            : "bg-[#A51D21] hover:bg-red-800"
                                            }`}
                                    >
                                        {formik.isSubmitting ? "Create an Account" : "Create an Account"}
                                    </button>
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