import { Sequelize } from "sequelize";
import AirplaneModel from "./airplane.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

const Airplane = AirplaneModel(sequelize); // ✅ CALL the function to initialize the model

const db = {
  sequelize,
  Sequelize,
  Airplane, // ✅ export the actual model
};

export default db;
