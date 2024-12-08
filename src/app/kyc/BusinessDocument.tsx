/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useEffect } from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from '@/components/Button';
import useAppStore from '@/utils/appStore';
import { kycDocument } from '@/server/kyc/kyc';
import { toast } from "react-toastify";
import { useMutation } from 'react-query';
import { getAdminDetails } from '@/utils/shared';

const LOCAL_STORAGE_KEY = "business_document_form";

const BusinessDocument = () => {
    const user = getAdminDetails()
    console.log( user?.uuid, ' user?.uuid')
    const { count,increment, decrement } = useAppStore();
    const noOfSteps = 5
    const completedSteps = count;
  
    const handleStepClick = (index: number) => {
      useAppStore.setState({ count: index })
      increment()
    };
    const mutation = useMutation(kycDocument, {
        retry: false,
        onSuccess: (data) => {
          increment()
          toast.success(data?.message ||  "Business Document Created successfully!");
          console.log("successful:", data);
        },
        // @ts-ignore
        onError: (error: any) => {
            toast.error(error?.message || "Failed to Business Document.");

          console.log( error, ' error')
          // @ts-ignore
          formik.setErrors({ api: error.response?.data?.message });
        },
      });

       // Load initial values from localStorage
      //  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      //   console.log(savedData, "Business Document Storage")

  const loadInitialValues = () => {
    const savedData = typeof window !== "undefined" ? localStorage.getItem(LOCAL_STORAGE_KEY) : "{}";
    return savedData
      ? JSON?.parse(savedData)
      : {
          kyc: user?.uuid,
          cac_reg_number: "",
          cac_document: null,
          memorandum_and_article_association: null,
        };
  };
    
    const formik = useFormik({
        initialValues: loadInitialValues(),
        // initialValues: {
        //     kyc: user?.uuid,
        //     cac_reg_number: "",
        //     // proof_of_address: '',
        //     cac_document: null as File | null,
        //     memorandum_and_article_association: null as File | null,
        // },
        validationSchema: Yup.object({
          cac_reg_number: Yup.string().required("CAC registration number is required"),
          cac_document: Yup.mixed().required("CAC Document is required").test("fileType", "Only PDF files are allowed", (value) =>
            // @ts-ignore
                value ? value.type === "application/pdf" : false
            ),
          memorandum_and_article_association: Yup.mixed()
            .required("Memorandum & Article of Association is required")
            .test("fileType", "Only PDF files are allowed", (value) =>
              // @ts-ignore
                value ? value.type === "application/pdf" : false
            ),
        }),

        onSubmit: async (values, { setSubmitting, setErrors }) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
            
            console.log(values, "values Business Document ")
            const formData = new FormData();
            formData.append("kyc", values.kyc.toString());
            formData.append("cac_reg_number", values.cac_reg_number);
            formData.append("cac_document", values.cac_document as File);
            formData.append(
              "memorandum_and_article_association",
              values.memorandum_and_article_association as File
            );
            // console.log(formData, "formData Business Document")
            
            try {
              mutation.mutate(formData, {onSuccess: (data) => {
                console.log(data, 'onSuccess data')
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
              },
              onError: (error) => {
                toast.error('Failed to Create Business Documnet.');
                console.log('Error:', error);
                console.log(values, "values error");
                // @ts-ignore
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
                    formik.setErrors({ api: error.response?.data?.message });
                }
            })
            } catch (error) {
                // @ts-ignore
                setErrors({ api: `An error occurred. Please try again later. ${error}` });
            } finally {
                setSubmitting(false); // Ensure that the submitting state is always set back to false
            }
        },
    });

    // Save form values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <div>
    <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Business Document</h1>
    <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Select account type</p>
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
     {/* @ts-ignore */}
    {/* {formik.errors.api && (
        <div className="text-red-500 bg-red-100 p-3 rounded-md text-center">
             Error: {formik.errors.api}  
             </div>
    )} */}


    <div className="grid md:grid-cols-6 gap-4 mt-4">
        <div className="md:col-span-4">
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputField
                    id="cac_reg_number"
                    name="cac_reg_number"
                    label="CAC Reg. Number"
                    placeholder="Enter CAC number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cac_reg_number}
                //    @ts-ignore
                    error={formik.touched.cac_reg_number && formik.errors.cac_reg_number}
                />
                {/* <InputField
                     id="proof_of_address"
                    name="proof_of_address"
                    label="Proof of address"
                    placeholder='Select'
                    value={formik.values.proof_of_address}
                    onBlur={formik.handleBlur}
                //    @ts-ignore
                    error={formik.touched.proof_of_address && formik.errors.proof_of_address}
                /> */}
                <InputField
                    id="cac_document"
                    name="cac_document"
                    label="CAC Document"
                    placeholder="Select File"
                    type='file'
                    // onChange={formik.handleChange}
                    // @ts-ignore
                    onChange={(e) =>formik.setFieldValue("cac_document", e.currentTarget.files?.[0] || null)}
                    onBlur={formik.handleBlur}
                    // value={formik.values.cac_document}
                //    @ts-ignore
                    error={formik.touched.cac_document && formik.errors.cac_document}
                />
                <InputField
                    id="memorandum_and_article_association"
                    name="memorandum_and_article_association"
                    label="Memorandum & Article of Association"
                    placeholder="Select"
                    type='file'
                    // onChange={formik.handleChange}
                    onChange={(e) =>
                      // @ts-ignore
                        formik.setFieldValue("memorandum_and_article_association", e.currentTarget?.files?.[0] || null)
                      }
                    onBlur={formik.handleBlur}
                    // value={formik.values.memorandum_and_article_association}
                //    @ts-ignore
                    error={formik.touched.memorandum_and_article_association && formik.errors.memorandum_and_article_association}
                />
               
                {/* {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>} */}
                <div className="col-span-full w-full flex items-center md:justify-between">
                    <Button 
                    type="button" 
                    className='md:w-max px-10 md:px-14 rounded bg-transparent hover:bg-transparent border border-[#2A2A29] !text-[#2A2A29]'
                    onClick={() => decrement()}>
                      Back
                    </Button>

                    <Button type="submit" className='md:w-max px-10 md:px-14 rounded'
                        disabled={mutation.isLoading}
                        isLoading={mutation.isLoading}
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

export default BusinessDocument