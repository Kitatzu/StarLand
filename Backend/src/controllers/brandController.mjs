import db from "../../testDb.mjs";

const { Brand } = db;

async function getBrands(req, res) {
  try {
    const allBrands = await Brand.findAll();
    res.status(200).json({ allBrands });
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

async function addBrands(req, res) {
  const { name, logo_url } = req.body;

  try {
    const newBrand = await Brand.create({
      name: name,
      logo_url: logo_url,
    });
    res.status(200).json({ message: "Your new product", newBrand });
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

export { getBrands, addBrands };
