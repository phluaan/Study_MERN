// src/controllers/home.controller.ts
import { Request, Response } from 'express';
import { CRUDService } from '../services/crud.service';

export const HomeController = {
  getHome: async (_req: Request, res: Response) => {
    // render trang chính (form tạo user)
    res.render('crud', { title: 'User CRUD' });
  },

  postCreateUser: async (req: Request, res: Response) => {
    const { firstName, lastName, email, address } = req.body;
    try {
      await CRUDService.createUser({ firstName, lastName, email, address });
      res.redirect('/users');
    } catch (err) {
      // đơn giản: trả lỗi 400 (có thể mở rộng thông báo)
      res.status(400).send('Error creating user: ' + (err as Error).message);
    }
  },

  getAllUsers: async (_req: Request, res: Response) => {
    const users = await CRUDService.findAllUsers();
    res.render('users/findAllUser', { users });
  },

  getUpdateUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await CRUDService.findUserById(id);
    if (!user) return res.status(404).send('User not found');
    res.render('users/updateUser', { user });
  },

  postUpdateUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { firstName, lastName, email, address } = req.body;
    const updated = await CRUDService.updateUser(id, { firstName, lastName, email, address });
    if (!updated) return res.status(404).send('User not found');
    res.redirect('/users');
  },

  postDeleteUser: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await CRUDService.deleteUser(id);
    res.redirect('/users');
  }
};
