// component/SearchInput.tsx
"use client";

import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search by name or location"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mb-4 p-3 rounded border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    />
  );
};

export default SearchInput;
