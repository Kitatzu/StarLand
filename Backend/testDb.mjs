import { Sequelize } from "sequelize";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const config = {
  development: {
    dialect: "postgres",
    host: `${process.env.HOST}`, // El punto de conexión de la base de datos
    database: `${process.env.NAME}`, // El nombre de la base de datos
    username: `${process.env.USER}`, // Tu nombre de usuario de la base de datos
    password: `${process.env.PASSWORD}`, // Tu contraseña de la base de datos
    port: `${process.env.PORT}`,
  },
};

const sequelize = new Sequelize(config.development);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear una ruta absoluta para el directorio de modelos
const modelsDirectory = path.resolve(__dirname, "./src/models");

// Verifica los archivos en el directorio de modelos
console.log("Archivos en el directorio de modelos:");
fs.readdirSync(modelsDirectory).forEach((file) => {
  console.log(file);
});

async function loadModels() {
  const modelFiles = fs
    .readdirSync(modelsDirectory)
    .filter((file) => file.endsWith(".mjs"));
  for (const file of modelFiles) {
    try {
      const modelPath = path.join(modelsDirectory, file);
      const { default: model } = await import(`file://${modelPath}`);
      model(sequelize);
    } catch (error) {
      console.error(`Error al cargar el modelo ${file}:`, error);
    }
  }
}

async function startServer() {
  try {
    await loadModels();
    const entries = Object.entries(sequelize.models);
    const capsEntries = entries.map(([modelName, model]) => [
      modelName.charAt(0).toUpperCase() + modelName.slice(1),
      model,
    ]);
    sequelize.models = Object.fromEntries(capsEntries);

    const { Product, Brand } = sequelize.models;

    // Verifica los modelos cargados
    console.log("Modelos cargados:", sequelize.models);

    Brand.hasMany(Product, { foreignKey: "brandId" });
    Product.belongsTo(Brand, { foreignKey: "brandId" });

    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    console.log("Modelos cargados correctamente");
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

export { startServer };
