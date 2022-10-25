const { Router } = require("express");
const {
  actualizarDatos,
  crear,
  borrar,
  pedirTodos,
} = require("../middlewares/supervisora");

const router = Router();

router.get("/pedirTodos", pedirTodos);
router.post("/crear", crear);
router.put("/actualizarDatos", actualizarDatos);
router.post("/borrar", borrar);

module.exports = router;
