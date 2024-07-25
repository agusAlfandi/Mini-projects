import express, { urlencoded, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routers';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req: Request, res: Response, next: NextFunction): void => {
  // console.log('Hello, World!');
  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
