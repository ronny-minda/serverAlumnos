const { Router } = require("express");
const {
  buscarAlumnoID,
  buscarTodasAlumno,
  crearAlumno,
  actualizarAlumno,
  borarAlumno,
} = require("../middlewares/alumno");

const router = Router();

router.get("/buscarAlumnoID", buscarAlumnoID);

router.post("/buscarTodasAlumno", buscarTodasAlumno);

router.post("/crearAlumno", crearAlumno);

router.put("/actualizarAlumno", actualizarAlumno);

router.post("/borarAlumno", borarAlumno);

module.exports = router;
