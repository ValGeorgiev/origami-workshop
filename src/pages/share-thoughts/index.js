import React, { useState } from 'react'
import styled from 'styled-components'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import Origamis from '../../components/origamis'
import SubmitButton from '../../components/button/submit-button'
import getCookie from '../../utils/cookie'

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('')
  const [updatedOrigami, setUpdatedOrigami] = useState([])

  const handleSubmit = async () => {
    await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    })

    setPublication('')
    setUpdatedOrigami([...updatedOrigami, 1])
  }

  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>
        <div>
          <TextArea value={publication} onChange={e => setPublication(e.target.value)} />
        </div>
        <div>
          <SubmitButton title="Post" onClick={handleSubmit} />
        </div>
      </Container>
      
      <Origamis length={3} updatedOrigami={updatedOrigami} />

    </PageLayout>
  )
}

const Container = styled.div`
  text-align: center;
`

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  resize: none;
`

export default ShareThoughtsPage