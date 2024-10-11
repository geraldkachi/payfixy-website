"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import {motion} from "framer-motion"
import { navVariants } from '@/utils/motion'

const DiscoverSection = () => {
  return (
    <section className="bg-white py-20 md:py-40">
        <div className="max-w-[1120px] mx-auto md:flex items-center justify-between  flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col flex-1">
            <span className="border border-[#F4B6B6] bg-[#FDF4F4] text-[13px] leading-[13px] text-[#D14343] rounded-md w-max p-1">USE CASES</span>
            <motion.h1
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              className="text-4xl md:text-[46px] font-bold leading-[64.4px] text-[#2A2A29] my-2">The possibilities <br className="hidden md:block" />are endless
            </motion.h1>
            <p className="text-[#71737E] text-base leading-[24px] tracking-[-1px] mb-7">It doesn’t matter what kind of business you run, as longas you want to take your customers’ payment experienceto the next level, PayFixy’s your best bet!</p>
            <Button className="!text-white !bg-[#A51D21] !px-6 !py-[10px] !rounded-lg w-max">Get started</Button>
          </div>


          <div className="flex flex-col flex-1 gap-6">
            <Image width={643.55} height={643.55} src="/icons/possib-endless.svg" alt="" />
          </div>
        </div>
      </section>
  )
}

export default DiscoverSection