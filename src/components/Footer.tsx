import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white">
                {/* <SubFooter /> */}
                <div className="mx-auto w-full max-w-5xl">
                    <div className="flex justify-between w-full gap-4">
                        <div className="flex flex-wrap w-max gap-4">
                            <img src="/icons/dss-company.svg" alt="" />
                            <img src="/icons/iso.svg" alt="" />
                            <img src="/icons/fintechnnr.svg" alt="" />
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:gap-20 px-3 md:px-0 py-6 lg:py-8 md:grid-cols-3 whitespace-nowrap">
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[25.2px] tracking-[-2%]">Company</h2>
                                <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                    <li className="mb-2">
                                        <Link href="/about" className="hover:underline">About Us</Link>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/pricing" className="hover:underline">Pricing</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Contact us</a>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#2A2A29] uppercase leading-[25.2px] tracking-[-2%]">Social Media</h2>
                                <ul className="text-[#2A2A29] font-normal text-sm md:text-base leading-[17.64px] md:leading-[22.4px] space-y-4 md:space-y-5">
                                    <li className="mb-2">
                                        <a href="#" className="hover:underline">Twitter</a>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Facebook</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Instagram</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">LinkedIn</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#2A2A29] uppercase leading-[25.2px] tracking-[-2%]">Legals</h2>
                                <ul className="text-[#2A2A29] font-normal text-sm md:text-base leading-[17.64px] md:leading-[22.4px] space-y-4 md:space-y-5">
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">IMS Policy</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/contact-us" className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Terms of Use</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Cookie Policy</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Merchant Service Agreement</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">Payment Protection Promise</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="" />
                    <div className="px-3 md:px-0 py-6 flex md:items-center justify-center md:justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/icons/logo.svg" alt="logo" className=" object-contain cursor-pointer" />
                        </Link>

                        <div className="hidden md:flex mt-4 sm:justify-center text-sm text-[#667185] leading-[20.3px] md:mt-0 space-x-5 rtl:space-x-reverse">
                            © Payfixy {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer