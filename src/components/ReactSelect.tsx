// import { FC } from 'react';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import Select, {ValueType, OptionsType,
//   DropdownIndicatorProps,
//   ClearIndicatorProps,
//   MultiValueRemoveProps,
//   components
// } from 'react-select';
// import clsx from 'clsx';
// import ChevronDownIcon from '@/svg/Cheron';

// interface Option {
//   value: string;
//   label: string;
// }

// interface ReusableSelectProps {
//   options: OptionsType<Option>;
//   onChange: (selected: ValueType<Option>) => void;
//   value: ValueType<Option>;
//   placeholder?: string;
//   label?: string;
//   error?: string;
//   required?: boolean;
//   name?: string;
//   isLoading?: boolean;
//   isMulti?: boolean;
//   isClearable?: boolean;  // New prop for clearing the selection
//   isSearchable?: boolean; // New prop for enabling search
// }

// const DropdownIndicator = (props: DropdownIndicatorProps) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <ChevronDownIcon />
//     </components.DropdownIndicator>
//   );
// };

// const ClearIndicator = (props: ClearIndicatorProps) => {
//   return <components.ClearIndicator {...props} />;
// };

// const MultiValueRemove = (props: MultiValueRemoveProps) => {
//   return <components.MultiValueRemove {...props} />;
// };

// const ReactSelect: FC<ReusableSelectProps> = ({
//   options,
//   onChange,
//   value,
//   placeholder = 'Select an option',
//   required,
//   error,
//   name,
//   label,
//   isLoading,
//   isMulti,
//   isClearable = false,
//   isSearchable = true,
//   ...props
// }) => {
//   return (
//     <div>
//       {label && <label className="text-sm mb-1" htmlFor={name}>{label}</label>}
//       <Select
//         value={value}
//         onChange={onChange}
//         options={options}
//         placeholder={placeholder}
//         required={required}
//         isMulti={isMulti}
//         isLoading={isLoading}
//         isClearable={isClearable}
//         isSearchable={isSearchable}
//         styles={{
//           control: (base) => ({
//             ...base,
//             borderRadius: 4,
//             padding: '0 20px',
//             backgroundColor: '#ffffff',
//             color: 'white',
//             borderColor: '#D8DAE5',
//             '&:hover': {
//               borderColor: '#832024',
//             },
//             '&:focus': {
//               borderColor: '#A51D21',
//             }
//           }),
//           placeholder: (provided) => ({
//             ...provided,
//             color: '#474D66',
//           }),
//           singleValue: (provided) => ({
//             ...provided,
//             color: '#474D66',
//           }),
//           multiValue: (provided) => ({
//             ...provided,
//             backgroundColor: '#4a4848',
//             color: '#474D66',
//           }),
//           option: (provided, { isFocused, isSelected }) => {
//             return {
//               ...provided,
//               backgroundColor: isFocused ? '#A51D21' : undefined,
//               color: isSelected ? '#474D66' : '#000000',
//               cursor: 'pointer',
//             };
//           },
//         }}
//         components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
//         classNames={{
//           control: ({ isFocused }) => clsx(isFocused ? 'border-[#A51D21]' : 'border-[#2A2A2A]'),
//         }}
//         {...props}
//       />
//       {error && <span className="text-sm text-red-500">{error}</span>}
//     </div>
//   );
// };

// export default ReactSelect;


import { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Select, { ValueType, OptionsType, DropdownIndicatorProps, ClearIndicatorProps, MultiValueRemoveProps, components } from 'react-select';
import clsx from 'clsx';
import ChevronDownIcon from '@/svg/Cheron';

interface ReusableSelectProps {
    options: OptionsType<{ value: string; label: string }>;
    onChange: (selected: ValueType<{ value: string; label: string }>) => void;
    value: ValueType<{ value: string; label: string }>;
    placeholder?: string;
    label?: string;
    error?: string;
    required?: boolean;
    name?: string;
    isLoading?: boolean;
    isMulti?: boolean;
    isClearable?: boolean;  
    isSearchable?: boolean; 
}


const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronDownIcon />
        </components.DropdownIndicator>
    );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
    return (
        <components.ClearIndicator {...props}>
            {/* <CloseIcon /> */}
        </components.ClearIndicator>
    );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
    return (
        <components.MultiValueRemove {...props}>
            {/* <CloseIcon /> */}
        </components.MultiValueRemove>
    );
};

const controlStyles = {
    base: "border rounded-[100px] sm:w-[200px] bg-[#2A2A2A] hover:cursor-pointer",
    focus: "border-[#2A2A2A] ring-0 text-white outline-none focus:border-none",
    nonFocus: "border-[#2A2A2A] hover:border-[#2A2A2A] text-white",
};
const placeholderStyles = "pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5 !text-white";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
    "bg-[#4a4848] rounded-[100px] text-white items-center py-0.5 pl-2 pr-0.5 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5 text-white";
