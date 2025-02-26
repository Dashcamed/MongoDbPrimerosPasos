import studentModel from "../models/student.model.js";
import { Router } from "express";

const router = Router();

//get all students

router.get("/", async (req, res) => {
  try {
    let students = await studentModel.find();
    res.send({ result: "success", payload: students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get one student
router.get("/:uid", async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.uid);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.send({ result: "success", payload: student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//create student

router.post("/", async (req, res) => {
  try {
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res.status(201).json({ result: "success", payload: newStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update student

router.put("/:uid", async (req, res) => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.uid,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ result: "success", payload: updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//detete student

router.delete("/:uid", async (req, res) => {
  try {
    const deletedStudent = await studentModel.findByIdAndDelete(req.params.uid);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ result: "success", payload: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
