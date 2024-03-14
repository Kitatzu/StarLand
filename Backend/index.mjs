import express from "express";
// import { statusDb } from "./db.mjs";
import router from "./src/routes/index.mjs";
import { startServer } from "./testDb.mjs";

startServer();

const app = express();

app.disable("x-powered-by");
app.use(express.json());
const PORT = 3001;
app.use(router);

app.listen(PORT, () => {
  console.log(`server listen in port ${PORT}`);
});
