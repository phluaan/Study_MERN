// src/app.ts
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import webRoutes from './routes/web';
import { sequelize } from './db/index';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'src', 'views'));

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', webRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
})();

export default app;
