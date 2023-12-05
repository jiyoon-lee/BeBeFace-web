import mysql from 'mysql2'
import SQ from "sequelize";

export const sequelize = new SQ.Sequelize("dwitter", "root", "1234", {
  host: "localhost",
  dialect: 'mysql',
  dialectModule : mysql,
});
