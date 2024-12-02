import React from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectInput from '@/components/Select';
import Button from '@/components/Button';
import useAppStore from '@/utils/appStore';
import { optionGovtIdTypes, optionLocations, optionRoles, optionShareOwnership } from '@/utils/data';
const BusinessOwner = () => {
    const { count,increment, decrement } = useAppStore();
    const noOfSteps = 5
    const completedSteps = count + 1;
  
    const handleStepClick = (index: number) => {
      useAppStore.setState({ count: index })
    };

    const formik = useFormik({
        initialValues: {
            role: "", // select
            share_ownership: '', // select
            fullname: '',
            date_of_birth: '',
            email_address: '',
            phone_number: '',
            bank_verification_number: '',
            location: '', // select
            home_address: "",
            government_id: '',
            government_id_number: "", // select
            upload_selected_id: ''
        },
        validationSchema: Yup.object({
            role: Yup.string().required("Role is required"),
            share_ownership: Yup.string().required("Share ownership is required"),
            fullname: Yup.string().required("Full name is required"),
            date_of_birth: Yup.date()
                .required("Date of birth is required")
                .typeError("Invalid date format"),
            email_address: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            phone_number: Yup.string().required("Phone number is required"),
            bank_verification_number: Yup.string()
                .required("Bank verification number is required")
                .min(11, "BVN must be 11 digits")
                .max(11, "BVN must be 11 digits"),
            location: Yup.string().required("Location is required"),
            home_address: Yup.string().required("Home address is required"),
            government_id: Yup.string().required("Government ID is required"),
            government_id_number: Yup.string().required("Government ID number is required"),
            upload_selected_id: Yup.string().required("Upload of selected ID is required"),
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
            <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Business owner</h1>
            <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Enter authorised business owner, director or shareholder</p>
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
          Step <span className={`completed-count text-[#272848] dark:text-[#ffffff]`}>{completedSteps}</span> of {noOfSteps}
        </p>
      </div>

            <div className="grid md:grid-cols-6 gap-4">
                <div className="md:col-span-4">
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <SelectInput
                            name="role"
                            label="Role"
                            options={optionRoles}
                            value={formik.values.role}
                            setValue={(value) => formik.setFieldValue("role", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.role && formik.errors.role}
                        />
                        <SelectInput
                            name="share_ownership"
                            label="Share Ownership"
                            options={optionShareOwnership}
                            value={formik.values.share_ownership}
                            setValue={(value) => formik.setFieldValue("share_ownership", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.share_ownership && formik.errors.share_ownership}
                        />
                        <InputField
                            id="fullname"
                            name="fullname"
                            label="Full Name"
                            placeholder="Enter full name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                            error={formik.touched.fullname && formik.errors.fullname}
                        />
                        <InputField
                            id="date_of_birth"
                            name="date_of_birth"
                            label="Date of Birth"
                            placeholder="YYYY-MM-DD"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date_of_birth}
                            error={formik.touched.date_of_birth && formik.errors.date_of_birth}
                        />
                        <InputField
                            id="email_address"
                            name="email_address"
                            label="Email Address"
                            placeholder="Enter email address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email_address}
                            error={formik.touched.email_address && formik.errors.email_address}
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
                            id="bank_verification_number"
                            name="bank_verification_number"
                            label="Bank Verification Number"
                            placeholder="Enter BVN"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.bank_verification_number}
                            error={formik.touched.bank_verification_number && formik.errors.bank_verification_number}
                        />
                        <SelectInput
                            name="location"
                            label="Location"
                            options={optionLocations}
                            value={formik.values.location}
                            setValue={(value) => formik.setFieldValue("location", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && formik.errors.location}
                        />
                        <InputField
                            id="home_address"
                            name="home_address"
                            label="Home Address"
                            placeholder="Enter home address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.home_address}
                            error={formik.touched.home_address && formik.errors.home_address}
                        />
                        <SelectInput
                            name="government_id"
                            label="Government ID Type"
                            options={optionGovtIdTypes}
                            value={formik.values.government_id}
                            setValue={(value) => formik.setFieldValue("government_id", value)}
                            onBlur={formik.handleBlur}
                            error={formik.touched.government_id && formik.errors.government_id}
                        />
                        <InputField
                            id="government_id_number"
                            name="government_id_number"
                            label="Government ID Number"
                            placeholder="Enter ID number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.government_id_number}
                            error={formik.touched.government_id_number && formik.errors.government_id_number}
                        />
                        <InputField
                            id="upload_selected_id"
                            name="upload_selected_id"
                            label="Upload Selected ID"
                            type="file"
                            onChange={(e) => formik.setFieldValue("upload_selected_id", e.currentTarget.files?.[0])}
                            error={formik.touched.upload_selected_id && formik.errors.upload_selected_id}
                        />

                        {/* {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>} */}
                        <div className="col-span-full w-full flex items-center md:justify-between">
                            <div className='hidden md:block'></div>
                            <Button
                                type="button"
                                className='md:w-max px-10 md:px-14 rounded bg-transparent hover:bg-transparent border border-[#2A2A29] !text-[#2A2A29]'
                                onClick={() => decrement()}>
                                Back
                            </Button>


                            <Button type="submit" className='md:w-max px-10 md:px-14'
                                onClick={() => increment()}
                            >
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

export default BusinessOwner