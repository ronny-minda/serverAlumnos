const { Router } = require("express");
const { prueba } = require("../controllers/prueba");
const { ingresarAdmin,
     ingresarInstituciones,
      ingresarSupervisoras,
      ingresarTutoras,
      ingresarAlumnos } = require("../controllers/Prueba/ingesarDatos");

const router = Router();

router.post("/", prueba);

router.post("/ingresarAdmin", ingresarAdmin);
router.post("/ingresarInstituciones", ingresarInstituciones);
router.post("/ingresarSupervisoras", ingresarSupervisoras);
router.post("/ingresarTutoras", ingresarTutoras);
router.post("/ingresarAlumnos", ingresarAlumnos);

module.exports = router;
