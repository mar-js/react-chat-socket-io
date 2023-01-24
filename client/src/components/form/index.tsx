import { FormEvent } from 'react'

import { useMessages } from 'contexts'

import {
  Container,
  Input,
  Button
} from './styles'

export const Form: React.FC = () => {
  const { socket, addMessage } = useMessages()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const { message } = DATA as unknown as { message: string }

    socket.emit('message', message)

    addMessage({
      from: 'Me',
      body: message
    })

    return TARGET.reset()
  }

  return (
    <Container action="POST" onSubmit={ handleSubmit }>
      <Input name="message" type="text" />
      <Button type="submit">Send</Button>
    </Container>
  )
}
