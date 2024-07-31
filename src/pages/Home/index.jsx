import React from 'react'
import { contactApi } from '../../services/contactApi'
import CreateContract from './components/CreateContract'
import ContactsList from './components/ContactsList'

const Home = () => {
  const { data } = contactApi.useGetAllContactsQuery('')
  console.log('data', data)
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[38px] max-w-[1280px] min-w-[400px] mx-auto mt-10">
        <CreateContract />
        <ContactsList />
      </div>
    </div>
  )
}

export default Home
