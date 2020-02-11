import { Table, Column, Model , DataType } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @Column
  id: number;

  @Column
  userName: string;

  @Column
  firstName: string;

  @Column
  password: string;

  @Column
  lastName: string;

  @Column
  age?: number;

  @Column
  createdAt?: string;

  @Column
  updatedAt?: string;
}

Users.init({
  // Model attributes are defined here
  id: {
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataType.STRING,
    allowNull: false
  },
  lastName: {
    type: DataType.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});