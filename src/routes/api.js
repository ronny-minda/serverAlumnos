const { Router } = require("express");
const { validator } = require("../middlewares/api");

const router = Router();

router.get("/halo", validator);

module.exports = router;
