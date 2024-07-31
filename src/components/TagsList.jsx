import React from 'react'
import Tag from './Tag'

const TagsList = ({ tags }) => {
  return (
    <div className="w-full flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  )
}

export default TagsList
