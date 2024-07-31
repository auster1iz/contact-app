import React from 'react'
import DefaultAvatar from '../assets/icons/avatar-icon.svg'

const Avatar = ({ size, src }) => {
  return (
    <div
      className=""
      style={{
        width: size || '59px',
        height: size || '59px',
      }}
    >
      <img src={src ? src : DefaultAvatar} alt="" />
    </div>
  )
}

export default Avatar
