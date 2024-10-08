"use client"
import CompanyLogos from '@/components/CompanyLogos'
import Navbar from '@/components/Navbar'
import { navVariants } from '@/utils/motion'
import React from 'react'
import { motion } from "framer-motion";
import TitleText from '@/components/TitleText'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-[#F6F7F9]'>
      <Navbar />
      <section className="pt-10">
        <div className="max-w-[686px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <h1 className="text-[#6B7094] text-sm font-bold leading-6 track px-4 py-2 mb-2 w-max tracking-[8%]">WHY PAYFIXY</h1>

            <motion.h1 variants={navVariants} initial="hidden" whileInView="show" className="text-center text-[#A73636] text-[33px] font-bold md:text-[58px]  md:leading-[58.58px] tracking-[-4%] md:tracking-[-2%]">Empowering Businesses in Africa with Seamless Payment Solutions</motion.h1>
            <p className="text-[#6B7094] text-lg font-normal leading-8 tracking-[-2%] text-center mt-4">At PayFixy, our mission is to simplify payments for businesses of all sizes, ensuring fast, reliable, and secure transactions, no matter where you are. We aim to provide cutting-edge tools that allow businesses to succeed in a global economy, while delivering an unmatched customer experience.</p>
          </div>
        </div>
      </section>


      <section className="">
        <div className="max-w-[1140px] mx-auto md:flex items-center justify-center flex-1 ">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <Image width={1200} height={100} src="/icons/about-bg.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <CompanyLogos />
        <section className="py-20 md:py-40">
          <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center gap-10 flex-1 text-white px-3 xl:px-0">
            <div style={{ flex: 3 }} className="flex flex-col flex-1 gap-6">
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

            <div className="flex flex-col flex-1 mb-10 md:mb-0" style={{ flex: 2 }}>
              <Image width={481} height={466} src="/icons/why-choose-us.svg" alt="" />
            </div>

          </div>
        </section>
      </section>


      <section className="bg-[#F6F7F9] py-20">
        <motion.h1 variants={navVariants} initial="hidden" whileInView="show" className="text-center text-[#23272E] text-[33px] md:text-[56px]  font-extrabold md:leading-[72px] md:tracking-[-2%] mb-10">Our Core Values</motion.h1>
        <div className="max-w-[1120px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1 text- bg-[#FFFFFF] px-3 xl:px-0">
          {/* card1 */}
          <div className="flex flex-col p-7">
            <Image width={100} height={100} src="/icons/pen.svg" alt="pen" className='mb-4 w-[24px] h-[24px]' />
            <p className="text-[#272727] text-base leading-6 tracking-[-0.18px] font-bold mb-2">Customer-Centric</p>
            <p className="text-[#5C5C5C] text-sm leading-5 tracking-[-0.08px] font-normal">Your business success is our priority. We strive to make every transaction as smooth as possible.</p>
          </div>
          {/* card2 */}
          <div className="flex flex-col p-7">
            <Image width={100} height={100} src="/icons/pen.svg" alt="pen" className='mb-4 w-[24px] h-[24px]' />
            <p className="text-[#272727] text-base leading-6 tracking-[-0.18px] font-bold mb-2">Security & Transparency</p>
            <p className="text-[#5C5C5C] text-sm leading-5 tracking-[-0.08px] font-normal">We protect your payments with advanced security standards and guarantee clear, transparent pricing—no hidden fees</p>
          </div>
          {/* card3 */}
          <div className="flex flex-col p-7">
            <Image width={100} height={100} src="/icons/pen.svg" alt="pen" className='mb-4 w-[24px] h-[24px]' />
            <p className="text-[#272727] text-base leading-6 tracking-[-0.18px] font-bold mb-2">Innovation</p>
            <p className="text-[#5C5C5C] text-sm leading-5 tracking-[-0.08px] font-normal">We’re committed to continuously improving our platform, keeping it at the forefront of the payment industry.</p>
          </div>
        </div>
      </section>


          {/*  C-Suits */}
      <section className="bg-white py-20">
        <div className="max-w-[720px] mx-auto">
          <motion.h1 variants={navVariants} initial="hidden" whileInView="show" className="text-center text-[#23272E] text-[33px] md:text-[56px]  font-extrabold md:leading-[72px] md:tracking-[-2%] mb-5 md:mb-10">Core Team</motion.h1>
          <p className="text-[#6B7094] text-lg font-normal leading-8 tracking-[-2%] text-center mb-4 md:mb-10">Our solutions are built by an experienced team with deep domain expertise in payments, fraud prevention and risk management. Our team has worked at companies such as Google and MasterCard to name a few.</p>
        </div>

        <div className="max-w-[1120px] mx-auto grid sm:grid-cols-2 gap-10 flex-1 text- bg-[#FFFFFF] px-3 xl:px-0">
          {/* card1 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[29.04px]">
            <Image width={100} height={100} src="/c-suits/mahmood.svg" alt="c-suits" className='mb-4' />
            <div className="flex flex-col text-center sm:text-start">
              <p className="text-[#272727] text-base md:text-[27.33px] md:leading-[41px] tracking-[-3%] font-medium mb-2">Mahmood Ahmadu, OON, MIo</p>
              <p className="text-[#A73636] text-sm md:text-[20.5px] leading-[27.33px] tracking-[1%] font-medium">Founder & Chairman</p>
            </div>
          </div>
          {/* card2 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[29.04px]">
            <Image width={100} height={100} src="/c-suits/nwachukwu.svg" alt="c-suits" className='mb-4' />
            <div className="flex flex-col text-center sm:text-start">
              <p className="text-[#272727] text-base md:text-[27.33px] md:leading-[41px] tracking-[-3%] font-medium mb-2">Mr. Anthony Nwachukwu</p>
              <p className="text-[#A73636] text-sm md:text-[20.5px] leading-[27.33px] tracking-[1%] font-medium">Co-founder & CEO</p>
            </div>
          </div>
          {/* card3 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[29.04px]">
            <Image width={100} height={100} src="/c-suits/kelechi.svg" alt="c-suits" className='mb-4' />
            <div className="flex flex-col text-center sm:text-start">
              <p className="text-[#272727] text-base md:text-[27.33px] md:leading-[41px] tracking-[-3%] font-medium mb-2">Mr. Kelechi Dozie</p>
              <p className="text-[#A73636] text-sm md:text-[20.5px] leading-[27.33px] tracking-[1%] font-medium">Managing Director</p>
            </div>
          </div>
          {/* card4 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[29.04px]">
            <Image width={100} height={100} src="/c-suits/abi-ahmed.svg" alt="c-suits" className='mb-4' />
            <div className="flex flex-col text-center sm:text-start">
              <p className="text-[#272727] text-base md:text-[27.33px] md:leading-[41px] tracking-[-3%] font-medium mb-2">Abi Ahmed Haruna</p>
              <p className="text-[#A73636] text-sm md:text-[20.5px] leading-[27.33px] tracking-[1%] font-medium">General Counsel & Company Secretary</p>
            </div>
          </div>
        </div>
      </section>


    {/* red section */}
    <section className="bgwhite py-20 md:py-40">
        <div className="max-w-[1120px] mx-auto md:flex items-center justify-center flex-1 bg-[#AB1B1F] text-white px-3 xl:px-0 rounded-2xl">
       
          <div className="flex flex-col items-center py-7 md:my-16">
            <p className="text-center text-white text-[30px] font-extrabold md:text-[46.13px] leading-[48.96px] md:leading-[56px] tracking-[-1.2px]">Ready to Elevate Your Business</p>
            <p className="text-center mt-4 text-white font-normal text-base leading-[28.8px] md:leading-[32px]">Simple, hassle-free setup to get your business running.</p>
            <Button className="!text-white !bg-[#2A2A29] !px-10 !rounded-lg w-max mt-8">Get started</Button>
          </div>

        </div>
      </section>

    <Footer />
    </div>
  )
}

export default page