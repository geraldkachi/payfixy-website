"use client"
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { navVariants, slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";


type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/icons/access.svg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/icons/paycenter.svg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/icons/flutter.svg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/icons/network-solutions.svg",
    title: "Title 4",
    id: 5,
  },
  {
    url: "/icons/nibss.svg",
    title: "Title 4",
    id: 6,
  },
  {
    url: "/icons/netpost.svg",
    title: "Title 4",
    id: 6,
  },
];
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
            <motion.p variants={slideIn("left", "tween", 0.1, 1)} initial="hidden" whileInView="show"
              className="text-lg font-medium leading-[24px] tracking-[-1px] text-left text-gray-103 text-[#71737E]">
              Power your business with fast, secure, and reliable payments across borders. Join thousands of businesses using PayFixy to scale seamlessly
            </motion.p>
            <div className="w-full mt-4 md:block">
              <Button className="!text-white !bg-[#A51D21] !px-10 !rounded-lg">Login</Button>
            </div>
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



      <div className="max-w-[1120px] mx-auto">
        <div className="relative flex overflow-x-hidden group group-hover:pause">
          <div className="py-12 sm:py-0 animate-marquee whitespace-nowrap flex items-center gap-[48px] group group-hover:pause">
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[0].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[1].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[2].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[3].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[4].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[5].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center gap-[48px] group group-hover:pause">
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[0].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[1].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[2].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[3].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[4].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
            <span className="mx-4 text-4xl w-[120px]">
              <Image src={cards[5].url} width={100} height={100} alt="scroll-image" className="h-full" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
