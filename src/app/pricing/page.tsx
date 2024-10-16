import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import CarouselContent from '@/components/CarouselContent'
import Footer from '@/components/Footer'
import FaqSection from '@/components/FaqSection'


const Pricing = () => {
  return (
    <div>
      <Navbar />

      <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
        <div className="flex flex-col items-center my-7 md:my-14 px-3 xl:px-0">
          <div className="text-[#23272E] text-xs font-bold leading-5 tracking-[0.5px] rounded-3xl px-4 py-2 mb-3 md:mb-5 w-max">PRICING</div>

          <p className={`text-center mt-2 text-[#23272E] text-[40px] md:text-[56px] font-extrabold leading-[53px] md:leading-[72px] md:tracking-[-2px]`}>
            Transparent pricing that <br className='hidden md:block' /> grows with you
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[6px] px-3 xl:px-0">
        {/* firet section  */}
        <div className="mt-1 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-1 sm:gap-6 md:max-w-[840px] md:mx-auto md:p-3 border border-[#E6E6E6] rounded-[20px] h-max mb-5">
          {/* <div className="bg-white rounded-lg shadow-sm flex flex-col h-max">

            <div className="p-6">
              <div className="bg-[#E6E6E6] text-[#000000] text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-0 mb-2 w-max tracking-[-0.4px]">LOCAL TRANSACTIONS</div>
              <p className="flex items-baseline ">
                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">1.5%</span>

                <span className="ms-1 text-xl font-normal text-[#808080]">/transaction</span>
              </p>
            </div>
            <div className="p-3">
            <div className="my-2 text-base  text-[#333333] font-bold w-max tracking-[-2%] leading-[27.2px]">Transactions - Wallets, Mobile Money & Other</div>
            <div className="flex items-center gap-4 my-3">
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={12} height={12} src="/icons/card-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Card</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={14} height={14} src="/icons/transfer-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Transfer</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={12} height={12} src="/icons/bank-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Bank</span>
              </div>
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={12} height={12} src="/icons/hash-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Bank</span>
              </div>
            </div>
            <Button variant='outline' title="Contact sales" className="!w-full flex items-center justify-center   border !border-[#A73636] p-3 my-2 text-base rounded-lg text-[#A73636] font-bold tracking-[-2%] leading-[27.2px]" />
            </div>
          </div> */}



          <div className="bg-[#FFF7F7] rounded-[14px] flex flex-col border border-[#F9DADA]">
            <div className="flex flex-col flex-1 justify-between gap-y-10 pt-6 pb-8 px-6">
              <ul role="list" className="mt-4 space-y-3">
                <p className="text-[#333333] text-xs leading-4 tracking-[2%] font-semibold">INCLUDES:</p>

                <li className="flex items-start space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                <div className="flex flex-col">
                    <span className="leading-[24px] font-semibold tracking-[-5%] text-sm md:text-base text-[#000000]">Flexible Pricing Tailored to Your Needs</span>
                    <span className="leading-[24px] font-medium tracking-[-5%] text-xs md:text-sm text-[#000000]">At Payfixy, we understand that every business is unique. That’s why we offer competitive, flexible pricing designed to scale with your business. Whether you&apos;re processing small transactions or handling high-volume payments, we are committed to offering you the best value.</span>
                </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                <div className="flex flex-col">
                  <span className="leading-[24px] font-semibold tracking-[-5%] text-sm md:text-base text-[#000000]">Volume-Based Discounts</span>
                  <span className="leading-[24px] font-medium tracking-[-5%] text-xs md:text-sm text-[#000000]">The more you grow, the more you save. Our pricing model is designed to reward higher transaction volumes with significant savings, ensuring you get the most out of your payment processing experience.</span>
                </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Image width={26} height={26} src="/icons/check-pay.svg" alt="price-check" />

                <div className="flex flex-col">
                  <span className="leading-[24px] font-semibold tracking-[-5%] text-sm md:text-base text-[#000000]">Custom Pricing Solutions</span>
                  <span className="leading-[24px] font-medium tracking-[-5%] text-xs md:text-sm text-[#000000]">We believe in providing solutions that work for you. Our team is open to discussing custom pricing options based on your transaction needs. Let&apos;s work together to create a plan that aligns perfectly with your business.</span>
                </div>
                </li>

              </ul>

            </div>
          </div>

        </div>
        {/* second section */}
        {/* <div className="mt-1 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-6 md:max-w-[840px] md:mx-auto md:p-3 border border-[#E6E6E6] rounded-[20px] h-max">
          <div className="bg-white rounded-lg shadow-sm flex flex-col h-max">

            <div className="p-6">
              <div className="bg-[#E6E6E6] text-[#000000] text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-0 mb-2 w-max tracking-[-0.4px]">INTERNATIONAL TRANSACTIONS</div>
              <p className="flex items-baseline ">
                <span className="text-4xl md:text-[56px] font-bold text-[#00000A] tracking-[-6%] leading-[89.6px]">3.8%</span>

                <span className="ms-1 text-xl font-normal text-[#808080]">/transaction</span>
              </p>
            </div>
            <div className="p-3">

            <div className="my-2 text-base  text-[#333333] font-bold w-max tracking-[-2%] leading-[27.2px]">Transactions - Wallets, Mobile Money & Other</div>
            <div className="flex items-center gap-4 my-3">
              <div className="flex items-center gap-1 p-1.5 rounded-[281.25px] border border-[#9DA0AE]">
                <Image width={12} height={12} src="/icons/card-pay.svg" alt="" />
                <span className='text-[#9DA0AE] text-[10.13px] font-semibold leading-[13.5px] tracking-[-0.56px]'>Card</span>
              </div>
            </div>
            <Button variant='outline' title="Contact sales" className="!w-full flex items-center justify-center   border !border-[#A73636] p-3 my-2 text-base rounded-lg text-[#A73636] font-bold tracking-[-2%] leading-[27.2px]" />
            </div>
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
        </div> */}
       <FaqSection />

        <CarouselContent />

        {/* red section */}
        <section className="bg-white py-20 md:py-40">
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
