import React, { useState } from 'react'
import { TextInput } from '../../../components/Input'
import Button from '../../../components/Button'
import { contactApi } from '../../../services/contactApi'
import { notifyError } from '../../../utils/notify'

const AddNewTag = ({ id, tags }) => {
  const [addNewTag, { isLoading }] = contactApi.useAddNewTagMutation()

  const [tag, setTag] = useState('')

  const addTag = async () => {
    if (!tag) {
      notifyError('Please add a tag')
      return
    }
    const previousTegs = tags.map((tag) => tag.tag)
    await addNewTag({ id, tags: [...previousTegs, tag] })
    setTag('')
  }

  return (
    <div className="flex flex-col gap-6 mt-9">
      <TextInput
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Add new Tag"
      />
      <Button onClick={addTag} buttonText="Add Tag" disabled={isLoading} />
    </div>
  )
}

export default AddNewTag
