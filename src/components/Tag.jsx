import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div className="bg-secondary rounded px-3 w-fit">
      <p className="leading-5 font-medium text-[13px]">{tag.tag}</p>
    </div>
  )
}

export default Tag
