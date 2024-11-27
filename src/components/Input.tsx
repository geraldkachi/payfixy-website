// import React from "react";

// interface InputProps {
//     id: string;
//     name: string;
//     label: string;
//     placeholder?: string;
//     required?: boolean;
//     type?: string;
//     className?: string;
//     classLabel?: string;
//     onChange?: React.ChangeEventHandler<HTMLInputElement>;
//     onBlur?: React.FocusEventHandler<HTMLInputElement>;
//     value?: string | number;
//     error: string
// }

// const InputField: React.FC<InputProps> = ({
//     id,
//     name,
//     label,
//     placeholder = "",
//     required = false,
//     type = "text",
//     className = "",
//     classLabel,
//     onChange,
//     onBlur,
//     value,
//     error
// }) => {
//   return (
//     <div>
//       <label
//         htmlFor={id}
//         className={`block mb-1 text-sm font-medium text-gray-900 ${classLabel}`}
//       >
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         name={name}
//         className={`shadow-sm bg-transparent border border-[#D9DAE5] text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 ${className}`}
//         placeholder={placeholder}
//         required={required}
//         onChange={onChange}
//         onBlur={onBlur}
//         value={value}
//       />
//       {error && typeof error === "string" && (
//                 <p className="mt-1 text-sm text-red-500">{error}</p>
//             )}
//     </div>
//   );
// };

// export default InputField;

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
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: string | number;
    multiline?: boolean; // New prop for multiline support
    error?: string | boolean; // To handle error messages
    style?: React.CSSProperties;
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
    multiline = false,
    error,
    style
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className={`block mb-1 text-sm font-medium text-gray-900 ${classLabel}`}
            >
                {label}
            </label>
            {multiline ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className={`shadow-sm bg-transparent border border-[#D9DAE5] text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 ${className} ${
                        error ? "border-red-500" : ""
                    }`}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={style}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className={`shadow-sm bg-transparent border border-[#D9DAE5] text-gray-900 text-sm rounded-lg focus:ring-0 outline-none focus:border-[#A73636] block w-full p-2.5 ${className} ${
                        error ? "border-red-500" : ""
                    }`}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
            {error && typeof error === "string" && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default InputField;

