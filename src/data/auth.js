import SQ from "sequelize";
import { sequelize } from "@/db/database.js";
const DataTypes = SQ.DataTypes;

// 자동으로 s가 붙어 테이블이 만들어집니다.
export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    member_id: DataTypes.INTEGER,
  },
  { timestamps: false }
);

export async function findByEmail(email) {
  return User.findOne({ where: { email } });
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
}

export async function findById(id) {
  return User.findByPk(id);
}
