import React from 'react'

const page = () => {
  return (
    <div className="flex">
         <div className="h-screen w-[539px] bg-[#2A2A29] text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 mt-4 space-y-2">
       steps
      </nav>
      <div className="p-4">
        <img src="/kyc.svg" alt="kyc-background-image" />
      </div>
    </div>
    {/* <Sidebar links={links} /> */}
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
            <p className="mt-4">This is where your main content will go.</p>
      </div>
    </main>
  </div>
  )
}

export default page