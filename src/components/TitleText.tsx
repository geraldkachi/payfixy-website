import React from 'react'
interface Props {
    title: string;
    subtitle: string;
    titleColor?: string; 
    subtitleColor?: string;
}
const TitleText = ({ title, subtitle, titleColor = 'text-white', subtitleColor = 'text-[#9DA0AE]'  }: Props) => {
    return (
        <div className="flex flex-col gap-2 md:gap-[12px]">
            <h2 className={`text-lg font-bold md:text-xl leading-[24px] tracking-[-1px] ${titleColor}`}>{title}</h2>
            <p className={`text-xs md:text-base leading-[24px] tracking-[-1px] ${subtitleColor}`}>{subtitle}</p>
        </div>
    )
}

export default TitleText