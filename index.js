import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import routes from './routes';
import cookieParser from 'cookie-parser';

const app = express();
const port =  8000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}));
app.use('/', routes);
app.use(cookieParser(process.env.COOKIE_SECRET));

app.listen(port);

export default app;
