"use client"
import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { navVariants } from '@/utils/motion';
import Accordion from '@/components/Accordion';
import { faqArr } from '@/contstants/faq-data';
import CarouselContent from '@/components/CarouselContent'
import Footer from '@/components/Footer'


const Pricing = () => {
  return (
    <div>
      <Navbar />

      <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
        <div className="flex flex-col items-center my-7 md:my-14">
          <div className="text-[#23272E] text-xs font-bold leading-5 tracking-[0.5px] rounded-3xl px-4 py-2 mb-5 w-max">PRICING</div>

          <p className={`text-center mt-2 text-[#23272E] text-[40px] md:text-[56px] font-extrabold md:leading-[72px] md:tracking-[-2px]`}>
            Transparent pricing that <br className='hidden md:block' /> grows with you
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[6px] px-3 xl:px-0">
        {/* firet section  */}
        <div className="mt-1 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-6 md:max-w-[840px] md:mx-auto md:p-3 border border-[#E6E6E6] rounded-[20px] h-max">
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-max">

            <div className="p-6">
              <div className="bg-[#E6E6E6] text-[#000000] text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-0 mb-2 w-max tracking-[-0.4px]">LOCAL TRANSACTIONS</div>
              <p className="flex items-baseline ">
                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">1.5%</span>

                <span className="ms-1 text-xl font-normal text-[#808080]">/transaction</span>
              </p>
            </div>
            <div className="my-2 text-base  text-[#333333] font-bold w-max tracking-[-2%] leading-[27.2px]">Transactions - Wallets, Mobile Money & Other</div>
            <div className="flex items-center gap-4 my-3">
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={100} height={100} src="/icons/card-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Card</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={100} height={100} src="/icons/transfer-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Transfer</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={100} height={100} src="/icons/bank-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Bank</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={100} height={100} src="/icons/hash-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Bank</span>
              </div>
            </div>
            {/* <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6"> */}
            <Button variant='outline' title="Contact sales" className="!w-full flex items-center justify-center   border !border-[#A73636] p-3 my-2 text-base rounded-lg text-[#A73636] font-bold tracking-[-2%] leading-[27.2px]" />
            {/* </div> */}
          </div>



          <div className="bg-[#FFF7F7] rounded-[14px] flex flex-col border border-[#F9DADA]">
            <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">
              <ul role="list" className="mt-4 space-y-3">
                <p className="text-[#333333] text-xs leading-4 tracking-[2%] font-semibold">INCLUDES:</p>

                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">Local transactions fees are capped at ₦2,000</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">₦10 fee for Bank accounts transfer at ₦5,000 and below</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">₦25 fee for Bank accounts transfer above ₦5,001 to ₦50,000</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">₦50 fee for Bank accounts transfer above ₦50,000</span>
                </li>
              </ul>

            </div>
          </div>

        </div>
        {/* second section */}
        <div className="mt-1 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-6 md:max-w-[840px] md:mx-auto md:p-3 border border-[#E6E6E6] rounded-[20px] h-max">
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-max">

            <div className="p-6">
              <div className="bg-[#E6E6E6] text-[#000000] text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-0 mb-2 w-max tracking-[-0.4px]">INTERNATIONAL TRANSACTIONS</div>
              <p className="flex items-baseline ">
                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">3.8%</span>

                <span className="ms-1 text-xl font-normal text-[#808080]">/transaction</span>
              </p>
            </div>
            <div className="my-2 text-base  text-[#333333] font-bold w-max tracking-[-2%] leading-[27.2px]">Transactions - Wallets, Mobile Money & Other</div>
            <div className="flex items-center gap-4 my-3">
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={100} height={100} src="/icons/card-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Card</span>
              </div>
            </div>
            {/* <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6"> */}
            <Button variant='outline' title="Contact sales" className="!w-full flex items-center justify-center   border !border-[#A73636] p-3 my-2 text-base rounded-lg text-[#A73636] font-bold tracking-[-2%] leading-[27.2px]" />
            {/* </div> */}
          </div>



          <div className="bg-[#FFF7F7] rounded-[14px] flex flex-col border border-[#F9DADA]">
            <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">
              <ul role="list" className="mt-4 space-y-3">
                <p className="text-[#333333] text-xs leading-4 tracking-[2%] font-semibold">INCLUDES:</p>

                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">Accept payments from anywhere in the world</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                  <span className="leading-[24px] font-medium tracking-[-5%] text-sm text-[#000000]">International cards are charged and settled in your local currency by default</span>
                </li>
              </ul>

            </div>
          </div>
        </div>


        {/* faq section */}
        <section className="bg-[#F6F7F9] py-20">

          <div className="max-w-[858px] mx-auto my-20 px-3">
            <div className="flex flex-col text-center gap-2 md:gap-[16px]">
              <span className="px-4 max-w capitalize text-[#23272E] text-xs font-bold leading-[19.2px] md:leading-[20px] tracking-[0.5px]">FAQS SECTION</span>
              <motion.p variants={navVariants} initial="hidden" whileInView="show" className='text-[#23272E] text-2xl md:text-[56px] leading-[72px] tracking-[-2%] font-bold'>
                Frequently Asked Questions
              </motion.p>
            </div>

            <div className="my-10">
              {faqArr.map((item, index) => (
                <Accordion key={`faq_${index}`} heading={<h1>{item.header}</h1>}>
                  <p className="pb-2 md:pb-4 text-[#526077]">{item?.content}</p>
                </Accordion>
              ))}
            </div>

            <div className="flex items-center justify-center mt-5">
              <Button className="!text-white !bg-[#A51D21] md:!px-20 !rounded-xl">Get Started</Button>
            </div>

          </div>
        </section>
        {/* end faq */}

        {/*  */}
        <section className="bg-[#2A2A29] py-10">
          <div className="max-w-[1120px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
            <div className="flex flex-col items-center my-7 md:my-16 w-full">
              <div className="bg-[#A73636] text-white text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-2 mb-2 w-max tracking-[-0.4px]">Testimonials</div>

              <p className="text-center text-white text-[30px] font-medium md:text-[34.88px] leading-[48.96px] md:leading-[48px] tracking-[-4%] md:tracking-[-5%]">Loved by ambitious <br className="hidden md:block" /> business at every stage</p>

              <CarouselContent />
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
      </div>

      <Footer />
    </div>
  )
}

export default Pricing