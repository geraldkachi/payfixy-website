"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";
import { navVariants } from "@/utils/motion";
import { useRouter, usePathname } from "next/navigation";
import { Menu, XCancel } from "../../public/icons";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname()
  const router = useRouter();

  return (
    <div>
      <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`relative max-w-[1120px] mx-auto bg-white bg-opacity-30 rounded-xl py-4`}>
        <div className={`mx-auto flex justify-between items-center gap-8 px-3`}>
            <Link href="/" className="flex items-center gap-3">
              <img src="/icons/logo.svg" alt="logo" className=" object-contain cursor-pointer" />
            </Link>

           
          <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center  text-[#121212] px-4 text-sm font-bold leading-[19.12px] tracking-[-2%]">
              <Link href="/analytics" className={`${pathname == '/analytics' && '!text-[#101928] font-semibold '} flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors bg-transparent`}>
                <span>Solutions</span>
              </Link>
              <Link href="/analytics" className={`${pathname == '/analytics' && '!text-[#101928] font-semibold '} flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors bg-transparent`}>
                <span>Pricing</span>
              </Link>
              <Link href="/analytics" className={`${pathname == '/analytics' && '!text-[#101928] font-semibold '} flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors bg-transparent`}>
                <span>Docs</span>
              </Link>
              <Link href="/analytics" className={`${pathname == '/analytics' && '!text-[#101928] font-semibold '} flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors bg-transparent`}>
                <span>About</span>
              </Link>
            </div>

          <div className="hidden md:flex items-center relative gap-x-2">
            <Button className="!text-[#696F8C] !bg-white !rounded-lg" onClick={() => router.push('/login')}>Login</Button>
            <Button className="!text-white !bg-[#A51D21] !rounded-lg" onClick={() => router.push('/login')}>Sign Up</Button>
          </div>
          </div>

          <div className="md:hidden flex items-center justify-center gap-4">
            <Button className="!text-white !bg-[#A51D21] !rounded-lg" onClick={() => router.push('/login')}>Login</Button>
            <Menu
            size={30}
            className="stroke-blue-200 cursor-pointer md:hidden translate-y-2"
            onClick={() => setNav(!nav)} 
          />
          </div>
        </div>
      </motion.nav>


      <ul className={nav ? 'fixed left-0 top-0 w-full h-svh z-20 border-r bg-white ease-in-out duration-500 shadow-lg' : 'hidden ease-in-out duration-500 fixed left-[-100%]'}>
        <div className="flex flex-col justify-between h-full overflow-scroll">
          <div>
            <h1 className='w-full text-3xl font-bold text-[#A51D21] p-4 flex items-center justify-between bg-white'>
              <Link href="/" className="cursor-pointer flex items-center gap-3 text-white" >
              <img src="/icons/logo.svg" alt="logo" className=" object-contain cursor-pointer" />
              </Link>

              <XCancel onClick={() => setNav(!nav)} />
            </h1>
            <li className='text-white'>
              content here
            </li>
            <div className='py-4 px-5 text-[#] h-max cursor-pointer'><Link className="w-full h-full whitespace-nowrap" href="/analytics">Analytics</Link> </div>
          </div>


          <div className='w-full grid grid-cols-1 gap-6 bg-[#2A2A33] p-4'>
            <Button onClick={() => router.push('/login')} className="flex items-center justify-center !text-white !bg-[#A51D21] !border !border-white">Login</Button>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar


// Ezekiel 28:11-19 
// 2 Corinthians 11:14