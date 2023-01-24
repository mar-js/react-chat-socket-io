import { Socket } from 'socket.io-client'

export interface IMessage {
  from: string;
  body: string
}

export interface MessagesContextModel {
  messages: IMessage[] | [];
  addMessage: (message: IMessage) => void;
  socket: Socket;
}
