const { Router } = require("express");
const { buscarCedula } = require("../middlewares/buscar");

const router = Router();

router.post("/", buscarCedula);

module.exports = router;
