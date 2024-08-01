import React, { useState } from 'react'
import { TextInput } from '../../../components/Input'
import Button from '../../../components/Button'
import { contactApi } from '../../../services/contactApi'
import { isEmailValid } from '../../../utils/isEmailValid'
import { notify, notifyError } from '../../../utils/notify'

const CreateContract = () => {
  const [createContact, { isLoading }] = contactApi.useCreateContactMutation()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async () => {
    if (!isEmailValid(email)) {
      notifyError('Invalid email')
      return
    }

    if (!firstName && !lastName) {
      notifyError('Please enter first name or last name')
      return
    }
    await createContact({ firstName, lastName, email })
    notify('contact created!')

    setFirstName('')
    setLastName('')
    setEmail('')
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-[280px] flex gap-2.5 flex-col sticky top-0"
    >
      <div className="flex gap-0.5 flex-col">
        <h2 className="text-xl font-medium leading-7">Create Contract</h2>
        <TextInput
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
        />
      </div>
      <TextInput
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        label="Last Name"
      />
      <div className="flex gap-5 flex-col">
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <Button
          onClick={onSubmit}
          buttonText="Add Contact"
          disabled={isLoading}
        />
      </div>
    </form>
  )
}

export default CreateContract
