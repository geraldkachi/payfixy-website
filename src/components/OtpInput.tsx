import React, { useState } from "react";

const OtpInput = ({ length = 6, onChange }: { length?: number; onChange: (otp: string) => void }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Move focus to the next input
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length).split("");
    const newOtp = Array(length).fill("");
    pasteData.forEach((char, idx) => {
      if (/^\d$/.test(char)) {
        newOtp[idx] = char;
      }
    });
    setOtp(newOtp);
    onChange(newOtp.join(""));
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((value, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;
