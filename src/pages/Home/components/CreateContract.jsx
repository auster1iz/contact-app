import React from 'react'
import { TextInput } from '../../../components/Input'
import Button from '../../../components/Button'

const CreateContract = () => {
  return (
    <div className="w-full max-w-[280px] flex gap-2.5 flex-col">
      <div className="flex gap-0.5 flex-col">
        <h2 className="text-xl font-medium leading-7">Create Contract</h2>
        <TextInput label="First Name" />
      </div>
      <TextInput label="First Name" />
      <div className="flex gap-5 flex-col">
        <TextInput label="First Name" />
        <Button buttonText="Add Contact" />
      </div>
    </div>
  )
}

export default CreateContract
