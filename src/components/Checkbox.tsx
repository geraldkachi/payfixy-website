import React from 'react';
interface Props {
    checked: boolean; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    label?: string | React.ReactNode;
    className?: string
  }
const Checkbox = ({ checked, onChange, label, className }: Props) => {
  return (
    <label className={`${className} checkbox-container flex whitespace-nowrap items-center gap-[1px] cursor-pointer`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
      />

      <div className="checkbox-checkmark mr-4 w-[45px]"></div>
      {label && <span className="text-[]#474D66 text-[10px] leading-3 tracking-[-0.5px] font-normal break-words whitespace-pre-wrap">{label}</span>}
    </label>
  );
};

export default Checkbox;
