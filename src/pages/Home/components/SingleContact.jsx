import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '../../../assets/icons/delete-icon.svg'
import ContactInfo from '../../../components/ContactInfo'
import { stopPropagation } from '../../../utils/stopPropagation'
import { ROUTES } from '../../../constants/routes'
import TagsList from '../../../components/TagsList'
import { contactApi } from '../../../services/contactApi'
import { notify } from '../../../utils/notify'

const SingleContact = ({ contact }) => {
  const [deleteContact] = contactApi.useDeleteContactMutation()
  const navigate = useNavigate()

  const navigateToContract = () => {
    navigate(ROUTES.contact.replace(':id', contact.id))
  }

  const onDelete = async (e) => {
    stopPropagation(e)
    await deleteContact(contact.id)
    notify('contact deleted!')
  }

  return (
    <div
      className="w-full bg-primary rounded pt-3.5 pl-3.5 pb-6 pr-5 cursor-pointer"
      onClick={navigateToContract}
    >
      <div className="flex justify-between items-start">
        <ContactInfo
          avatarSrc={contact.avatar_url}
          email={contact?.fields?.email?.[0]?.value}
          firstName={contact?.fields?.['first name']?.[0]?.value}
          lastName={contact?.fields?.['last name']?.[0]?.value}
        />
        <div className="cursor-pointer" onClick={onDelete}>
          <img className="w-full h-full" src={DeleteIcon} alt="delete" />
        </div>
      </div>
      <div className="max-w-[426px] mt-2.5 mx-auto">
        {!!contact?.tags?.length && <TagsList tags={contact?.tags} />}
      </div>
    </div>
  )
}

export default SingleContact
