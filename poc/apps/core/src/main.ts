import express, { Request, Response } from 'express';
import { greetings } from '@libs/greetings';

const app = express()
app.use(express.json())

app.get('/hello', (req: Request, res: Response) => {
  const greeting = greetings()
  res.json(greeting)
})

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found')
})

export function serve() {
  const server = app.listen(3000, () => {
    console.log('Server started on port 3000')
  })
  return server
}
