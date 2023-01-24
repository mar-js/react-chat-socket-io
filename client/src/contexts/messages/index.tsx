import { createContext, useContext } from 'react'

import { MessagesContextModel } from 'interfaces'

export const MessagesContext = createContext<MessagesContextModel>({} as MessagesContextModel)

export const useMessages = (): MessagesContextModel => useContext(MessagesContext)
