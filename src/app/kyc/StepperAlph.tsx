import useAppStore from "@/utils/appStore";

const StepperAlph = () => {
    const currentStep = useAppStore((state) => state.count);
    const { steps, complete } = useAppStore();

    return (
        <div className="">
            <div className="flex flex-col">
                <div className="flex flex-col justify-between gap-1">
                    {steps.map((step, i) => {
                        return (
                            <div
                                key={i}
                                className={`flex flex-row justify-start items-center gap-3 pb-7 step-item ${currentStep === i + 1 ? "active" : ""
                                    } ${i + 1 < currentStep || complete ? "complete" : ""}`}
                            >
                                {/* Step Circle */}
                                <div
                                    className={`step rounded-full flex items-center justify-center w-[34px] h-[34px] ${i < currentStep || complete
                                            ? "bg-[#D8DAE5] text-white"
                                            : "bg-white text-white border border-[#ffffff]"
                                        }`}
                                >
                                    {i + 1 < currentStep ? (
                                        <img src="/mark-success.svg" alt="check" className="w-full" />
                                    ) : (
                                        <span className="text-[13px] text-[#181C32]">{i + 1}</span>
                                    )}
                                </div>

                                {/* Step Text */}
                                <div>
                                    <p
                                        key={i}
                                        className={`${currentStep === i + 1 ? "font-bold text-[#ffffff]" : "text-[#ffffff] "
                                            } text-xs whitespace-nowrap`}
                                    >
                                        {step}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepperAlph;
