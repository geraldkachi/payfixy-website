// import React, {useState,useEffect} from 'react';

// export type TextareaProps = {
//     setValue:(val:any)=>void
//     value:any
//     className?:string
//     cs?:string
//     placeholder?:string
//     label?:string
//     error?:any
//     save?:boolean
//     required?:boolean
//     maxLength?:number
//     mt?:number
//     style?: React.CSSProperties;
// }

// const Textarea: React.FC<TextareaProps> = (props) => {
//     const {
//         setValue,
//         value,
//         className,
//         cs,
//         mt,
//         label,
//         placeholder,
//         maxLength,
//         required,
//         save,
//         error,
//         style
//     } = props;

//     useEffect(()=>{
//         if (save){
//             // const val = sessionStorage.getItem(name) || "";
//             // setValue(val)
//         }
//     },[]);

//     const onChange=( {target}:any ) => {
//         setValue(target.value);
//         if (save){
//             // sessionStorage.setItem(name,target.value);
//         }
//     };

//     return (
//         <div style={{marginTop:mt}} className={cs}>
//             {label&&(
//                 <label htmlFor="" className="text-gray-800 text-sm">{label} {required&&(<span className="text-danger">*</span>)}</label>
//             )}
//             <textarea
//                 onChange={onChange}
//                 maxLength={maxLength}
//                 required={required}
//                 value={value}
//                 className={`${className} input border rounded-md h-20 text mt-1 resize-none`}
//                 placeholder={placeholder}
//                 style={style}
//             />
//             {error&&(
//                 <p className="text-xs text-danger pl-2 pt-1">{error}</p>
//             )}
//         </div>
//     );
// };

// export default Textarea;



import React from "react";

interface TextareaProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    classLabel?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    value?: string;
    error?: string | boolean; // To show error messages or states
    style?: React.CSSProperties; // For inline styles like height
}

const Textarea: React.FC<TextareaProps> = ({
    id,
    name,
    label,
    placeholder = "",
    required = false,
    className = "",
    classLabel,
    onChange,
    onBlur,
    value,
    error,
    style,
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className={`block mb-1 text-sm font-medium text-gray-900 ${classLabel}`}
            >
                {label}
            </label>
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
            {error && typeof error === "string" && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Textarea;

