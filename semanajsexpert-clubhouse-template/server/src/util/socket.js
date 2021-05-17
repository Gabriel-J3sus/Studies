import http from 'http'
import { Server } from 'socket.io'

export default class SocketServer {
  #io
  constructor({ port }) {
    this.port = port
  }

  async start() {
    const server = http.createServer((request, response) => {
      response.writeHead(200, {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'OPTIONS,POST,GET'
      })
      
      response.end('hey there!!')
    })

    this.#io = new Server(server, {
      cors: {
        origin: '*',
        credentials: false
      }
    })

    // const room = this.#io.of('/room')
    // room.on('connection', socket => {
    //   socket.emit('userConnection', 'socket id se conectou ' + socket.id)

    //   socket.on('joinRoom', (dados) => {
    //     console.log('dados recebidos', dados)
    //   })
    // })

    return new Promise((resolve, reject) => {
      server.on('error', reject)

      server.listen(this.port, () => resolve(server))
    })
  }
}