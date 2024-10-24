import Button from '@/components/Button'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
     <Navbar />
     <ContactInfo />

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

    <Footer />
    </div>
  )
}

export default ContactUs