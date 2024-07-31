import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '../../../assets/icons/delete-icon.svg'
import ContactInfo from '../../../components/ContactInfo'
import { stopPropagation } from '../../../utils/stopPropagation'
import { ROUTES } from '../../../constants/routes'
import TagsList from '../../../components/TagsList'

const SingleContact = () => {
  const navigate = useNavigate()

  const navigateToContract = () => {
    navigate(ROUTES.contact.replace(':id', '2'))
  }

  return (
    <div
      className="w-full bg-primary rounded pt-3.5 pl-3.5 pb-6 pr-5 cursor-pointer"
      onClick={navigateToContract}
    >
      <div className="flex justify-between items-start">
        <ContactInfo />
        <div className="cursor-pointer" onClick={stopPropagation}>
          <img className="w-full h-full" src={DeleteIcon} alt="delete" />
        </div>
      </div>
      <div className="max-w-[426px] mt-2.5 mx-auto">
        <TagsList />
      </div>
    </div>
  )
}

export default SingleContact
