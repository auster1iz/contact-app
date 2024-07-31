import React from 'react'
import ContractInfo from '../../components/ContractInfo'
import { TextInput } from '../../components/Input'
import Button from '../../components/Button'
import TagsList from '../../components/TagsList'

const Contract = () => {
  return (
    <div>
      <div className="w-full flex justify-center max-w-[1280px] min-w-[400px] mx-auto mt-10">
        <div className="w-full max-w-[431px]">
          <ContractInfo avatarSize="83px" />
          <div className="flex flex-col gap-3 mt-6">
            <p className="text-base font-medium leading-5">Tags</p>
            <TagsList />
          </div>
          <div className="flex flex-col gap-6 mt-9">
            <TextInput />
            <Button buttonText="Add Tag" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contract
