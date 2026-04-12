import React from 'react'

function Button({children,
  onClick,
  type = "button",
  disabled = false,}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

export default Button
