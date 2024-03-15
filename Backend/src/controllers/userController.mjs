import db from "../../testDb.mjs";
import bcrypt from "bcrypt";
import { generateToken } from "../middelwares/auth.mjs";

const { User } = db;

async function getUsers(req, res) {
  try {
    const allUsers = await User.findAll();
    res.status(201).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
}

async function register(req, res) {
  const { username, password, role } = req.body;

  const findUser = await User.findOne({ where: { username: username } });
  try {
    if (findUser) {
      return res
        .status(400)
        .json({ message: `User: ${username} already exists` });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    if (role !== undefined) {
      const newUser = await User.create({
        username,
        password: hashPassword,
        role: role,
      });

      const tokenAdmin = generateToken({ username, role });

      return res
        .status(201)
        .json({ message: "new user created", newUser, tokenAdmin });
    }

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    const tokenUser = generateToken({ username, role });

    res.status(201).json({ message: "New user created", newUser, tokenUser });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const findUser = await User.findOne({ where: { username: username } });
    if (!findUser) {
      return res.status(401).send("Nombre de usuario o contraseña incorrectos");
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordMatch) {
      return res.status(401).send("Nombre de usuario o contraseña incorrectos");
    }

    const loginToken = generateToken({ username, role: findUser.role });

    res.status(200).json({ message: "Inicio de sesión exitoso", loginToken });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
}

export { getUsers, register, login };
