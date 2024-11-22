import React from "react";
import Select, { Props as ReactSelectProps, StylesConfig } from "react-select";
import { FieldProps } from "formik"; // For integrating with Formik

// Define the type for options
interface Option {
  value: string;
  label: string;
}

// Extend ReactSelectProps with our custom props
interface SelectReactProps extends ReactSelectProps<Option> {
  placeholder?: string;
  className?: string; // Tailwind utility class
  label?: string
}

// Define custom styles for react-select
const customStyles: StylesConfig<Option> = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "#A51D21" : "#A51D21",
    boxShadow: state.isFocused ? "0 0 0 1px #A51D21" : "none",
    "&:hover": {
      borderColor: "#A51D21",
    },


    transition: "none",
    borderRadius: 4,
    // border: 'none', 
    padding: '0 20px',
    margin: 0,
    color: '',
    backgroundColor: '#ffffff',
    // marginLeft: 0,
    // border: "0px solid black",
    fontSize: 14,
    // backgroundColor: 'white',
    outline: 'none',
    // '&:hover': {
    // borderColor: '#832024',
    // },
    // '&:focus': {
    // borderColor: '#A51D21',
    // }
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
};

const SelectReact: React.FC<SelectReactProps & FieldProps> = ({
  options,
  placeholder = "Select an option",
  className = "",
  label,
  field, // Formik's field props
  form: { touched, errors }, // Formik's form state
  ...props
}) => {
  return (
    <div className={`${className} w-full`}>
        {label && <label className=' mb-2'>{label}</label>}
        {/* <br /> */}
      <Select
        className="w-full"
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        {...props}
        {...field}
      />
    </div>
  );
};

export default SelectReact;


// import React from "react";
// import Select, { StylesConfig } from "react-select";
// import { FieldProps } from "formik"; // For integrating with Formik

// // Define the type for options
// interface Option {
//   value: string;
//   label: string;
// }

// // Extend ReactSelectProps with our custom props
// interface SelectReactProps extends FieldProps {
//   options: Option[];
//   placeholder?: string;
//   label?: string;
//   className?: string; // Tailwind utility class
// }

// // Define custom styles for react-select
// const customStyles: StylesConfig<Option> = {
//   control: (base, state) => ({
//     ...base,
//     borderColor: state.isFocused ? "#A51D21" : "#A51D21",
//     boxShadow: state.isFocused ? "0 0 0 1px #A51D21" : "none",
//     "&:hover": {
//       borderColor: "#A51D21",
//     },
//     transition: "none",
//     borderRadius: 4,
//     padding: '0 20px',
//     margin: 0,
//     backgroundColor: '#ffffff',
//     fontSize: 14,
//     outline: 'none',
//   }),
//   menu: (base) => ({
//     ...base,
//     zIndex: 100,
//   }),
// };

// const SelectReact: React.FC<SelectReactProps & FieldProps> = ({
//   options,
//   placeholder = "Select an option",
//   label,
//   field, // Formik's field props
//   // name,
//   form, // Formik's form state
//   className = "",
//   ...props
// }) => {
//   const { touched, errors } = form;
//   return (
//     <div className={`${className} w-full`}>
//       {label && <label className="mb-2">{label}</label>}
//       <Select
//         {...props}
//         {...field}
//         options={options}
//         placeholder={placeholder}
//         styles={customStyles}
//         className="w-full"
//         onBlur={field.onBlur} // Connect to Formik's blur event
//         onChange={(selectedOption) => {
//           field.onChange({
//             target: {
//               name: field.name,
//               value: selectedOption?.value || '',
//             },
//           });
//         }}
//         value={options.find(option => option.value === field.value) || null} // Sync value with Formik state
//       />
//       {touched[field.name] && errors[field.name] && (
//         <div className="text-red-600 text-sm">{errors[field.name]}</div>
//       )}
//     </div>
//   );
// };

// export default SelectReact;
