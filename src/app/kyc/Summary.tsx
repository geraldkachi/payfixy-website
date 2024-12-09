"use client"

import Button from '@/components/Button';
import InputField from '@/components/Input';
// import { kycApi } from '@/server/kyc/kyc';
import useAppStore from '@/utils/appStore';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
// import { useMutation } from 'react-query';
// import { toast } from 'react-toastify';
// import * as Yup from "yup";

const Summary = () => {
  const router = useRouter();
  const { count } = useAppStore();
  const noOfSteps = 5
  // const arrayOfSteps = [...Array(noOfSteps)];
  const completedSteps = count;
  const handleStepClick = (index: number) => {
    useAppStore.setState({ count: index })
  };

  const savedData = typeof window !== "undefined" && JSON.parse(localStorage.getItem("businessDetails") || "{}");
  const savedDataDoc = typeof window !== "undefined" && JSON.parse(localStorage.getItem("business_document_form") || "{}");

  // Initialize formik with the retrieved data
  const formik = useFormik({
    initialValues: {
      business_name: savedData.business_name || "",
      industry: savedData.industry || "",
      phone_number: savedData.phone_number || "",
      business_address: savedData.business_address || "",
      business_location: savedData.business_location || "",
      expected_transaction_volume: savedData.expected_transaction_volume || "",
      business_description: savedData.business_description || "",
      // Business Document Details
      kyc: savedDataDoc.kyc || "",
      cac_reg_number: savedDataDoc.cac_reg_number || "",
      cac_document: savedDataDoc.cac_document || null,
      memorandum_and_article_association: savedDataDoc.memorandum_and_article_association || null,

      //Business Owner 
        // kyc: savedData?.uuid ,
        role: savedData?.role || "",
        share_ownership: savedData?.share_ownership || '',
        // fullname: savedData?.fullname || '',
        first_name: savedData?.first_name || '',
        last_name: savedData?.last_name || '',
        date_of_birth: savedData?.date_of_birth || '',
        email_address: savedData?.email_address || '',
        // phone_number: savedData?.phone_number || '',
        bvn: savedData?.bvn || '',
        location: savedData?.location || '',
        home_address: savedData?.home_address || '',
        government_id: savedData?.government_id || '',
        government_id_number: savedData?.government_id_number || '',
        // upload_selected_id: savedData?.upload_selected_id || '',
    },
    onSubmit: (values) => {
      console.log("Submitted Summary Data:", values);
      alert("Summary submitted successfully!");
    },
  });


//   const mutation = useMutation(kycApi, {
//     retry: false,
//     onSuccess: (data) => {
//       increment()
//       toast.success(data?.message ||  "Business Detail Created successfully!");
//       console.log("successful:", data);
//     },
//     onError: (error: any) => {
//         toast.error(error?.message || "Failed to Create Business Detail.");

//       console.log( error, ' error')
//       // @ts-ignore
//       formik.setErrors({ api: error.response?.data?.message });
//     },
//   });

//   const formik = useFormik({
//     initialValues: {
//         business_name: "",
//         industry: '',
//         phone_number: '',
//         business_address: '',
//         business_location: '',
//         expected_transaction_volume: "",
//         business_description: ""
//     },
//     validationSchema: Yup.object({
//         business_name: Yup.string()
//             .required("Business name is required"),
//         industry: Yup.string()
//             .required("Industry category is required"),
//         phone_number: Yup.string()
//             .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
//             .required("Phone number is required"),
//         business_address: Yup.string()
//             .required("Business address is required"),
//         business_location: Yup.string()
//             .required("Business location is required"),
//             expected_transaction_volume: Yup.string()
//             .required("Expected transaction volume is required"),
//         business_description: Yup.string()
//             .min(10, "Description must be at least 10 characters")
//             .max(300, "Description must not exceed 300 characters")
//             .required("Business description is required"),
//     }),

//     onSubmit: async (values, { setSubmitting, setErrors }) => {
//         try {
//             console.log(" values", values);
//             mutation.mutate(values, {onSuccess: (data) => {
//               console.log(data, 'onSuccess data')
//             }})
//             setSubmitting(false); // Stop form submission loading
    
//           } catch (error) {
//             // @ts-ignore
//             setErrors({ api: `${error}. Please try again later.` });
//           } finally {
//             setSubmitting(false);
//           }
//     },
// });


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
        <div className="col-span-full">
        <div className="text-xl"> Business Details</div>
        </div>
      <div className="md:col-span-4">
      {/* <div className="grid md:grid-cols-6 gap-4">
        <div className="md:col-span-3"> */}
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pre-filled Inputs */}
        <InputField
          id="business_name"
          name="business_name"
          label="Trading/Business Name"
          placeholder="Enter business name"
          value={formik.values.business_name}
          // disabled // Make input read-only
        />
        <InputField
          id="industry"
          name="industry"
          label="Industry/Category"
          placeholder="Enter industry"
          value={formik.values.industry}
          // disabled
        />
        <InputField
          id="phone_number"
          name="phone_number"
          label="Phone Number"
          placeholder="Enter phone number"
          value={formik.values.phone_number}
          // disabled
        />
        <InputField
          id="business_address"
          name="business_address"
          label="Business Address"
          placeholder="Enter business address"
          value={formik.values.business_address}
          // disabled
        />
        <InputField
          id="business_location"
          name="business_location"
          label="Business Location"
          placeholder="Enter business location"
          value={formik.values.business_location}
          // disabled
        />
        <InputField
          id="expected_transaction_volume"
          name="expected_transaction_volume"
          label="Expected Transaction Volume (Monthly)"
          placeholder="Enter expected transaction volume"
          value={formik.values.expected_transaction_volume}
          // disabled
        />
        <InputField
          id="business_description"
          name="business_description"
          label="Business Description"
          placeholder="Enter business description"
          value={formik.values.business_description}
          // disabled
          multiline
          style={{ height: "120px" }}
        />

        <div className="col-span-full">
          <div className="text-xl"> Business Documents</div>
        </div>
        <div className="col-span-full">
          <InputField
            id="cac_reg_number"
            name="cac_reg_number"
            label="CAC Registration Number"
            placeholder="Enter CAC registration number"
            type="text"
            value={formik.values.cac_reg_number}
            onChange={formik.handleChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="col-span-full">
          <div className="text-xl"> Business Owner</div>
        </div>
        

        <InputField
        id="role"
        name="role"
        label="Role"
        placeholder="Enter role"
        value={formik.values.role}
        onChange={formik.handleChange}
      />
      <InputField
        id="share_ownership"
        name="share_ownership"
        label="Share Ownership (%)"
        placeholder="Enter share ownership"
        value={formik.values.share_ownership}
        onChange={formik.handleChange}
      />
      <InputField
        id="first_name"
        name="first_name"
        label="First Name"
        placeholder="Enter first name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
      />
      <InputField
        id="last_name"
        name="last_name"
        label="Last Name"
        placeholder="Enter last name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
      />
      <InputField
        id="email_address"
        name="email_address"
        label="Email Address"
        placeholder="Enter email address"
        value={formik.values.email_address}
        onChange={formik.handleChange}
      />

      <div className="flex justify-between col-span-full w-max">
        <div></div>
        <Button type="button" onClick={() => {
          router.push('/dashboard')
        }} className="px-10 md:px-14">
          Confirm & Submit
        </Button>
      </div>
      </form>
      </div>
{/* </div>
        </div> */}
        <div className="md:col-span-2"></div>

      </div>
    </div>
  )
}

export default Summary