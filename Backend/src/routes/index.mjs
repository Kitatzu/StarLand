import express from "express";

const router = express.Router();

router.get("/products");
router.post("/products");
router.put("/products");

router.use((req, res) => {
  res.status(400).send("Resource not found, invalid route");
});

export default router;
