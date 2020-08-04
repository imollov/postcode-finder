import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormField, TextInput } from 'grommet'
import { FormSearch } from 'grommet-icons'

const AddressInput = ({
  address,
  suggestions,
  error,
  onChange,
  onSelect,
  ...rest
}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(address)
  }, [address])

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
    onChange(value)
  }

  return (
    <Field error={error}>
      <TextInput
        value={value || ''}
        onChange={handleChange}
        onSelect={onSelect}
        suggestions={suggestions}
        type="search"
        icon={<FormSearch color="accent" />}
        placeholder="Type an address..."
        {...rest}
      />
    </Field>
  )
}

const Field = styled(FormField)`
  width: 100%;
`

export default AddressInput
