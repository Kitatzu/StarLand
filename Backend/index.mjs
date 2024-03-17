import express from "express";
import router from "./src/routes/index.mjs";
import db from "./testDb.mjs";
import cors from "cors";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.options("*", (req, res) => {
  res.sendStatus(200);
});
const PORT = 3001;
app.use(router);

db.sequelize
  .sync({ alter: true }) // Utiliza { force: true } solo en desarrollo si quieres recrear tablas
  .then(() => {
    console.log("Base de datos sincronizada correctamente");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
