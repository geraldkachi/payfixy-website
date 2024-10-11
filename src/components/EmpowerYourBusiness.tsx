"use client"
import { navVariants } from '@/utils/motion'
import React from 'react'
import TitleText from './TitleText'
import {motion} from "framer-motion"
import Button from './Button'

const EmpowerYourBusiness = () => {
  return (
    <section className="bg-[url('/icons/bg-lining.svg')] bg-[#2A2A29] py-20 md:py-40">
        <div className="max-w-[1120px] mx-auto md:flex items-start flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col flex-1 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-[38px] font-bold leading-[45.6px] tracking-[-1px]">Empower Your Business <br className="hidden md:block" /> with Next-Level <br className="hidden md:block" /> Payments</h1>
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 gap-9">
              <TitleText
                title="Multiple Payment Options"
                subtitle="Accept cards, bank transfers, and mobile wallets, all in one place"
              />
              <TitleText
                title="Instant Settlements"
                subtitle="Get your funds when you need them, with instant settlements."
              />
              <TitleText
                title=" Split payments"
                subtitle="Settle to multiple accounts with ease!"
              />
              <TitleText
                title="24/7 Customer Support"
                subtitle="Always here to help, anytime, anywhere"
              />
            </motion.div>
            <Button className="!text-white !bg-[#A51D21] !px-6 !py-[10px] !rounded-lg w-max">Discover All Features</Button>
          </div>

        </div>
      </section>
  )
}

export default EmpowerYourBusiness