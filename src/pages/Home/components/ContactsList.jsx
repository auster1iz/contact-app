import React from 'react'
import { contactApi } from '../../../services/contactApi'
import SingleContact from './SingleContact'

const ContactsList = () => {
  const { data, isLoading } = contactApi.useGetAllContactsQuery('')

  return (
    <div className="w-full max-w-[328px] md:max-w-[558px] flex flex-col gap-4 pb-2 overflow-auto">
      {isLoading && <div className="mx-auto">Loading...</div>}
      {!!data?.resources?.length &&
        data.resources.map((contact) => (
          <SingleContact key={contact.id} contact={contact} />
        ))}
    </div>
  )
}

export default ContactsList
