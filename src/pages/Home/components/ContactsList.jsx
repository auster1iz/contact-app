import React from 'react'
import SingleContact from './SingleContact'

const ContactsList = () => {
  return (
    <div className="w-full max-w-[328px] md:max-w-[558px] flex flex-col gap-4 max-h-[640px] pb-2 overflow-auto">
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
    </div>
  )
}

export default ContactsList
