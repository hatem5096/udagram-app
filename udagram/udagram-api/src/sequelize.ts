import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.dbPort,
  dialect: "postgres",
  storage: "projectthree.cbvpuqxg7t4f.us-east-1.rds.amazonaws.com",
});


