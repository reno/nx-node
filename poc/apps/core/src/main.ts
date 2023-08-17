import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
