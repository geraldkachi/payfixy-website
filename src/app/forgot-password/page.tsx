"use client"
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const ForgotPassword = () => {
//   const formik = useFormik({
//     initialValues: {
//       otp: "",
//     },
//     validationSchema: Yup.object({
//       otp: Yup.string()
//         .required("OTP is required")
//         .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
//     }),
//     onSubmit: async (values) => {
//       console.log("Submitted OTP:", values.otp);
//       // Replace this with OTP verification logic
//       try {
//         // Example API call
//         const response = await fetch("/api/verify-otp", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ otp: values.otp }),
//         });

//         if (response.ok) {
//           alert("OTP verified successfully!");
//         } else {
//           alert("Invalid OTP. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error verifying OTP:", error);
//         alert("An error occurred. Please try again.");
//       }
//     },
//   });

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-full max-w-sm p-4 bg-white shadow-md rounded-md">
//         <h2 className="text-xl font-semibold text-center mb-4">Verify OTP</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//               Enter 6-digit OTP
//             </label>
//             <input
//               id="otp"
//               name="otp"
//               type="text"
//               value={formik.values.otp}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className={`mt-1 block w-full px-3 py-2 border ${
//                 formik.touched.otp && formik.errors.otp ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//             />
//             {formik.touched.otp && formik.errors.otp ? (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.otp}</div>
//             ) : null}
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      otp: ["", "", "", "", "", ""], // Array of 6 digits
    },
    validationSchema: Yup.object({
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
      const otp = values.otp.join("");
      console.log("Submitted OTP:", otp);
      alert(`OTP Submitted: ${otp}`);
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
            {formik.errors.api && (
              <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
                {formik.errors.api}
              </div>
            )}
           
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
           
              <Button type="submit" isLoading={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Submit"}
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

export default ForgotPassword;

