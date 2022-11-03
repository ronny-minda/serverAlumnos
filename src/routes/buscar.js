const { Router } = require("express");
const { buscarCedula, buscarApellido } = require("../controllers/buscar");

const router = Router();

router.post("/", buscarCedula);
router.post("/buscarApellido", buscarApellido);

module.exports = router;
