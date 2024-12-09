/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */

"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import { useMutation } from "react-query";
import { otp } from "@/server/admin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const VerifyEmail = () => {
  const router = useRouter();
  const emailSetter = typeof window !== "undefined" ? localStorage.getItem("email") : '';
  const domain = emailSetter?.split("@")[1];

  const mutation = useMutation(otp, {
    onSuccess: (data) => {
      toast.success(data?.message ||  "OTP verified successfully!");
      localStorage.removeItem("email")
      router.push("/login"); 
    },
    // @ts-ignore
    onError: (error: any) => {
      toast.error(error?.message || "Failed to verify OTP.");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: emailSetter,
      otp: ["", "", "", "", "", ""], 
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      otp: Yup.array()
        .of(
          Yup.string()
            .matches(/^\d$/, "Must be a digit")
            .required("Required")
        )
        .min(6, "Complete all 6 fields")
        .max(6, "Only 6 fields allowed"),
    }),
    onSubmit: (values) => {
      if (!emailSetter) {
        toast.error("Email is missing.");
        return;
      }
      const otp = values.otp.join(""); 
      const payload = {
        email: emailSetter,
        otp,
      };
      mutation.mutate(payload);
    },
  });

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits
    const newOtp = [...formik.values.otp];
    newOtp[index] = value;
    formik.setFieldValue("otp", newOtp);

    // Move to the next field automatically
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !formik.values.otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...formik.values.otp];
    pasteData.forEach((char, idx) => {
      if (/^\d$/.test(char) && idx < 6) {
        newOtp[idx] = char;
      }
    });
    formik.setFieldValue("otp", newOtp);
  };
// console.log(emailSetter, 'OTP Verification')
  return (
    <div className='flex items-start flex-1 h-screen'>

      <div className='flex flex-col items-center justify-between flex-1 h-full w-full'>
        <div className="flex items-center justify-center min-h-screen w-full max-w-[23rem] mx-auto">
          <div className=" w-full max-w-[23rem] mx-auto">
            <div className='text-center relative flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
              <img src="/auth-payfix.svg" className="mb-20" alt="payfixy" />
            </div>
            <h1 className="text-2xl leading-[32px] font-bold text-center text-gray-800 mb-2">OTP Verification</h1>
            <h1 className="text-xs leading-[16px] font-bold text-center text-gray-800 mb-6">Enter the 6-digit verification code sent to your email</h1>
           {/* @ts-ignore */}
            {formik.errors.api && (
              <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
             {/* @ts-ignore */}
                {formik.errors.api}
              </div>
            )}
            <div className="text-center">
             {emailSetter ? `${emailSetter.substring(0, 3)}*****@${domain}` : null}
            </div>
           
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
              <div className="flex gap-2 mb-4">
                {formik.values.otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={value}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-12 h-12 text-center border ${formik.errors.otp && formik.touched.otp
                        ? "border-[#2A2A29]"
                        : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#A51D21] text-lg`}
                  />
                ))}
              </div>
              {formik.errors.otp && formik.touched.otp && (
                <p className="text-red-500 text-sm mb-4">{formik.errors.otp}</p>
              )}
           
              <Button type="submit" isLoading={mutation.isLoading} disabled={mutation.isLoading}>
                {mutation.isLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className='hidden md:flex items-center flex-1 h-screen overflow-hidden'>
        <img src="/login.svg" alt="" className="h-" />
      </div>
    </div>
  );
};

export default VerifyEmail
;

