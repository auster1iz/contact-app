import React from 'react'
import ContactInfo from '../../components/ContactInfo'
import TagsList from '../../components/TagsList'
import AddNewTag from './components/AddNewTag'

const Contact = () => {
  return (
    <div>
      <div className="w-full flex justify-center max-w-[1280px] min-w-[400px] mx-auto mt-10">
        <div className="w-full max-w-[431px]">
          <ContactInfo avatarSize="83px" />
          <div className="flex flex-col gap-3 mt-6">
            <p className="text-base font-medium leading-5">Tags</p>
            <TagsList />
          </div>
          <AddNewTag />
        </div>
      </div>
    </div>
  )
}

export default Contact
