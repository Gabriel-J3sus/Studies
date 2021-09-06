import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

import { router } from './router'

import { addUser, getUser, getUsersInRoom, removeUser } from './users'

const app = express()
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log("A user connected")

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error)
    }

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` })

    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined the room!` });

    socket.join(user.room);

    io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room)})

    callback();
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
    }
    console.log('User had left!!!')
  })
})

app.use(router)

server.listen(3333, () => console.log("----- Server is running at localhost:3333 ------"))