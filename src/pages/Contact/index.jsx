import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ContactInfo from '../../components/ContactInfo'
import TagsList from '../../components/TagsList'
import { contactApi } from '../../services/contactApi'
import AddNewTag from './components/AddNewTag'

const Contact = () => {
  const { id } = useParams()
  const { data, isLoading } = contactApi.useGetSingleContactQuery(id)

  const contact = useMemo(() => {
    const result = data?.resources?.[0]
    if (!result) return null

    return result
  }, [data])

  return (
    <div>
      <div className="w-full flex justify-center max-w-[1280px] min-w-[400px] mx-auto mt-10">
        {isLoading && <div className="mx-auto">Loading...</div>}

        {contact && (
          <div className="w-full max-w-[431px]">
            <ContactInfo
              avatarSize="83px"
              avatarSrc={contact.avatar_url}
              email={contact?.fields?.email?.[0]?.value}
              firstName={contact?.fields?.['first name']?.[0]?.value}
              lastName={contact?.fields?.['last name']?.[0]?.value}
            />
            <div className="flex flex-col gap-3 mt-6">
              <p className="text-base font-medium leading-5">Tags</p>
              {!!contact?.tags?.length && <TagsList tags={contact?.tags} />}
            </div>
            <AddNewTag id={id} tags={contact?.tags} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
