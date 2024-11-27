import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type SelectProps = {
  value: string | undefined;
  setValue: (value: string) => void;
  options: { label: string; value: string }[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string | boolean;
  label?: string; // Add label prop
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  name: string
};

const SelectInput: React.FC<SelectProps> = ({
  value,
  setValue,
  options,
  className = '',
  placeholder,
  disabled,
  error,
  label, // Add label to destructuring
  name,
  onBlur,
}) => {
  const [show, setShow] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const fetchedValue = options.find(option => option.value === value);
      if (fetchedValue) {
        setSelectedLabel(fetchedValue.label);
        // setSearchValue(fetchedValue.label);
      }
    }
  }, [value, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLabel(event.target.value);
    setSearchValue(event.target.value);
  };

  const filteredOptions = searchValue === selectedLabel ? options?.filter(option =>
    option?.label?.toLowerCase().includes(searchValue.toLowerCase())
  ) : options;

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className={`${error ? 'border-red-600' : ''} border mt-1 text-[0.875rem] flex flex-row items-center border-light-gray rounded-lg p-2`}>
        <input
          type="text"
          name={name}
          value={selectedLabel}
          className="w-full border-none capitalize bg-transparent outline-none focus:border-red-600"
          placeholder={placeholder}
          onChange={handleSearch}
          onClick={() => setShow(true)}
          disabled={disabled}
          onBlur={onBlur}
        />
        {!disabled && <img src="/d-down.svg" alt="" />}
      </div>
      {show && (
        <div className="max-h-[10rem] z-10 overflow-auto absolute text-sm w-full bg-white border border-light-gray shadow-lg">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setValue(option.value);
                setSelectedLabel(option.label);
                setSearchValue('');
                setShow(false);
              }}
              className="hover:bg-dim-gray capitalize p-2 cursor-pointer hover:bg-gray-100"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className="text-xs text-red-600 pl-2 pt-1">{error}</p>
      )}
    </div>
  );
};

export default SelectInput;