const multiValueRemoveStyles =
    "border border-[#2A2A2A] bg-[#ffffff] hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
    "text-white p-1 rounded-md hover:bg-red-50 hover:text-white";
const indicatorSeparatorStyles = "bg-gray-300 hidden";
const dropdownIndicatorStyles =
    "p-1 hover:bg-transparent text-white rounded-md hover:text-transparent";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-white text-sm";
const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded",
    focus: "bg-gray-100 active:bg-gray-200",
    selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles = "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";


const ReactSelect: FC<ReusableSelectProps> = ({
    options,
    onChange,
    value,
    placeholder = 'Select an option',
    required,
    error,
    name,
    label,
    isLoading,
    isMulti,
    isClearable = false,
    isSearchable = true,
    // ref
    ...props

}: ReusableSelectProps) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    // const handleChange = (selected) => {
    //     setSelectedOption(selected);
    //   };

    return (
        <div className='flex flex-col flex-1  w-64'>
            {label && <label className='text-[10px] md:text-sm mb-1' htmlFor={name}>{label}</label>}
            <br />
            <Select
                className='w-full'
                defaultValue={value}
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                required={required}
                isMulti={isMulti}
                isClearable={isClearable}
                isSearchable={isSearchable}
                // closeMenuOnSelect={false}
                // hideSelectedOptions={false}
                // unstyled
                isLoading={isLoading}
                styles={{
                    placeholder: (provided, state) => ({
                        ...provided,
                        color: state.isFocused ? '#474D66' : '#474D66', // Placeholder text color
                      }),
                      singleValue: (provided, state) => ({
                        ...provided,
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore: '
                        color: state?.isFocused ? '#474D66' : '#474D66', // Selected text color
                      }),
                      multiValue:(provided, state) => ({
                          ...provided,
                          color: state?.isFocused ? '#474D66' : '#474D66', 
                          backgroundColor: '#bbbbbb',
                          borderColor: '#e2e2e2',
                          borderRadius: 5,
                          fontSize: 14,
                          padding: '5px 10px',
                      }),
                    input: (base) => ({
                        ...base,
                        color: 'white',
                        "input:focus": {
                            border: 0, // Remove the border
                            boxShadow: 'none', // Remove the box shadow
                            width: 0,
                            color: 'white'
                        },
                    }),
                    // On mobile, the label will truncate automatically, so we want to
                    // override that behaviour.
                    multiValueLabel: (base) => ({
                        ...base,
                        whiteSpace: "normal",
                        overflow: "visible",
                        color: '#000000',
                        // backgroundColor: '#cac8c8',
                    }),
                    multiValueRemove: (base) => ({
                        ...base,
                        color: '#ff0000',
                        backgroundColor: '#ff0000',
                    }),
                    control: (base) => ({
                        ...base,
                        transition: "none",
                        borderRadius: 4,
                        // border: 'none', 
                        boxShadow: 'none',
                        padding: '0 20px',
                        margin: 0,
                        color: '',
                        backgroundColor: '#ffffff',
                        // marginLeft: 0,
                        // border: "0px solid black",
                        fontSize: 14,
                        // backgroundColor: 'white',
                        outline: 'none',
                        '&:hover': {
                        borderColor: '#832024',
                        },
                        '&:focus': {
                        borderColor: '#A51D21',
                        }
                    }),
                    option: (provided, { isFocused, isSelected }) => {
                    return {
                        ...provided,
                        backgroundColor: isFocused ? '#A51D21' : undefined,
                        color: isSelected ? '#474D66' : '#000000',
                        cursor: 'pointer',
                    };
                    },
                }}
                components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
                classNames={{
                    control: ({ isFocused }) =>
                        clsx(
                            isFocused ? controlStyles.focus : controlStyles.nonFocus,
                            controlStyles.base,
                        ),
                    placeholder: () => placeholderStyles,
                    input: () => selectInputStyles,
                    valueContainer: () => valueContainerStyles,
                    singleValue: () => singleValueStyles,
                    multiValue: () => multiValueStyles,
                    multiValueLabel: () => multiValueLabelStyles,
                    multiValueRemove: () => multiValueRemoveStyles,
                    indicatorsContainer: () => indicatorsContainerStyles,
                    clearIndicator: () => clearIndicatorStyles,
                    indicatorSeparator: () => indicatorSeparatorStyles,
                    dropdownIndicator: () => dropdownIndicatorStyles,
                    menu: () => menuStyles,
                    groupHeading: () => groupHeadingStyles,
                    option: ({ isFocused, isSelected }) =>
                        clsx(
                            isFocused && optionStyles.focus,
                            isSelected && optionStyles.selected,
                            optionStyles.base,
                        ),
                    noOptionsMessage: () => noOptionsMessageStyles,
                }}
                {...props}
            />
            {error && (<span className="text-[10px] text-red-500">{error}</span>)}
        </div>
    )
}

export default ReactSelect 