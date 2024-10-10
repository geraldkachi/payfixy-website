import React, { useState } from 'react'
import Button from './Button';
import { motion } from "framer-motion"
import { navVariants } from '@/utils/motion';
const CompanyBusiness = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    // Define a mapping between the item and the corresponding image
    const itemImageMap = [
        {
            title: 'Seamless Checkout for Your Website or App',
            subtile: "Boost conversions with a user-friendly and fast checkout experience. PayFixy Checkout is optimized for speed and ease, making it easy for customers to complete their purchases quickly",
            img: '/icons/discover-1.svg',
            btnText: 'See documentation',
            listLabel: 'Online Checkout',
        },
        {
            title: 'All-In-One Merchant Dashboard',
            subtile: 'Manage all your business transactions in one place with our comprehensive merchant dashboard. Track payments, generate reports, and manage settlements effortlessly.',
            img: '/icons/discover-6.svg',
            btnText: 'Get Started',
            listLabel: 'Merchant Dashboard',
        },
        {
            title: 'Mobile Payments, Simplified for Aggregator Merchants',
            subtile: 'Tap into the growing mobile market with PayFixy’s mobile payment solutions. Our mobile app ensure that your app can securely process payments on both Android and iOS platforms.',
            img: '/icons/discover-2.svg',
            listLabel: 'Merchant Mobile App',
        },
        {
            title: 'Powerful API for Developers',
            subtile: 'Our Payment Gateway offers a flexible API that integrates seamlessly into your platform, allowing you to accept payments through multiple methods—cards, bank transfers, mobile money—quickly and securely.',
            img: '/icons/discover-3.svg',
            btnText: "See documentation",
            listLabel: 'Payment Gateway',
        },
        {
            title: 'Cross-Border Payments, Simplified',
            subtile: 'PayX is designed to help businesses scale across borders. With multi-currency support and secure international transactions, PayX makes it easy to expand your business globally',
            img: '/icons/discover-4.svg',
            btnText: "Get Started",
            listLabel: 'PayX',
        },
        {
            title: 'Transaction',
            subtile: 'Tranxact provides businesses with real-time transaction tracking, detailed insights, and analytics, giving you full control over your financial operations.',
            img: '/icons/discover-5.svg',
            btnText: "Get Started",
            listLabel: 'Tranxact',
        },
    ]

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <section className="bg-[url('/icons/bg-lining.svg')] bg-[#F5F5F5] py-20 md:py-40">
            <div className="max-w-[1120px] mx-auto md:flex  justify-between gap-4  flex-1 text-white px-3 xl:px-0">
                <div className="flex flex-col flex-1" style={{ flex: 1 }}>
                    <span className="border border-[#F4B6B6] bg-[#FDF4F4] text-[13px] leading-[13px] text-[#D14343] rounded-md w-max p-1">Solutions</span>
                    <motion.h1
                        variants={navVariants}
                        initial="hidden"
                        whileInView="show"
                        className="text-4xl md:text-[34px] font-bold leading-[45.6px] text-[#2A2A29] my-2">Discover the <br className="hidden md:block" />power of Payfixy
                    </motion.h1>
                    <div className="mt-[10px] hidden lg:block">
                        <ul className="text-[#2A2A29] font-semibold text-sm md:text-base leading-[17.64px] md:leading-[24px] tracking-[-1px] space-y-4 md:space-y-3">
                            {itemImageMap.map((item, index) => (
                                <li
                                    key={item.title}
                                    className={`mb-2 cursor-pointer ${activeIndex === index ? 'text-[#A73636] font-bold' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <span className="">{item.listLabel}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col flex-1" style={{ flex: 3 }}>

                     <img src={itemImageMap[activeIndex].img} alt={itemImageMap[activeIndex].title} />
                    <p className="text-[#40403E] text-base md:text-2xl  font-bold leading-[24px] tracking-[-1px] mb-3">{itemImageMap[activeIndex].title}</p>
                    <p className="text-[#71737E] text-base leading-[24px] tracking-[-1px] mb-7">{itemImageMap[activeIndex]?.subtile}</p>
                    {activeIndex == 2 && (
                        <div className="flex items-center gap-5">
                            <img src="/icons/app-play.svg" alt="" />
                            <img src="/icons/google-play.svg" alt="" />
                        </div>
                    )}
                    {itemImageMap[activeIndex].btnText && (
                        <Button className="!text-white !bg-[#A51D21] !px-6 !py-[10px] !rounded-lg w-max">
                            {itemImageMap[activeIndex].btnText}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CompanyBusiness