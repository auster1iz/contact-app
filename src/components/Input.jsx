import React from 'react'

export const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  type = 'text',
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5 text-xs">
      {label && <label className="leading-5 ml-1.5">{label}</label>}
      <input
        className="w-full px-3 py-3.5 border-[1px] border-solid border-border rounded-lg placeholder:text-border outline-none"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
