import React from 'react'

const Button = ({ buttonText, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-center items-center py-2.5 border-[1px] border-solid border-border rounded text-base font-bold leading-6 hover:bg-border hover:text-white disabled:opacity-25 disabled:pointer-events-none"
      {...rest}
    >
      {buttonText}
    </button>
  )
}

export default Button
