const { Router } = require("express");
const {
  actualizarDatos,
  crear,
  borrar,
  buscarTodos,
} = require("../controllers/institucion");

const router = Router();

router.post("/crear", crear);
router.post("/buscarTodos", buscarTodos);
router.put("/actualizarDatos", actualizarDatos);
router.post("/borrar", borrar);

module.exports = router;
