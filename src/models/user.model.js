import mongoose from "mongoose";

const userCollection = "usuarios"; // nombre de la coleccion en la base de datos

const userSchema = new mongoose.Schema({
  //setear las propiedades del modelo
  first_name: {
    type: String,
    required: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

export const userModel = mongoose.model(userCollection, userSchema); //exportar el modelo
