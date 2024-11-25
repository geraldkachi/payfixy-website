import React from "react";
import Select, { StylesConfig } from "react-select";

interface Option {
  value: string | number;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: Option[];
  value: Option | null;
  formik: any; // Replace `any` with proper Formik types if needed
  customStyles: StylesConfig<Option>;
  placeholder?: string;
}


const customStyles: StylesConfig<Option> = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#A51D21" : "",
        boxShadow: state.isFocused ? "0 0 0 1px #A51D21" : "none",
        "&:hover": {
            borderColor: "#A51D21",
        },
        transition: "none",
        borderRadius: 4,
        padding: '0 20px',
        margin: 0,
        backgroundColor: '#ffffff',
        fontSize: 14,
        outline: 'none',
    }),
    menu: (base) => ({
        ...base,
        zIndex: 100,
    }),
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
  formik,
  placeholder = "Select an option",
}) => {
  return (
    <div className="w-full">
      <label className="mb-2">{label}</label>
      <Select
        id={name}
        options={options}
        name={name}
        value={value}
        onChange={(selectedOption) =>
          formik.setFieldValue(name, selectedOption?.value || "")
        }
        onBlur={formik.handleBlur}
        styles={customStyles}
        placeholder={placeholder}
        components={{
          IndicatorSeparator: () => null, // Removes the separator
          DropdownIndicator: () => null, // Removes the chevron
        }}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-600 text-sm">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
