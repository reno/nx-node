import express, { Request, Response } from 'express';
import { generateRandomGreeting } from '@libs/greetings';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const greeting = generateRandomGreeting()
  res.json(greeting);
})

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
