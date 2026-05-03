import React from "react";

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-600">{label}
      <input
        {...props}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
  transition duration-200"
      />
      </label>
    </div>
  );
}

export default Input;
