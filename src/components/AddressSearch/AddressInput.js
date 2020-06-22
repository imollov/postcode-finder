import React from 'react'
import styled from 'styled-components'
import { FormField, TextInput } from 'grommet'
import { FormSearch } from 'grommet-icons'

const Field = styled(FormField)`
  width: 100%;
`

const AddressInput = ({ value, onChange, suggestions, onSelect, error }) => (
  <Field error={error}>
    <TextInput
      value={value}
      onChange={onChange}
      onSelect={onSelect}
      type="search"
      icon={<FormSearch color="accent" />}
      placeholder="Search an address worldwide..."
      suggestions={suggestions}
    />
  </Field>
)

export default AddressInput