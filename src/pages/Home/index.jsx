import React from 'react'
import CreateContract from './components/CreateContract'
import ContactsList from './components/ContactsList'

const Home = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[38px] max-w-[1280px] min-w-[400px] max-h-[100vh] mx-auto pt-10 relative">
        <CreateContract />
        <ContactsList />
      </div>
    </div>
  )
}

export default Home
