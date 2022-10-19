const { Router } = require("express");
const {
  buscarCuentaID,
  buscarTodasCuenta,
  actualizarCuenta,
  crearCuenta,
  borarCuenta,
} = require("../middlewares/Cuentas");

const router = Router();

router.get("/buscarCuentaID", buscarCuentaID);

router.post("/buscarTodasCuenta", buscarTodasCuenta);

router.post("/crearCuenta", crearCuenta);

router.put("/actualizarCuenta", actualizarCuenta);

router.delete("/borarCuenta", borarCuenta);

module.exports = router;
