import React from 'react'
import { TextInput } from '../../../components/Input'
import Button from '../../../components/Button'

const AddNewTag = () => {
  return (
    <div className="flex flex-col gap-6 mt-9">
      <TextInput placeholder="Add new Tag" />
      <Button buttonText="Add Tag" />
    </div>
  )
}

export default AddNewTag
