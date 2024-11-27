import React from 'react'
import BusinessDetails from './BusinessDetails'

const page = () => {
  return (
    <div className="flex">
      {/* <div className="h-screen w-[539px] bg-[#2A2A29] text-white flex flex-col"> */}
      <div className="h-screen w-[439px] bg-[#2A2A29] text-white flex flex-col">

        <div className="flex flex-col flex-1 mt-4 space-y-2">

          <div className="p-4 w-full flex items-center justify-center">
            <img src="/auth-payfix.svg" className="mb-20 w-60" alt="payfixy" />
          </div>
        </div>
        <div className="p-4 w-full flex items-center justify-center">
          <img src="/kyc.svg" alt="kyc-background-image" />
        </div>
      </div>
      {/* <Sidebar links={links} /> */}
      <main className="flex-1 bg-gray-100">
        <div className="text-2xl font-bold flex items-center justify-between gap-4 py-4 px-3">
          <div></div>
          <div className="text-2xl font-bold flex items-center gap-2">
            <p className="text-[#40403E] text-sm font-medium leading-6">Need Help?</p>
            <img src="/icons/need-help.svg" alt="" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-6">
          <BusinessDetails />
        </div>
      </main>
    </div>
  )
}

export default page