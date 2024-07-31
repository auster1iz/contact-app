import React from 'react'
import Avatar from './Avatar'

const ContactInfo = ({ avatarSize, avatarSrc, firstName, lastName, email }) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar size={avatarSize} src={avatarSrc} />
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default ContactInfo
