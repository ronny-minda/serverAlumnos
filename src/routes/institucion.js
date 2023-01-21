const { Router } = require("express");
const {
  actualizarDatos,
  crear,
  borrar,
  buscarTodos,
  crearGrupoGobal,
} = require("../controllers/institucion");

const router = Router();

router.post("/crear", crear);
router.get("/buscarTodos", buscarTodos);
router.post("/crearGrupoGobal", crearGrupoGobal);
router.put("/actualizarDatos", actualizarDatos);
router.post("/borrar", borrar);



module.exports = router;
