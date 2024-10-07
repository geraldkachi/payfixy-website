"use client"
import Button from "@/components/Button";
import CarouselContent from "@/components/CarouselContent";
import CompanyLogos from "@/components/CompanyLogos";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TitleText from "@/components/TitleText";
import { navVariants, slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <header className="w-full px-3 md:px-8 py-4 bg-blue-203">
        <div className="sm:flex justify-between gap-3 max-w-[1120px] mx-auto md:py-14 md:-mt-10">
          <div className="flex flex-col justify-center flex-1 gap-[10px] my-10">
            <motion.h1
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              className="w-full text-[35px] md:text-[58px] font-extrabold leading-[38px] sm:leading-[69.6px]  tracking-[-1px] text-left text-[#A73636]">
              Effortless Payments, Anywhere, Anytime
            </motion.h1>
            <motion.p variants={slideIn("left", "tween", 0.1, 1)} initial="hidn" whileInView="show"
              className="text-lg font-medium leading-[24px] tracking-[-1px] text-left text-gray-103 text-[#71737E]">
              Power your business with fast, secure, and reliable payments across borders. Join thousands of businesses using PayFixy to scale seamlessly
            </motion.p>
            <motion.div variants={navVariants}
              initial="hidden"
              whileInView="show" className="w-full mt-4 md:block">
              <Button className="!text-white !bg-[#A51D21] !px-10 !rounded-lg">Login</Button>
            </motion.div>
          </div>

          <div className="flex flex-1 top-5 -right-[70px]">
            <img
              src="/icons/hero.svg"
              className="block"
              alt=""
            />
          </div>
        </div>
      </header>


      <CompanyLogos />


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
                title="Fast and Secure Payments"
                subtitle="Accept cards, bank transfers, and mobile wallets, all in one place"
              />
              <TitleText
                title="Fast and Secure Payments"
                subtitle="Accept cards, bank transfers, and mobile wallets, all in one place"
              />
              <TitleText
                title="Fast and Secure Payments"
                subtitle="Accept cards, bank transfers, and mobile wallets, all in one place"
              />
              <TitleText
                title="Fast and Secure Payments"
                subtitle="Accept cards, bank transfers, and mobile wallets, all in one place"
              />
            </motion.div>
            <Button className="!text-white !bg-[#A51D21] !px-10 !rounded-lg w-max">Discover All Features</Button>
          </div>

        </div>
      </section>

      {/* discover */}
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
            <p className="text-[#71737E] text-base leading-[24px] tracking-[-1px] mb-7">It doesn’t matter what kind of business you run, as longas you want to take your customers’ payment experienceto the next level, Payfixy’s your best bet!</p>
            <Button className="!text-white !bg-[#A51D21] !px-10 !rounded-lg w-max">Get started</Button>
          </div>


          <div className="flex flex-col flex-1 gap-6">
            <img src="/icons/possib-endless.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#2A2A29] py-10">
        <div className="max-w-[1120px] mx-auto md:flex  items-center flex-1 text-white px-3 xl:px-0">
          <div className="flex flex-col items-center my-7 md:my-16 w-full">
            <div className="bg-[#A73636] text-white text-[13.68px] font-bold leading-[20px] track rounded-3xl px-4 py-2 mb-2 w-max tracking-[-0.4px]">Testimonials</div>

            <p className="text-center text-white text-[30px] font-medium md:text-[34.88px] leading-[48.96px] md:leading-[48px] tracking-[-4%] md:tracking-[-5%]">Loved by ambitious <br className="hidden md:block" /> business at every stage</p>

            <CarouselContent />
          </div>
        </div>
      </section>



      <section className="bgwhite py-20 md:py-40">
        <div className="max-w-[1120px] mx-auto md:flex items-center justify-center flex-1 bg-[#AB1B1F] text-white px-3 xl:px-0 rounded-2xl">
       
          <div className="flex flex-col items-center py-7 md:my-16">
            <p className="text-center text-white text-[30px] font-extrabold md:text-[46.13px] leading-[48.96px] md:leading-[56px] tracking-[-1.2px]">Ready to Elevate Your Business</p>
            <p className="text-center mt-4 text-white font-normal text-base leading-[28.8px] md:leading-[32px]">Simple, hassle-free setup to get your business running.</p>
            <Button className="!text-white !bg-[#2A2A29] !px-10 !rounded-lg w-max mt-8">Get started</Button>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
