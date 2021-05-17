import { constants } from '../../_shared/constants.js'
import SocketBuilder from '../../_shared/socketBuilder.js'

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected! ', user))
  .setOnUserDisconnected((user) => console.log('user disconnected! ', user))
  .build()


const room = {
  id: Date.now(),
  topic: 'JS Expert é nós'
}

const user = {
  img: 'https://cdn4.iconfinder.com/data/icons/scenarium-vol-6/128/045_millionaire_capitalist_man-256.png',
  username: 'Gabriel Jesus'
}

socket.emit(constants.events.JOIN_ROOM, { user, room })