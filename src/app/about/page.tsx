"use client"
import CompanyLogos from '@/components/CompanyLogos'
import Navbar from '@/components/Navbar'
import { navVariants } from '@/utils/motion'
import React from 'react'
import { motion } from "framer-motion";
import TitleText from '@/components/TitleText'

const page = () => {
  return (
    <div className='bg-[#F6F7F9]'>
      <Navbar />
      <section className="pt-10">
        <div className="max-w-[686px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <h1 className="text-[#6B7094] text-sm font-bold leading-6 track px-4 py-2 mb-2 w-max tracking-[8%]">WHY PAYFIXY</h1>

            <motion.h1 variants={navVariants}  initial="hidden" whileInView="show" className="text-center text-[#A73636] text-[33px] font-bold md:text-[58px]  md:leading-[58.58px] tracking-[-4%] md:tracking-[-2%]">Empowering Businesses in Africa with Seamless Payment Solutions</motion.h1>
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
      <section className="bg-white">
        <CompanyLogos />
        <section className="py-20 md:py-40">
          <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center gap-10 flex-1 text-white px-3 xl:px-0">
            <div style={{flex:3}} className="flex flex-col flex-1 gap-6">
              <h1 className="text-[#0A0A0A] text-[40px] md:text-[68px] leading-[81.6px] tracking-[-1.5px]">Why Choose Us</h1>
              <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-2 gap-9">
                <TitleText
                  titleColor='text-[#A73636]'
                  subtitleColor='text-[#404040]'
                  title="Fa=Global Reach"
                  subtitle="Accept payments from anywhere, with multi-currency support."
                />
                <TitleText
                  titleColor='text-[#A73636]'
                  subtitleColor='text-[#404040]'
                  title="Fast Settlements"
                  subtitle="Quick payouts to keep your cash flow steady."
                />
                <TitleText
                  titleColor='text-[#A73636]'
                  subtitleColor='text-[#404040]'
                  title="Developer-Friendly Integration"
                  subtitle="Simple API for easy integration with your platform."
                />
                <TitleText
                  titleColor='text-[#A73636]'
                  subtitleColor='text-[#404040]'
                  title="Reliable Support"
                  subtitle="24/7 customer support whenever you need assistance."
                />
              </motion.div>
            </div>

            <div className="flex flex-col flex-1 mb-10 md:mb-0" style={{flex:2}}>
              <img src="/icons/why-choose-us.svg" alt="" />
            </div>

          </div>
        </section>
      </section>


      <section className="bg-[#F6F7F9] py-20 md:py-40">
          <div className="max-w-[1120px] mx-auto grid grid-cols-3 gap-10 flex-1 text- bg-[#FFFFFF] px-3 xl:px-0">
              <div className="flex flex-col p-3">
                <img src="/icons/pen.svg" alt="" />
                <p className="text-[#272727] text-base leading-6 tracking-[-0.18px] font-bold">Customer-Centric</p>
                <p className="text-[] text-sm leading-5 tracking-[-0.08px] font-normal">Your business success is our priority. We strive to make every transaction as smooth as possible.</p>
              </div>
          </div>
        
      </section>
    </div>
  )
}

export default page