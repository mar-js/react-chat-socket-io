import { useMessages } from 'contexts'

import { Form, Messages } from 'components'

export const App: React.FC = () => {
  const { messages } = useMessages()

  return (
    <>
      <Form />
      { messages.map((message, index) => <Messages key={ message.from + message.body + index } { ...message } />) }
    </>
  )
}
