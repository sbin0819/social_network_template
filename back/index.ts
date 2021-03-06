import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';
import { sequelize } from './models';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.set('port', process.env.PORT || 4322);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err: any) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || '1234',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use('/', (req, res) => {
  res.send('hi');
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  res.status(404);
  next(error);
});

app.use(
  (
    err: { message: any },
    req: any,
    res: {
      locals: { message: any; error: any };
      status: (arg0: any) => void;
      render: (arg0: string) => void;
    },
    next: any,
  ) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(res.status || 500);
    res.render('error');
  },
);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
