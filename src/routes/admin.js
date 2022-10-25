const { Router } = require("express");
const {
  actualizarDatos,
  crearCuenta,
  borrar,
  buscar,
} = require("../middlewares/admin");

const router = Router();

router.post("/buscar", buscar);
router.post("/crear", crearCuenta);
router.put("/actualizarDatos", actualizarDatos);
//router.delete("/borrar", borrar);

module.exports = router;
