import React from "react";

interface InputProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    className?: string;
    classLabel?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    value?: string | number;
}

const InputField: React.FC<InputProps> = ({
    id,
    name,
    label,
    placeholder = "",
    required = false,
    type = "text",
    className = "",
    classLabel,
    onChange,
    onBlur,
    value,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block mb-1 text-sm font-medium text-gray-900 ${classLabel}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`shadow-sm bg-white border border-[#D9DAE5] text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 ${className}`}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

export default InputField;
