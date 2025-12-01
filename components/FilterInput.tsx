import React from 'react';

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, placeholder = "Buscar produto..." }) => {
  return (
    <div className="mb-12">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-lg mx-auto block bg-white border border-[#EAA95A]/50 rounded-full py-3 px-6 text-[#5A3A15] placeholder:text-[#5A3A15]/60 focus:outline-none focus:ring-2 focus:ring-[#EAA95A]"
      />
    </div>
  );
};
