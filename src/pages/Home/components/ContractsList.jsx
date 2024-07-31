import React from 'react'
import SingleContract from './SingleContract'

const ContractsList = () => {
  return (
    <div className="w-full max-w-[328px] md:max-w-[558px] flex flex-col gap-4 max-h-[640px] pb-2 overflow-auto">
      <SingleContract />
      <SingleContract />
      <SingleContract />
      <SingleContract />
      <SingleContract />
    </div>
  )
}

export default ContractsList
