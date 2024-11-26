/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputField from "@/components/Input";
import Button from "@/components/Button";
// import Image from "next/image";



const Login = () => {
  const router = useRouter();
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
        // const response = await login({ ...values })
        // console.log(" response", response);

        const response = await fetch(
          "https://payfixy-website-5.onrender.com/main/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          // @ts-ignore
          setErrors({ api: errorData.message || "Login failed" });
          return;
        }

        const data = await response.json();

        // Save the token to localStorage
        const token = data.access_token; // Ensure the correct key is used based on API response
        localStorage.setItem("authToken", token);

        console.log("Login successful", data);

        // Navigate to the dashboard or other secure page
        router.push("/dashboard");

      } catch (error) {
        // @ts-ignore
        setErrors({ api: `${error}. Please try again later.` });
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
            <h1 className="text-2xl leading-[32px] font-bold text-center text-gray-800 mb-2">Login to account</h1>
            <h1 className="text-xs leading-[16px] font-bold text-center text-gray-800 mb-6">Enter login details</h1>
            {/* @ts-ignore */}
            {formik.errors.api && (
              <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
              {/* @ts-ignore */}
                {formik.errors.api}
              </div>
            )}
            {/* {formik.errors.password && (
              <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
                {formik.errors.password}
              </div>
            )} */}
            
            <form onSubmit={formik.handleSubmit} className="space-y-4 p-3 w-full max-w-[23rem] mx-auto">
             

            <InputField
                id="email"
                name="email"
                label="Email address"
                placeholder="Enter your email"
                type="email"
                required
                className={`${
                  formik.touched.email && formik.errors.email
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
                className={`${
                  formik.touched.password && formik.errors.password
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


              <Link href="/forgot-password" className="my-4 text-xs text-[#A51D21] leading-3 font-medium">Forgot password?</Link>
             
                <Button type="submit" isLoading={formik.isSubmitting}>
                     {formik.isSubmitting ? "Logging in..." : "Login"}
                </Button>

              <div className="flex items-center justify-center text-xs text-[#2A2A29] leading-[16px] font-medium mt-4">New to Payfixy?<Link href="/sign-up" className="text-[#A51D21]"> Sign up</Link> </div>
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

export default Login