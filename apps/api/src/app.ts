import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
// import { PORT } from './config';
import router from './routers';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
