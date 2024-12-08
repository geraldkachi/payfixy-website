/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectInput from '@/components/Select';
import Button from '@/components/Button';
import useAppStore from '@/utils/appStore';
import { optionGovtIdTypes, optionLocations, optionRoles, optionShareOwnership } from '@/utils/data';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { kycOwner } from '@/server/kyc/kyc';
import { getAdminDetails } from '@/utils/shared';
const BusinessOwner = () => {
    const user = getAdminDetails()
    const { count, increment, decrement } = useAppStore();
    const noOfSteps = 5
    const completedSteps = count;

    const handleStepClick = (index: number) => {
        useAppStore.setState({ count: index })
        increment()
    };

        const savedData = JSON.parse(localStorage.getItem("businessOwnerForm") || "{}");
        // localStorage.removeItem("businessOwnerForm");
        console.log(savedData, 'savedData business details')

    const mutation = useMutation(kycOwner, {
        retry: false,
        onSuccess: (data) => {
            increment()
            toast.success(data?.message || "Business Owner Created successfully!");
            console.log("successful:", data);
        },
        // @ts-ignore
        onError: (error: any) => {
            toast.error(error?.message || "Failed to Create Business Owner.");

            console.log(error, ' error')
            // @ts-ignore
            formik.setErrors({ api: error.response?.data?.message });
        },
    });

    // const formatDateToISO = (date) => {
    //     if (!date) return ""; 
    //     return `${date}T00:00:00`;
    // };

    const formik = useFormik({
        initialValues: {
            kyc: user?.uuid ,
            role: savedData?.role || "",
            share_ownership: savedData?.share_ownership || '',
            // fullname: savedData?.fullname || '',
            first_name: savedData?.first_name || '',
            last_name: savedData?.last_name || '',
            date_of_birth: savedData?.date_of_birth || '',
            email_address: savedData?.email_address || '',
            phone_number: savedData?.phone_number || '',
            bvn: savedData?.bvn || '',
            location: savedData?.location || '',
            home_address: savedData?.home_address || '',
            government_id: savedData?.government_id || '',
            government_id_number: savedData?.government_id_number || '',
            // upload_selected_id: savedData?.upload_selected_id || '',
        },
        validationSchema: Yup.object({
            role: Yup.string().required("Role is required"),
            share_ownership: Yup.string().required("Share ownership is required"),
            // fullname: Yup.string().required("Full name is required"),
            first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
            date_of_birth: Yup.date()
                .required("Date of birth is required")
                .typeError("Invalid date format"),
            email_address: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
            phone_number: Yup.string().required("Phone number is required"),
            bvn: Yup.string()
                .required("Bank verification number is required")
                .min(11, "BVN must be 11 digits")
                .max(11, "BVN must be 11 digits"),
            location: Yup.string().required("Location is required"),
            home_address: Yup.string().required("Home address is required"),
            government_id: Yup.string().required("Government ID is required"),
            government_id_number: Yup.string().required("Government ID number is required"),
            // upload_selected_id: Yup.string().required("Upload of selected ID is required"),
        }),
        

        onSubmit: async (values, { setSubmitting, setErrors }) => {
            const dateOfBirth = new Date(values.date_of_birth);
            const formattedValues = {
                ...values,
                date_of_birth: dateOfBirth.toISOString(),
            };
            localStorage.setItem('businessOwnerForm', JSON.stringify(formattedValues)); // Save data to localStorage
            console.log(formattedValues, 'business owner with updated date format');
            // console.log(values, 'business owner')
            try {
                // @ts-ignore
                mutation.mutate(values, {
                    onSuccess: (data) => {
                        increment()
                        console.log(data, 'onSuccess data')
                        localStorage.setItem('businessOwnerForm', JSON.stringify(formattedValues)); // Save data to localStorage
                    }
                })
                
            } catch (error) {
                // @ts-ignore
                setErrors({ api: `An error occurred. Please try again later. ${error}` });
                localStorage.setItem('businessOwnerForm', JSON.stringify(formattedValues)); // Save data to localStorage
            } finally {
                setSubmitting(false); // Ensure that the submitting state is always set back to false
            }
        },
    });

     // Load form data from localStorage on mount
    //  useEffect(() => {
    //     const savedData = localStorage.getItem('businessOwnerForm');
    //     if (savedData) {
    //         formik.setValues(JSON.parse(savedData));
    //     }
    // }, []);

    // // Save form values to localStorage whenever they change
    // useEffect(() => {
    //     localStorage.setItem('businessOwnerForm', JSON.stringify(formik.values));
    // }, [formik.values]);



    return (
        <div>
            <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Business Owner</h1>
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
                    Step <span className={`completed-count text-[#272848]`}>{completedSteps}</span> of {noOfSteps}
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
                            // @ts-ignore
                            error={formik.touched.role && formik.errors.role}
                        />
                        <SelectInput
                            name="share_ownership"
                            label="Share Ownership"
                            options={optionShareOwnership}
                            value={formik.values.share_ownership}
                            setValue={(value) => formik.setFieldValue("share_ownership", value)}
                            onBlur={formik.handleBlur}
                            // @ts-ignore
                            error={formik.touched.share_ownership && formik.errors.share_ownership}
                        />
                        {/* <InputField
                            id="fullname"
                            name="fullname"
                            label="Full Name"
                            placeholder="Enter full name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                            // @ts-ignore
                            error={formik.touched.fullname && formik.errors.fullname}
                        /> */}
                        <InputField
                            id="first_name"
                            name="first_name"
                            label="First Name"
                            placeholder="Enter first name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                             // @ts-ignore
                            error={formik.touched.first_name && formik.errors.first_name}
                        />
                        <InputField
                            id="last_name"
                            name="last_name"
                            label="Last Name"
                            placeholder="Enter last name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                             // @ts-ignore
                            error={formik.touched.last_name && formik.errors.last_name}
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
                            // @ts-ignore
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
                            // @ts-ignore
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
                            // @ts-ignore
                            error={formik.touched.phone_number && formik.errors.phone_number}
                        />
                        <InputField
                            id="bvn"
                            name="bvn"
                            label="Bank Verification Number"
                            placeholder="Enter BVN"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.bvn}
                            // @ts-ignore
                            error={formik.touched.bvn && formik.errors.bvn}
                        />
                        <SelectInput
                            name="location"
                            label="Location"
                            options={optionLocations}
                            value={formik.values.location}
                            setValue={(value) => formik.setFieldValue("location", value)}
                            onBlur={formik.handleBlur}
                            // @ts-ignore
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
                            // @ts-ignore
                            error={formik.touched.home_address && formik.errors.home_address}
                        />
                        <SelectInput
                            name="government_id"
                            label="Government ID Type"
                            options={optionGovtIdTypes}
                            value={formik.values.government_id}
                            setValue={(value) => formik.setFieldValue("government_id", value)}
                            onBlur={formik.handleBlur}
                            // @ts-ignore
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
                            // @ts-ignore
                            error={formik.touched.government_id_number && formik.errors.government_id_number}
                        />
                        {/* <InputField
                            id="upload_selected_id"
                            name="upload_selected_id"
                            label="Upload Selected ID"
                            type="file"
                            onChange={(e) => formik.setFieldValue("upload_selected_id", e.currentTarget.files?.[0])}
                            // @ts-ignore
                            error={formik.touched.upload_selected_id && formik.errors.upload_selected_id}
                        /> */}

                        {/* {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>} */}
                        <div className="col-span-full w-full flex items-center md:justify-between">
                            <div className='hidden md:block'></div>
                            <Button
                                type="button"
                                className='md:w-max px-10 md:px-14 rounded bg-transparent hover:bg-transparent border border-[#2A2A29] !text-[#2A2A29]'
                                onClick={() => decrement()}>
                                Back
                            </Button>


                            <Button type="submit" isLoading={mutation.isLoading} disabled={mutation.isLoading} className='md:w-max px-10 md:px-14'
                                // onClick={() => increment()}
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

export default BusinessOwner
