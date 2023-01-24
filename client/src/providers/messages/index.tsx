import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react'

import { io } from 'socket.io-client'

import { MessagesContext } from 'contexts'

import { IMessage } from 'interfaces'

export const MessagesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ messages, setMessages ] = useState<IMessage[] | []>([])

  const SOCKET = io('http://localhost:3000')

  const addMessage = useCallback((message: IMessage) => setMessages([ message, ...messages ]), [ messages ])

  useEffect((): any => {
    SOCKET.on('message', (message: IMessage) => addMessage(message))

    return () => SOCKET.off('message', (message: IMessage) => addMessage(message))
  }, [
    SOCKET,
    addMessage,
    messages
  ])

  const VALUE = {
    messages,
    addMessage,
    socket: SOCKET
  }

  return (
    <MessagesContext.Provider value={ VALUE }>
      { children }
    </MessagesContext.Provider>
  )
}
