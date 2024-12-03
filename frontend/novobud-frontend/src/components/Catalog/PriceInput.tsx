import { on } from "events";
import React, { ChangeEvent } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface PriceInputProps {
  id: string;
  label: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const PriceInput: React.FC<PriceInputProps> = ({id, label, ref}) => {
  const [value, setValue] = React.useState(0);

  const handleArrowClick = (direction: "up" | "down") => {
    if (direction === "up") {
      setValue(value + 100);
    } else {
      if(value - 100 < 0) return
      setValue(value - 100);
    }
  };

  return (
    <div className="w-full relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 flex items-center"
      >
        {label}
      </label>
      <div className="flex items-center">
        <input
          ref={ref}
          id={id}
          name={id}
          type="text"
          value={value || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value))}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 pr-8"
          placeholder="0"
        />
        <div className="absolute right-2 flex flex-col">
          <FaChevronUp
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => handleArrowClick("up")}
          />
          <FaChevronDown
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => handleArrowClick("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceInput;
