import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white">
                {/* <SubFooter /> */}
                <div className="mx-auto w-full max-w-[1129px] px-3 xl:px-0">
                    <div className="md:flex justify-between  w-full gap-4 md:gap-5 lg:gap-10">
                        <div className="flex flex-wrap w-max h-max gap-4">
                            <Image width={100} height={100} src="/icons/dss-company.svg" alt="" />
                            <Image width={100} height={100} src="/icons/iso.svg" alt="" />
                            <Image width={100} height={100} src="/icons/fintechnnr.svg" alt="" />
                        </div>

                        <div className="grid grid-cols-2 gap-3 py-6 lg:py-8 md:grid-cols-3 whitespace-nowrap">
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#2A2A29] uppercase leading-[25.2px] tracking-[-2%]">Company</h2>
                                <ul className="text-[#2A2A29] font-normal text-sm md:text-base leading-[17.64px] md:leading-[20.16px] tracking-[-1%] space-y-4 md:space-y-3">
                                    <li className="mb-2">
                                        <Link href="/about" className="hover:underline">About Us</Link>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/pricing" className="hover:underline">Pricing</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/contact-us" className="hover:underline">Contact us</a>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="#" className="hover:underline">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#2A2A29] uppercase leading-[25.2px] tracking-[-2%]">Social Media</h2>
                                <ul className="text-[#2A2A29] font-normal text-sm md:text-base leading-[17.64px] md:leading-[22.4px] space-y-4 md:space-y-3">
                                    <li className="mb-2">
                                        <Link href="https://x.com/payfixy" className="hover:underline">Twitter</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href=" https://www.facebook.com/payfixy" className="hover:underline">Facebook</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="https://www.instagram.com/payfixy" className="hover:underline">Instagram</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="https://www.linkedin.com/company/payfixy/" className="hover:underline">LinkedIn</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 md:mb-6 text-xs md:text-sm font-extrabold text-[#2A2A29] uppercase leading-[25.2px] tracking-[-2%]">Legals</h2>
                                <ul className="text-[#2A2A29] font-normal text-sm md:text-base leading-[17.64px] md:leading-[22.4px] space-y-4 md:space-y-3">
                                    <li className="mb-2">
                                        <Link href="/ims-policy" className="hover:underline">IMS Policy</Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
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

                    <hr className="bg-[#E4E7EC] my-3" />
                    <div className="px-3 xl:px-0 py-6 flex items-center  justify-between mb-10">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/icons/logo.svg"  width={100} height={100} alt="logo"  className=" object-contain cursor-pointer" />
                        </Link>

                        <div className="flex  justify-center text-sm text-[#667185] leading-[20.3px] space-x-5 rtl:space-x-reverse">
                            © Payfixy {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer