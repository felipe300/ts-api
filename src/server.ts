import express from 'express'

export default function createServer() {
  const app = express()

  app.get('/final/:club1/:club2', (req, res) => {
    res.send(`Final ${req.params.club1} / ${req.params.club2}`)
  })

  return app
}
