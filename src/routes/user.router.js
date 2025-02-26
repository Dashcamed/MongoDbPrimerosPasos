// crear las operaciones CRUD
import { userModel } from "../models/user.model.js";

import { Router } from "express";

const router = Router();

//READ DE USER (FIND)
router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({ result: "success", payload: users }); //igual que el del CLI
  } catch (error) {
    console.log("cannot get user", error);
  }
});

//READ DE USER (FINDONE)
router.get("/:uid", async (req, res) => {
  try {
    let uid = req.params.uid;
    let user = await userModel.findOne({ _id: uid });
    res.send({ status: "success", payload: user });
  } catch (error) {
    console.log("cannot get user", error);
  }
});

//CREATE CREAR USUARIO
router.post("/", async (req, res) => {
  // 1. Obtener los datos que necesitamos agregar
  let { first_name, last_name, email } = req.body;
  // 2. Validación/Evaluación que los valores fueron cargados correctamente o solo si existen
  if (!first_name || !last_name || !email)
    return res.send({ status: "error", error: "Incomplete values" });
  // 3. Persistir la información en la base de datos
  let result = await userModel.create({
    first_name,
    last_name,
    email,
  });
  // 4. Retornar el usuario recién creado
  res.send({ status: "success", payload: result });
});

//UPDATE ACTUALIZAR USUARIO
router.put("/:uid", async (req, res) => {
  let uid = req.params.uid;
  let userToReplace = req.body;
  if (
    !userToReplace.first_name ||
    !userToReplace.last_name ||
    !userToReplace.email
  )
    return res.send({ status: "error", error: "Incomplete values" });
  let result = await userModel.updateOne({ _id: uid }, userToReplace);
  res.send({ status: "success", payload: result });
});

//DELETE ELIMINAR USUARIO
router.delete("/:uid", async (req, res) => {
  let uid = req.params.uid;
  let result = await userModel.deleteOne({ _id: uid });
  res.send({ status: "success", payload: result });
});

export default router;
