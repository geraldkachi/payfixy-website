import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-0 min-h-">
        <Navbar />

    <div className="max-w-5xl lg:mx-auto bg-whit mx-3">
    <div className="flex flex-col items-center mt-20 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-[40px] leading-9 font-bold text-[#A51D21] mb-4">
        Cookie Policay
      </h1>
</div>
      <p className="text-sm text-gray-500">Date of Policy Notice: May 23, 2023</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Introduction</h2>
        <p className="text-gray-700 leading-6">
          This document defines the framework for how management systems are
          established, managed, measured, reported on, and continuously
          developed at <strong>Payfixy Limited</strong>. The company is pursuing
          ISO/IEC 27001:2013 and ISO/IEC 22301:2019 certifications to validate
          the adoption of best practices in information security and business
          continuity.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          1. Purpose of the IMS Policy
        </h2>
        <p className="text-gray-700 leading-6">
             The purpose of this document is to define an overall policy regarding management systems that is appropriate to the purpose of Payfixy Limited and includes:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Setting objectives for management systems.</li>
          <li>Committing to fulfilling applicable requirements.</li>
          <li>Driving continual improvement in processes and systems.</li>
        </ul>
        <p className="text-gray-700 leading-6">
        This Policy is available in electronic form and will be communicated within the organisation and to all relevant stakeholders and interested third parties.
        </p>
      </section>
      </div>
      </div>
  )
}

export default page