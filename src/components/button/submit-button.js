import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({ title }) => {
  return (
    <Button>{title}</Button>
  )
}

const Button = styled.button`
  background: #234465;
  color: #fff;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  border: none;
  border: 2px solid white;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    border: 2px solid #234465;
    color: #234465;
    font-style: italic;
  }
`

export default SubmitButton