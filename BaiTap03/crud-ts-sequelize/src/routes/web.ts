// src/routes/web.ts
import { Router } from 'express';
import { HomeController } from '../controllers/home.controller';

const router = Router();

router.get('/', HomeController.getHome);

router.get('/users', HomeController.getAllUsers);
router.post('/users', HomeController.postCreateUser);

router.get('/users/:id/edit', HomeController.getUpdateUser);
router.post('/users/:id', HomeController.postUpdateUser);

router.post('/users/:id/delete', HomeController.postDeleteUser);

export default router;
