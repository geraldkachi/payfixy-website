/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React from 'react'
import { motion } from "framer-motion";
import { navVariants, slideIn } from '@/utils/motion';
import Image from 'next/image';
import Button from './Button';

const HeroHeader = () => {
    return (
        <header className="w-full px-3 md:px-8 py-4 bg-blue-203">
            <div className="md:flex justify-between gap-3 max-w-[1120px] mx-auto md:py-14 md:-mt-10">
                <div className="flex flex-col justify-center flex-1 gap-[10px] my-10">
                    <motion.h1
                        variants={navVariants}
                        initial="hidden"
                        whileInView="show"
                        className="w-full text-[35px] md:text-[58px] font-extrabold leading-[38px] sm:leading-[69.6px]  tracking-[-1px] text-left text-[#A73636]">
                        Effortless Payments, Anywhere, Anytime
                    </motion.h1>
                    <motion.p
                        //@ts-expect-error
                        variants={slideIn("left", "tween", 0.1, 1)} initial="hidn" whileInView="show"
                        className="text-lg font-medium leading-[24px] tracking-[-1px] text-left text-gray-103 text-[#71737E]">
                        Power your business with fast, secure, and reliable payments <br className="hidden md:block" />  across borders. Join thousands of businesses using PayFixy <br className="hidden md:block" /> to scale seamlessly
                    </motion.p>
                    <motion.div variants={navVariants}
                        initial="hidden"
                        whileInView="show" className="w-full mt-4 md:block">
                        <Button className="!text-white !bg-[#A51D21] !px-10 md:!px-14 !py-[16px] !rounded-lg">Login</Button>
                    </motion.div>
                </div>

                <div className="flex flex-1 top-5 -right-[70px]">
                    <Image
                        src="/icons/hero.svg"
                        className="block"
                        alt=""
                        width={574.57}
                        height={482}
                    />
                </div>
            </div>
        </header>
    )
}

export default HeroHeader