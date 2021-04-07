const express = require('express');
const routes = require("./routes");
const path = require("path")

const server = express();

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(routes)


server.listen(3333)