"use client"
import {MutableRefObject, ReactNode, useRef, useState} from "react";
// import CollapseIcon from "/icons/chev-accord.svg";
// import PlusIcon from "/icons/chev-accord.svg";
import Image from "next/image";

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function Accordion({
  heading,
  showHeader = true,
  open = false,
  children,
  activeClass = "",
  otherClasses,
}: AccordionProps) {
  const [openAccordion, setopenAccordion] = useState(false);

  const toggleAccordion = () => {
    setopenAccordion(prev => !prev);
  };
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`relative bg-transparent rounded-lg max-w-[622px] mx-auto mb-2 md:mb-4  ${
        openAccordion ? activeClass : ""
      } ${otherClasses || ""}`}
    >
      {showHeader && (
        <div
          className={`w-full rounded-lg px-5 bg-white ${
            open || openAccordion
              ? ""
              : ""
          }`}
        >
          <div
            onClick={toggleAccordion}
            className={`flex cursor-pointer items-center justify-between py-2 space-x-3 bg-transparent`}
          >
            <span style={{flexGrow: 2}} className={`font-bold my-4 leading-6 tracking-[-0.5px] text-base text-[#23272E] ${open || openAccordion && '!text-[#23272E]'}`}>
              {heading}{" "}
            </span>
            <button type="button" className="hidden sm:block">
              {open || openAccordion ? (
                <Image src={'/icons/chev-accord.svg'} color="#FFEEC8" width={18.67} height={16.67} alt="minus" />
              ) : (
                <Image src={"/icons/chev-accord.svg"} color="#FFEEC8" width={18.67} height={16.67} alt="plus" />
              )}
            </button>
          </div>
        </div>
      )}
      <div
        ref={ref}
        style={{
          maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
        }}
        className={`relative transition-all border
        } overflow-hidden transition-all duration-[0.7rem] bg-white`}
      >
        <div className="px-5 bg-white hover:bg-white p-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;