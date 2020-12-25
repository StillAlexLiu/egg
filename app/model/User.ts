import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  modelName: 'user',
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: '用户ID',
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
    comment: '用户姓名',
  })
  name: string;

  @Column({
    comment: '用户年龄',
  })
  age: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

