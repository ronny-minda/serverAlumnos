const { Router } = require("express");
const { buscarCedula } = require("../controllers/buscar");

const router = Router();

router.post("/", buscarCedula);

module.exports = router;
