import React from "react";
import Select, { Props as ReactSelectProps, StylesConfig } from "react-select";

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

const SelectReact: React.FC<SelectReactProps> = ({
  options,
  placeholder = "Select an option",
  className = "",
  label,
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
      />
    </div>
  );
};

export default SelectReact;
