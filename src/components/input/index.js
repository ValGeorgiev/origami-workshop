import React from 'react'

const Input = ({label, id, value, onChange}) => {

  return (
    <div>
      <label htmlFor={id}>
        {label}:
        <input id={id} value={value} onChange={onChange} />
      </label>
    </div>
  )

}

export default Input