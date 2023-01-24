import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server as SocketIoServer } from 'socket.io'

import { IMessage } from 'interfaces'

const APP = express()
const SERVER = http.createServer(APP)
const SOCKET_IO = new SocketIoServer(SERVER, { cors: { origin: '*' } })

APP.use(cors())

SOCKET_IO.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('message', (message: IMessage) => {
    socket.broadcast.emit('message', {
      from: socket.id,
      body: message
    })
  })
})

SERVER.listen(3000, () => console.log('The server listening in port: 3000'))
