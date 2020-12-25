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
  modelName: 'AlexTs',
  version: true,
})
export default class AlexTs extends Model<AlexTs> {
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
