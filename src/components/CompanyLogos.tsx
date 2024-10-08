import React from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

const CompanyLogos = () => {
  return (
    <section className="my-5">
      <div className="max-w-[1120px] mx-auto md:flex items-center justify-center  text-black px-3 xl:px-0 py-5">
        <h1 className="text-lg font-semibold leading-[24px] tracking-[-1px] text-center">PayFixy is tried and trusted by leaders in the Nigerian corporate world.</h1>
      </div>
      <FirstSlide />
      <SecondSlide />
    </section>
  );
};

export default CompanyLogos;
