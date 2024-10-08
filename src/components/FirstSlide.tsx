import Image from 'next/image'
import React from 'react'

const FirstSlide = () => {

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
  return (
    <div className="max-w-[1120px] mx-auto">
    <div className="relative flex overflow-x-hidden group group-hover:pause">
              <div className="py-6 animate-marquee whitespace-nowrap flex items-center gap-[48px] group group-hover:pause">
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[0].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[1].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[2].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[3].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[4].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[5].url} alt="scroll-image" className="h-full" />
                  </span>
              </div>

              <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex items-center gap-[48px] group group-hover:pause">
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[0].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[1].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[2].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[3].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[4].url} alt="scroll-image" className="h-full" />
                  </span>
                  <span className="mx-4 text-4xl w-[120px]">
                      <Image src={cards[5].url} alt="scroll-image" className="h-full" />
                  </span>
              </div>
          </div>
    </div>
  )
}

export default FirstSlide