// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// const Spinner = () =>
//     <div className=" flex items-center justify-center px-10 py-[2px]">
//         <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin border-[#ffffff]" />
//     </div>

// type Props = DetailedHTMLProps<
//     ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
// > & {
//     icon?: string;
//     loading?: boolean;
//     size?: 'sm' | 'md' | 'lg';
//     variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'secondary-outline';
//     prefixIcon?: React.ReactNode;
//     suffixIcon?: React.ReactNode;
//     children?: ReactNode
// };

// const variants = {
//     primary: 'bg-[#01C467] text-white border-non hover:bg-[#01C467] text-xs md:text-sm py-3 md:py-4 px-2 md:px-6',
//     secondary: 'bg-white text-[#000024] hover:bg-red-1 border-none',
//     link: 'bg-none text-blue hover:bg-white-azure border-none',
//     outline:
//         'bg-white text-blue hover:bg-white-azure border-blue disabled:border-grey-beau',
//     "secondary-outline":
//         'bg-transparent text-red hover:bg-red hover:text-white border-red disabled:border-grey-beau'
// };

// const sizes = {
//     sm: 'text-xs md:text-sm py-3 md:py-2 px-2 md:px-6 min-w-40',
//     md: 'p-2 px-10 -w-152',
//     lg: 'p-3 px-10 -w-196'
// };


// const Button = ({
//     children,
//     loading,
//     disabled,
//     title,
//     className,
//     size = 'lg',
//     type = 'button',
//     variant = 'primary',
//     prefixIcon = null,
//     suffixIcon = null,
//     ...rest
// }: Props) => {
//     return (
//         <button {...rest}
//             type={type}
//             disabled={disabled || loading}
//             className={`flex items-center text-xs md:text-sm py-4 px-4 md:px-6 rounded-[10px] font-bold disabled:bg-gray-300 disabled:text-gray-50 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className} ${(loading) && 'py-3 md:py-4 px-8 md:px-12 bg-[#EEF5FC] text-[#ABBED1]'}`}>
//             {prefixIcon && (<> {prefixIcon}&nbsp;&nbsp;</>)}
//             {loading ? <Spinner /> : <>{title || children}</>}
//             {suffixIcon && (<> &nbsp;&nbsp;{suffixIcon}</>)}
//         </button>
//     )
// }

// export default Button


import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`w-full py-2 text-white rounded-lg transition ${
        disabled || isLoading
          ? "bg-[#F9DADA] cursor-not-allowed"
          : "bg-[#A51D21] hover:bg-red-800"
      } ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;

