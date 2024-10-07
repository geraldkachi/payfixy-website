import CompanyLogos from '@/components/CompanyLogos'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#F6F7F9]'>
      <Navbar />
      <section className="py-10">
        <div className="max-w-[686px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <div className="text-[#6B7094] text-sm font-bold leading-6 track px-4 py-2 mb-2 w-max tracking-[8%]">WHY PAYFIXY</div>

            <p className="text-center text-[#A73636] text-[30px] font-medium md:text-[58px] leading-[48.96px] md:leading-[58.58px] tracking-[-4%] md:tracking-[-2%]">Empowering Businesses in Africa with Seamless Payment Solutions</p>
            <p className="text-[#6B7094] text-lg font-normal leading-8 tracking-[-2%] text-center mt-4">At PayFixy, our mission is to simplify payments for businesses of all sizes, ensuring fast, reliable, and secure transactions, no matter where you are. We aim to provide cutting-edge tools that allow businesses to succeed in a global economy, while delivering an unmatched customer experience.</p>
          </div>
        </div>
      </section>


      <section className="">
        <div className="max-w-[1140px] mx-auto md:flex items-center justify-center flex-1 ">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <img src="/icons/about-bg.svg" alt="" />
          </div>
        </div>
      </section>
      <CompanyLogos />
    </div>
  )
}

export default page