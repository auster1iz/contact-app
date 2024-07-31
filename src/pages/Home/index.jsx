import React from 'react'
import CreateContract from './components/CreateContract'
import ContractsList from './components/ContractsList'

const Home = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[38px] max-w-[1280px] min-w-[400px] mx-auto mt-10">
        <CreateContract />
        <ContractsList />
      </div>
    </div>
  )
}

export default Home
