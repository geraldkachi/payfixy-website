import React from 'react'
import InputField from '@/components/Input'
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectInput from '@/components/Select';
import Button from '@/components/Button';
import useAppStore from '@/utils/appStore';
import { optionBankList } from '@/utils/data';

const BankAccount = () => {
    const { count,increment, decrement } = useAppStore();
    const noOfSteps = 5
    const completedSteps = count + 1;
  
    const handleStepClick = (index: number) => {
      useAppStore.setState({ count: index })
    };
    const formik = useFormik({
        initialValues: {
            account_name: "",
            bank_name: '',
            phone_number: '',
            business_address: '',
            business_location: '',
            expected_transaction: "",
            business_description: ""
        },
        validationSchema: Yup.object({
            account_name: Yup.string()
                .required("Business name is required"),
            bank_name: Yup.string()
                .required("Bank name is required"),
        }),

        onSubmit: async (values, { setSubmitting, setErrors }) => {

            try {
                const response = await fetch('https://payfixy-website-5.onrender.com/kyc/business-details/', {
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
    <h1 className="text-2xl font-semibold leading-[32px] tracking-[-1]">Bank account</h1>
    <p className="mt-2 text-xs leading-4 tracking-[-.5px]">Enter business bank account</p>
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
        <div className="md:col-span-3">
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-1">
                <SelectInput
                    //  id="bank_name"
                    name="bank_name"
                    label="Bank name"
                    options={optionBankList}
                    value={formik.values.bank_name}
                    setValue={(value) => formik.setFieldValue("bank_name", value)}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bank_name && formik.errors.bank_name}
                />
                <InputField
                    id="account_name"
                    name="account_name"
                    label="Account number"
                    placeholder="Enter account number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.account_name}
                    error={formik.touched.account_name && formik.errors.account_name}
                />
                
                {/* {formik.errors.api && <div className="text-red-500">{formik.errors.api}</div>} */}
                <div className="col-span-full w-full flex items-center md:justify-between">
                <Button 
                    type="button" 
                    className='md:w-max px-10 md:px-14 rounded bg-transparent hover:bg-transparent  border border-[#2A2A29] !text-[#2A2A29]'
                    onClick={() => decrement()}>
                      Back
                    </Button>
                    <Button type="submit" className='md:w-max px-10 md:px-14' onClick={() => increment()}>
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

export default BankAccount