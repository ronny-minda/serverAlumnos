const { Router } = require("express");
const {
  actualizarDatos,
  crear,
  borrar,
} = require("../middlewares/institucion");

const router = Router();

router.post("/crear", crear);
router.put("/actualizarDatos", actualizarDatos);
router.delete("/borrar", borrar);

module.exports = router;
