import React from 'react'
import Avatar from './Avatar'

const ContractInfo = ({ avatarSize, avatarSrc }) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar size={avatarSize} src={avatarSrc} />
      <div>
        <p>First Name Last Name</p>
        <p>email@email.com</p>
      </div>
    </div>
  )
}

export default ContractInfo
