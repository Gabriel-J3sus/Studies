import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
  return res.send('server is up and running')
})

export { router }