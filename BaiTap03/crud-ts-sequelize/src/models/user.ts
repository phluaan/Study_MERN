// src/models/user.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

// Định nghĩa các thuộc tính của User
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Khi tạo user mới, id/createdAt/updatedAt không bắt buộc
export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public address?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);
