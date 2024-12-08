/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useEffect, useState } from 'react'
import BusinessDetails from './BusinessDetails'
import useAppStore from '@/utils/appStore';
import BusinessDocument from './BusinessDocument';
import BankAccount from './BankAccount';
import BusinessOwner from './BusinessOwner';
import Summary from './Summary';
import StepperAlph from './StepperAlph';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { kycStart } from '@/server/kyc/kyc';
import { appLogout } from '@/utils/shared';

const Page: React.FC = () => {
  // const user = getAdminDetails()
  // console.log(user, 'user saved object')
  const [user, setUser] = useState<Partial<IAdmin>>({});


  function getAdminDetails(): Partial<IAdmin> {
    if (typeof window !== "undefined") {
      const adminDetails = localStorage.getItem("user-details");
      return adminDetails ? JSON.parse(adminDetails) : null;
    }
    return {} as Partial<IAdmin>;
  }
  
  const { count } = useAppStore();

   // Initialize user details safely
   useEffect(() => {
    if (typeof window !== "undefined") {
      const adminDetails = getAdminDetails();
      if (adminDetails) {
        setUser(adminDetails);
      }
    }
  }, []);
  
  const mutation = useMutation(kycStart, {
    retry: false,
    onSuccess: (data) => {
      toast.success(data?.message ||  "Start Kyc Process!");
      console.log("successful:", data);
    },
    // @ts-ignore
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong. or Expired timeout");
      appLogout()
      console.log( error, ' error')
    },
  });
  
  // useEffect(() => {
  //   return () => {
  //     mutation.mutate({merchant: user?.id as number})
  //   }
  // }, [mutation, user?.id])

    useEffect(() => {
    if (user?.id) {
      mutation.mutate({ merchant: user.id });
    }
  }, [mutation, user]);

  return (
    <div className="flex overflow-y-scroll h-screen">
      <div className="h-screen w-[439px]  overflow-y-hidden bg-[#2A2A29] text-white hidden md:flex flex-col">

        <div className="flex flex-col flex-1 mt-4 space-y-2">

          <div className="w-full flex flex-col items-center justify-center">
            <img src="/biz-payfixy.svg" className="mb-20l w-60 mt-10" alt="payfixy" />
            <div className="flex flex-col">
              {count && (
                <div className="flex justify-center items-center flex-1  my-5 ">
                  {/* <Stepper /> */}
                  <StepperAlph />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 w-full flex items-center justify-center">
          <img src="/kyc.svg" alt="kyc-background-image" />
        </div>
      </div>
      {/* <Sidebar links={links} /> */}
      <main className="flex-1 bg-gray-100 overflow-y-scroll">
        <div className="text-2xl font-bold flex items-center justify-between gap-4 py-4 px-3">
          <div></div>
          <div className="text-2xl font-bold flex items-center gap-2">
            <p className="text-[#40403E] text-sm font-medium leading-6">Need Help?</p>
            <img src="/icons/need-help.svg" alt="" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6 md:p-10 overflow-y-scroll">
        {/* {mutation.isLoading && <p>Loading...</p>}
        {mutation.isError && <p>Error: {mutation.error?.message}</p>}
        {mutation.isSuccess && <p>Process started successfully!</p>} */}
          {count == 1 && <BusinessDetails />}
          {count == 2 && <BusinessDocument />}
          {count == 3 && <BankAccount />}
          {count == 4 && <BusinessOwner />}
          {count == 5 && <Summary />}
        </div>
      </main>
    </div>
  )
}

export default Page