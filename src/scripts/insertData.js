import { studentModel } from "../models/student.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Cargamos las variables de entorno
dotenv.config({ path: "../../.env" });
const urlMongo = process.env.URI_MONGO;

const studentes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
    dni: "12345678A",
    curso: "Backend",
    nota: 8,
  },
  {
    nombre: "María",
    apellido: "García",
    edad: 22,
    dni: "87654321B",
    curso: "Frontend",
    nota: 9,
  },
  {
    nombre: "Pedro",
    apellido: "López",
    edad: 21,
    dni: "24680135C",
    curso: "Backend",
    nota: 7,
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    edad: 23,
    dni: "36912157D",
    curso: "Frontend",
    nota: 6,
  },
  {
    nombre: "Luis",
    apellido: "Rodríguez",
    edad: 19,
    dni: "98765432E",
    curso: "Backend",
    nota: 10,
  },
  {
    nombre: "Laura",
    apellido: "Hernández",
    edad: 20,
    dni: "45678901F",
    curso: "Frontend",
    nota: 7.5,
  },
  {
    nombre: "Diego",
    apellido: "González",
    edad: 21,
    dni: "13579246G",
    curso: "Backend",
    nota: 8.5,
  },
  {
    nombre: "Sofía",
    apellido: "Sánchez",
    edad: 22,
    dni: "25801473H",
    curso: "Frontend",
    nota: 9.2,
  },
  {
    nombre: "Pablo",
    apellido: "Ramírez",
    edad: 24,
    dni: "78901234I",
    curso: "Backend",
    nota: 6.8,
  },
  {
    nombre: "Carmen",
    apellido: "Torres",
    edad: 20,
    dni: "65432109J",
    curso: "Frontend",
    nota: 8,
  },
];

mongoose
  .connect(urlMongo)
  .then(async () => {
    try {
      await studentModel.insertMany(studentes);
      console.log("Data inserted successfully");
    } catch (error) {
      console.log("Error inserting data: ", error);
    } finally {
      mongoose.disconnect();
    }
  })
  .catch((error) => console.log("Error connecting to MongoDB: ", error));
