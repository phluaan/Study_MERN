// src/services/crud.service.ts
import { User, UserCreationAttributes } from '../models/user';

export const CRUDService = {
  async createUser(payload: UserCreationAttributes) {
    return await User.create(payload);
  },

  async findAllUsers() {
    return await User.findAll({ order: [['id', 'DESC']] });
  },

  async findUserById(id: number) {
    return await User.findByPk(id);
  },

  async updateUser(
    id: number,
    payload: Partial<Omit<UserCreationAttributes, 'id'>>
  ) {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update(payload);
    return user;
  },

  async deleteUser(id: number) {
    return await User.destroy({ where: { id } });
  }
};
