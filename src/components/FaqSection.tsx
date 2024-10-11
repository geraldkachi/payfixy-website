"use client"
import { navVariants } from '@/utils/motion'
import React from 'react'
import Button from './Button'
import Accordion from './Accordion'
import {motion } from "framer-motion"
import { faqArr } from '@/contstants/faq-data'

const FaqSection = () => {
  return (
    <section className="bg-[#F6F7F9] md:py-20">

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
  )
}

export default FaqSection