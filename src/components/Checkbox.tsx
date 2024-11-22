import React from 'react';
interface Props {
    checked: boolean; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    label?: string | React.ReactNode;
    className?: string
  }
const Checkbox = ({ checked, onChange, label, className }: Props) => {
  return (
    <label className={`${className} checkbox-container flex whitespace-nowrap items-center gap-[11px] cursor-pointer`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-checkmark"></span>
      {label && <span className="text-dark-501 text-[15px] leading-[16.32px] font-normal">{label}</span>}
    </label>
  );
};

export default Checkbox;
