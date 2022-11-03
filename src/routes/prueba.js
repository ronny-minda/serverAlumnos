const { Router } = require("express");
const { prueba } = require("../controllers/prueba");

const router = Router();

router.post("/", prueba);

module.exports = router;
