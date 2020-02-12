import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'Users'
})
export class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    type: DataType.STRING
  })
  userName: string;

  @Column({
    type: DataType.STRING
  })
  firstName: string;

  @Column
  password: string;

  @Column
  lastName: string;

  @Column
  age?: number;

  @Column({
    type: DataType.DATE
  })
  createdAt?: Date;

  @Column({
    type: DataType.DATE
  })
  updatedAt?: Date;
}
