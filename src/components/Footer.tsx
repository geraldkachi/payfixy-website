import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="bg-white">
                {/* <SubFooter /> */}
                <div className="mx-auto w-full max-w-5xl">
                    <div className="grid grid-cols-2 gap-8 md:gap-20 px-3 md:px-0 py-6 lg:py-8 md:grid-cols-5 whitespace-nowrap">
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[21.6px] md:leading-[25.2px] tracking-[-1%] md:tracking-[-2%]">PRODUCTS</h2>
                            <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                <li className="mb-2">
                                    <Link href="/account-payable" className=" hover:underline">Accounts Payable</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/account-receivable" className="hover:underline">Accounts Receivable</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/account-payable" className="hover:underline">Inventory Management</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/financial-accounting" className="hover:underline">Financial Accounting</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[21.6px] md:leading-[25.2px] tracking-[-1%] md:tracking-[-2%]">FEATURES</h2>
                            <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Financial Reports</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Virtual Accounts</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Approvals</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Audit Trails</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">invoicing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[25.2px] tracking-[-2%]">COMPANY</h2>
                            <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                <li className="mb-2">
                                    <Link href="/about" className="hover:underline">About Us</Link>
                                </li>
                                <li className="mb-2">
                                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-2">
                                    <Link href="/faq" className="hover:underline">FAQs</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[25.2px] tracking-[-2%]">RESOURCES</h2>
                            <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                <li className="mb-2">
                                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-2">
                                    <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/help-center" className="hover:underline">Help Center</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/blog" className="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#000024] uppercase leading-[25.2px] tracking-[-2%]">SUPPORT</h2>
                            <ul className="text-[#808084] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-5">
                                <li className="mb-2">
                                    <Link href="/help-cent" className="hover:underline">Help Center</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/pricing" className="hover:underline">Pricing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex px-3 my-5 flex-col sm:hidden">
                        <hr className="pt-4" />
                    <div className="flex gap-5 items-center leading-[auto] tracking-[-1%] text-sm text-[#808084] ">
                        <Link href="/pricing" className="hover:underline">Pricing</Link>
                        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                    </div>
                    </div>

                    <div className="max-auto max-w-5xl text-lg leading-[200%] md:leading-[180%] text-[#808080] bg-[#FAFAFA] tracking-[-1%] rounded-xl px-5 py-10">
                        {/* To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank. */}
                        Vollie Finance is a Technology Platform offering financial services in partnership with <br className="hidden sm:block " /> Financial Institutions licensed by the Central Bank Of Nigeria.
                    </div>

                    <div className="px-3 md:px-0 py-6 flex md:items-center justify-center md:justify-between">
                        <span className="text-sm text-[#808084] sm:text-lg sm:text-center">© {new Date().getFullYear()} Vollie Technologies LTD •  All rights reserved
                        </span>
                        <div className="hidden md:flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                            <a href="https://www.facebook.com/volliefi" className="">
                                <img src="footer-fb.svg" alt="" />
                            </a>
                            <a href="https://www.instagram.com/volliefi" className="">
                                <img src="footer-ig.svg" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/volliefi" className="">
                                <img src="footer-in.svg" alt="" />
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer