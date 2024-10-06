import Image from 'next/image'
import React from 'react'

const SecondSlide = () => {
    type CardType = {
        url: string;
        title: string;
        id: number;
    };

    const cards: CardType[] = [
        {
            url: "/icons/gtb.svg",
            title: "Title 2",
            id: 2,
        },
        {
            url: "/icons/weba.svg",
            title: "Title 3",
            id: 3,
        },
        {
            url: "/icons/zenith.svg",
            title: "Title 4",
            id: 4,
        },
        {
            url: "/icons/sw-global.svg",
            title: "Title 4",
            id: 5,
        },
        {
            url: "/icons/cbn.svg",
            title: "Title 4",
            id: 6,
        },
        {
            url: "/icons/sterling.svg",
            title: "Title 4",
            id: 6,
        },
    ];

    return (
        <div className="max-w-[920px] mx-auto">
            <div className="relative flex overflow-x-hidden group group-hover:pause">
                <div className="animate-marquee whitespace-nowrap flex items-center justify-evenly gap-[48px] group group-hover:pause">
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[0].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[1].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[2].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[3].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[4].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max flex items-center">
                        <Image src={cards[5].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center justify-evenly gap-[48px] group group-hover:pause">
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[0].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[1].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[2].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[3].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[4].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                    <span className="mx-4 text-4xl w-max">
                        <Image src={cards[5].url} width={80} height={80} alt="scroll-image" className="h-full" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SecondSlide