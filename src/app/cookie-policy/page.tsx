import Footer from '@/components/Footer'
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Introduction
          </h2>
          <p className="text-gray-700 leading-6">
            Payfixy Limited (“we” or “us” or “our”) may use cookies when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”) to help customize the Site and improve your experience.
          </p>
          <p className="text-gray-700 leading-6 mt-3">
            We reserve the right to make changes to this Cookie Policy at any time and for any reason. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, with the “Last Updated” date revised accordingly. By continuing to use the Site, you agree to these changes.
          </p>
        </section>



        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Use of Cookies
          </h2>
          <p className="text-gray-700 leading-6">
            A “cookie” is a string of information that assigns you a unique identifier, stored on your computer. Your browser provides this unique identifier to us every time you submit a query to the Site. Cookies help us:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
            <li>Record your user preferences.</li>
            <li>Keep you logged into the Site.</li>
            <li>Track pages you visit to improve user experience.</li>
          </ul>
          <p className="text-gray-700 leading-6 mt-3">
            For more details on how we use cookies, refer to our <span className="text-[#A51D21] font-semibold underline cursor-pointer">Privacy Policy</span>.
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-6">
            All questions or concerns regarding this Cookie Policy should be directed to:
          </p>
          <p className="text-gray-700 leading-6 font-medium mt-2">
            <a href="mailto:ndpr@maggrouplimited.com" className="text-[#A51D21] underline">
              ndpr@maggrouplimited.com
            </a>
          </p>
        </section>
        <div className="my-6"></div>
      </div>
      <Footer />
    </div>
  )
}

export default page

