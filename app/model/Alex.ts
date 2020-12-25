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

@Table
export default class Config extends Model<Config> {
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
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
