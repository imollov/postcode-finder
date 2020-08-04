import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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

AddressInput.propTypes = {
  address: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default AddressInput
