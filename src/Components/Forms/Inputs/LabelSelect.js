import React from "react";

const LabelSelect = ({ name, label, options, ...props }) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <select
        id={name}
        name={name}
        {...props}
        className="block py-1.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
      >
        <option disabled value="">
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabelSelect;