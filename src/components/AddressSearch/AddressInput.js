import React from 'react'
import { TextInput } from 'grommet'
import { FormSearch } from 'grommet-icons'

const AddressInput = ({ value, onChange, suggestions, onSelect }) => (
  <TextInput
    value={value}
    onChange={onChange}
    onSelect={onSelect}
    type="search"
    icon={<FormSearch color="accent" />}
    placeholder="Search an address worldwide..."
    suggestions={suggestions}
  />
)

export default AddressInput
