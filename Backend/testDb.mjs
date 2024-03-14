import { Sequelize } from "sequelize";
import products from "./src/models/products.mjs";
import brands from "./src/models/brands.mjs";
import user from "./src/models/user.mjs";

const config = {
  development: {
    dialect: "postgres",
    host: `${process.env.HOST}`, // El punto de conexión de la base de datos
    database: `${process.env.NAME}`, // El nombre de la base de datos
    username: `${process.env.USER}`, // Tu nombre de usuario de la base de datos
    password: `${process.env.PASSWORD}`, // Tu contraseña de la base de datos
    port: `${process.env.PORT}`,
    logging: false,
  },
};

const sequelize = new Sequelize(config.development);

const Product = products(sequelize);
const Brand = brands(sequelize);
const User = user(sequelize);

Product.belongsTo(Brand); // Un producto pertenece a una marca
Brand.hasMany(Product); // Una marca puede tener muchos productos

export default { sequelize, Product, Brand, User };
